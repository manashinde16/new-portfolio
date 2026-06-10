"use client";

import { useEffect } from "react";

/**
 * All imperative page behaviour, ported from the original vanilla build:
 * smooth in-page navigation, scroll reveals, nav highlighting, timeline draw,
 * scroll progress, inertia scrolling, magnetic buttons, 3D card tilt,
 * count-up ticker, schematic parallax+tilt, grid pulse, the thread line,
 * the custom cursor, and tap-to-flip on touch devices.
 */
export default function Effects() {
  useEffect(() => {
    const FINE = window.matchMedia("(hover:hover) and (pointer:fine)").matches;
    const NO_MOTION = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cleanups: (() => void)[] = [];
    const on = <K extends keyof WindowEventMap>(
      target: Window | Document | Element,
      ev: string,
      fn: EventListenerOrEventListenerObject,
      opts?: AddEventListenerOptions
    ) => {
      target.addEventListener(ev, fn, opts);
      cleanups.push(() => target.removeEventListener(ev, fn, opts));
    };

    /* ---- inertia (Lenis-style) smooth scrolling ---- */
    let setScrollTarget: ((y: number) => void) | null = null;
    if (FINE && !NO_MOTION) {
      document.documentElement.style.scrollBehavior = "auto";
      let target = window.scrollY, current = target, raf: number | null = null, lastProg = 0;
      const maxY = () => document.documentElement.scrollHeight - window.innerHeight;
      const loop = () => {
        current += (target - current) * 0.11;
        if (Math.abs(target - current) < 0.5) current = target;
        lastProg = performance.now();
        window.scrollTo(0, current);
        raf = current !== target ? requestAnimationFrame(loop) : null;
      };
      on(window, "wheel", ((e: WheelEvent) => {
        if (e.ctrlKey) return;
        e.preventDefault();
        const d = e.deltaMode === 1 ? e.deltaY * 16 : e.deltaY;
        target = Math.min(Math.max(target + d, 0), maxY());
        if (!raf) raf = requestAnimationFrame(loop);
      }) as EventListener, { passive: false });
      on(window, "scroll", (() => {
        if (performance.now() - lastProg > 120) target = current = window.scrollY;
      }) as EventListener, { passive: true });
      setScrollTarget = (y: number) => {
        target = Math.min(Math.max(y, 0), maxY());
        if (!raf) raf = requestAnimationFrame(loop);
      };
      cleanups.push(() => { if (raf) cancelAnimationFrame(raf); });
    }

    /* ---- smooth in-page navigation ---- */
    const NAV_OFFSET = 72;
    const goTo = (id: string) => {
      const el = document.getElementById(id);
      const dest = !el || id === "top"
        ? 0
        : Math.max(el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET, 0);
      if (setScrollTarget) setScrollTarget(dest);
      else window.scrollTo({ top: dest, behavior: "smooth" });
    };
    document.querySelectorAll<HTMLElement>("[data-target]").forEach((el) => {
      on(el, "click", ((e: Event) => { e.preventDefault(); goTo(el.dataset.target!); }) as EventListener);
      on(el, "keydown", ((e: KeyboardEvent) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); goTo(el.dataset.target!); }
      }) as EventListener);
    });

    /* ---- scroll reveal ---- */
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal:not(.in)").forEach((el) => io.observe(el));
    cleanups.push(() => io.disconnect());

    /* ---- active nav link ---- */
    const navLinks = document.getElementById("navLinks");
    const linkMap: Record<string, HTMLElement> = {};
    navLinks?.querySelectorAll<HTMLElement>("a").forEach((a) => {
      if (a.dataset.target) linkMap[a.dataset.target] = a;
    });
    const navIo = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && linkMap[e.target.id]) {
          Object.values(linkMap).forEach((a) => a.classList.remove("active"));
          linkMap[e.target.id].classList.add("active");
        }
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    document.querySelectorAll("section[id], header[id]").forEach((s) => navIo.observe(s));
    cleanups.push(() => navIo.disconnect());

    /* ---- timeline progress ---- */
    const timeline = document.getElementById("timeline");
    const tProgress = document.getElementById("timelineProgress");
    const drawTimeline = () => {
      if (!timeline || !tProgress) return;
      const r = timeline.getBoundingClientRect();
      const visible = Math.min(Math.max(window.innerHeight * 0.65 - r.top, 0), r.height);
      tProgress.style.height = visible + "px";
    };
    on(window, "scroll", drawTimeline, { passive: true });
    on(window, "resize", drawTimeline);
    drawTimeline();

    /* ---- scroll progress bar ---- */
    const progressBar = document.getElementById("scrollProgress");
    const drawProgress = () => {
      if (!progressBar) return;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progressBar.style.width = (max > 0 ? (window.scrollY / max) * 100 : 0) + "%";
    };
    on(window, "scroll", drawProgress, { passive: true });
    on(window, "resize", drawProgress);
    drawProgress();

    /* ---- magnetic buttons ---- */
    if (FINE && !NO_MOTION) {
      document.querySelectorAll<HTMLElement>(".btn, .soc, .theme-btn").forEach((el) => {
        on(el, "mousemove", ((e: MouseEvent) => {
          const r = el.getBoundingClientRect();
          const x = (e.clientX - r.left - r.width / 2) * 0.28;
          const y = (e.clientY - r.top - r.height / 2) * 0.28;
          el.style.transition = "transform .1s ease-out";
          el.style.transform = `translate(${x}px, ${y}px)`;
        }) as EventListener);
        on(el, "mouseleave", () => {
          el.style.transition = "transform .35s cubic-bezier(.22,.61,.36,1)";
          el.style.transform = "";
        });
      });
    }

    /* ---- 3D tilt + cursor glow on featured cards ---- */
    if (FINE && !NO_MOTION) {
      document.querySelectorAll<HTMLElement>(".proj-card:not(.flip-card)").forEach((card) => {
        const glow = card.querySelector<HTMLElement>(".glow");
        on(card, "mousemove", ((e: MouseEvent) => {
          const r = card.getBoundingClientRect();
          const px = (e.clientX - r.left) / r.width;
          const py = (e.clientY - r.top) / r.height;
          card.style.transition = "box-shadow .35s, border-color .35s";
          card.style.transform =
            `perspective(900px) rotateX(${(py - 0.5) * -7}deg) rotateY(${(px - 0.5) * 7}deg) translateY(-6px)`;
          if (glow) {
            glow.style.setProperty("--gx", px * 100 + "%");
            glow.style.setProperty("--gy", py * 100 + "%");
          }
        }) as EventListener);
        on(card, "mouseleave", () => {
          card.style.transition = "transform .5s cubic-bezier(.22,.61,.36,1), box-shadow .35s, border-color .35s";
          card.style.transform = "";
        });
      });
    }

    /* ---- experience count-up ticker ---- */
    const yearsEl = document.getElementById("yearsVal");
    if (yearsEl) {
      if (NO_MOTION) yearsEl.textContent = "1.5";
      else {
        const tickIo = new IntersectionObserver((entries) => {
          entries.forEach((e) => {
            if (!e.isIntersecting) return;
            tickIo.disconnect();
            const t0 = performance.now(), dur = 1100;
            const tick = (now: number) => {
              const p = Math.min((now - t0) / dur, 1);
              const eased = 1 - Math.pow(1 - p, 3);
              yearsEl.textContent = (1.5 * eased).toFixed(1);
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          });
        }, { threshold: 0.5 });
        tickIo.observe(yearsEl);
        cleanups.push(() => tickIo.disconnect());
      }
    }

    /* ---- hero schematic: parallax + 3D tilt ---- */
    const schematic = document.querySelector<HTMLElement>(".schematic");
    if (schematic && !NO_MOTION) {
      let schY = 0, schRX = 0, schRY = 0;
      const applySch = () => {
        schematic.style.transform =
          `translateY(${schY}px) perspective(1100px) rotateX(${schRX}deg) rotateY(${schRY}deg)`;
      };
      on(window, "scroll", (() => {
        const y = window.scrollY;
        if (y < window.innerHeight * 1.2) { schY = y * -0.07; applySch(); }
      }) as EventListener, { passive: true });
      if (FINE) {
        on(schematic, "mousemove", ((e: MouseEvent) => {
          const r = schematic.getBoundingClientRect();
          schRX = ((e.clientY - r.top) / r.height - 0.5) * -5;
          schRY = ((e.clientX - r.left) / r.width - 0.5) * 5;
          schematic.style.transition = "box-shadow .3s";
          applySch();
        }) as EventListener);
        on(schematic, "mouseleave", () => {
          schematic.style.transition = "transform .6s cubic-bezier(.22,.61,.36,1), box-shadow .3s";
          schRX = 0; schRY = 0; applySch();
          setTimeout(() => { schematic.style.transition = "box-shadow .3s"; }, 600);
        });
      }
    }

    /* ---- ambient grid pulse ---- */
    if (!NO_MOTION) {
      const pulse = document.getElementById("gridPulse");
      if (pulse) {
        const CELL = 48;
        const iv = setInterval(() => {
          const cols = Math.floor(window.innerWidth / CELL);
          const rows = Math.floor(window.innerHeight / CELL);
          pulse.style.left = Math.floor(Math.random() * cols) * CELL + "px";
          pulse.style.top = Math.floor(Math.random() * rows) * CELL + "px";
          pulse.classList.remove("flash");
          void pulse.offsetWidth;
          pulse.classList.add("flash");
        }, 2600);
        cleanups.push(() => clearInterval(iv));
      }
    }

    /* ---- thread line ---- */
    const svg = document.getElementById("threadSvg");
    const tPath = document.getElementById("threadPath") as SVGPathElement | null;
    const tGlow = document.getElementById("threadGlow") as SVGPathElement | null;
    const tHead = document.getElementById("threadHead");
    const tHeadPulse = document.getElementById("threadHeadPulse");
    const tGrad = document.getElementById("threadGrad");
    if (svg && tPath && tGlow && tHead && tHeadPulse && tGrad) {
      let totalLen = 0, startY = 0, endY = 0, drawn = 0, targetDrawn = 0, rafId: number | null = null;

      const setDrawn = (len: number) => {
        tPath.style.strokeDashoffset = String(totalLen - len);
        tGlow.style.strokeDashoffset = String(totalLen - len);
        const p = tPath.getPointAtLength(Math.max(len - 0.1, 0));
        tHead.setAttribute("cx", String(p.x)); tHead.setAttribute("cy", String(p.y));
        tHeadPulse.setAttribute("cx", String(p.x)); tHeadPulse.setAttribute("cy", String(p.y));
      };

      const animate = () => {
        drawn += (targetDrawn - drawn) * 0.12;
        if (Math.abs(targetDrawn - drawn) < 0.5) drawn = targetDrawn;
        setDrawn(drawn);
        rafId = drawn !== targetDrawn ? requestAnimationFrame(animate) : null;
      };

      const updateThread = (instant: boolean) => {
        const probe = window.scrollY + window.innerHeight * 0.72;
        const f = Math.min(Math.max((probe - startY) / (endY - startY), 0), 1);
        targetDrawn = totalLen * f;
        if (instant || NO_MOTION) { drawn = targetDrawn; setDrawn(drawn); return; }
        if (!rafId) rafId = requestAnimationFrame(animate);
      };

      const buildThread = () => {
        const w = window.innerWidth;
        const docH = document.documentElement.scrollHeight;
        svg.setAttribute("width", String(w));
        svg.setAttribute("height", String(docH));
        tGrad.setAttribute("y2", String(docH));

        const hero = document.getElementById("top");
        if (!hero) return;
        const ids = ["about", "experience", "skills", "projects", "education", "contact"];
        const pts: { x: number; y: number }[] = [];
        startY = hero.offsetTop + hero.offsetHeight * 0.78;
        pts.push({ x: w * 0.42, y: startY });
        ids.forEach((id, i) => {
          const s = document.getElementById(id);
          if (!s) return;
          const side = i % 2 === 0;
          pts.push({ x: w * (side ? 0.85 : 0.15), y: s.offsetTop + 80 });
          pts.push({ x: w * (side ? 0.62 : 0.38), y: s.offsetTop + s.offsetHeight * 0.62 });
        });
        const contact = document.getElementById("contact");
        if (!contact) return;
        endY = contact.offsetTop + contact.offsetHeight * 0.55;
        pts[pts.length - 1] = { x: w * 0.5, y: endY };

        let d = `M ${pts[0].x} ${pts[0].y}`;
        for (let i = 1; i < pts.length; i++) {
          const a = pts[i - 1], b = pts[i], my = (a.y + b.y) / 2;
          d += ` C ${a.x} ${my}, ${b.x} ${my}, ${b.x} ${b.y}`;
        }
        tPath.setAttribute("d", d);
        tGlow.setAttribute("d", d);
        totalLen = tPath.getTotalLength();
        tPath.style.strokeDasharray = String(totalLen);
        tGlow.style.strokeDasharray = String(totalLen);
        updateThread(true);
      };

      on(window, "scroll", (() => updateThread(false)) as EventListener, { passive: true });
      let rT: ReturnType<typeof setTimeout>;
      on(window, "resize", () => { clearTimeout(rT); rT = setTimeout(buildThread, 150); });
      buildThread();
      const t1 = setTimeout(buildThread, 1600); // after fonts/preloader settle
      cleanups.push(() => { clearTimeout(t1); if (rafId) cancelAnimationFrame(rafId); });
    }

    /* ---- custom interactive cursor ---- */
    if (FINE && !NO_MOTION) {
      document.body.classList.add("has-cursor");
      const dot = document.getElementById("curDot");
      const ring = document.getElementById("curRing");
      const label = document.getElementById("curLabel");
      if (dot && ring && label) {
        let mx = innerWidth / 2, my = innerHeight / 2, rx = mx, ry = my;
        let cursorRaf: number;
        on(window, "mousemove", ((e: MouseEvent) => {
          mx = e.clientX; my = e.clientY;
          dot.style.transform = `translate(${mx}px,${my}px) translate(-50%,-50%)`;
          document.body.classList.remove("cur-hidden");
        }) as EventListener, { passive: true });
        const loop = () => {
          rx += (mx - rx) * 0.16;
          ry += (my - ry) * 0.16;
          ring.style.left = rx + "px";
          ring.style.top = ry + "px";
          cursorRaf = requestAnimationFrame(loop);
        };
        loop();
        cleanups.push(() => cancelAnimationFrame(cursorRaf));

        const setState = (cls: string | null, txt?: string) => {
          document.body.classList.remove("cur-link", "cur-btn", "cur-text");
          if (cls) document.body.classList.add(cls);
          label.textContent = txt || "";
        };
        on(document, "mouseover", ((e: MouseEvent) => {
          const t = e.target as HTMLElement;
          if (!t || !t.closest) return setState(null);
          const custom = t.closest<HTMLElement>("[data-cursor]");
          if (custom) return setState("cur-link", custom.dataset.cursor);
          if (t.closest(".btn, .theme-btn, .soc, .proj-links a, .menu-btn")) return setState("cur-btn");
          if (t.closest(".flip-card")) return setState("cur-link", "FLIP");
          if (t.closest(".proj-card")) return setState("cur-link", "VIEW");
          if (t.closest(".skill-card")) return setState("cur-link", "STACK");
          if (t.closest(".edu-card")) return setState("cur-link", "EDU");
          if (t.closest(".schematic")) return setState("cur-link", "SYS");
          if (t.closest("a")) return setState("cur-link", "OPEN");
          if (t.closest("p, h1, h2, h3, li")) return setState("cur-text");
          setState(null);
        }) as EventListener);
        on(window, "mousedown", () => document.body.classList.add("cur-down"));
        on(window, "mouseup", () => document.body.classList.remove("cur-down"));
        on(document, "mouseleave", () => document.body.classList.add("cur-hidden"));
        on(document, "mouseenter", () => document.body.classList.remove("cur-hidden"));
      }
    }

    /* ---- flip cards: tap to flip on touch devices ---- */
    if (!FINE) {
      document.querySelectorAll<HTMLElement>(".flip-card").forEach((card) => {
        on(card, "click", ((e: MouseEvent) => {
          if ((e.target as HTMLElement).closest("a")) return;
          card.classList.toggle("flipped");
        }) as EventListener);
      });
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
