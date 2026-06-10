"use client";

import { useEffect, useRef, useState } from "react";

export default function Preloader() {
  const [done, setDone] = useState(false);
  const [gone, setGone] = useState(false);
  const [chars, setChars] = useState(0);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    document.body.classList.add("pre-lock");
    const noMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finish = () => {
      setDone(true);
      document.body.classList.remove("pre-lock");
      timers.current.push(setTimeout(() => setGone(true), 600));
    };
    if (noMotion) { finish(); return; }
    const str = "manas.shinde()";
    let i = 0;
    const type = () => {
      if (i <= str.length) {
        setChars(i);
        i++;
        timers.current.push(setTimeout(type, 52));
      } else {
        timers.current.push(setTimeout(finish, 300));
      }
    };
    type();
    return () => timers.current.forEach(clearTimeout);
  }, []);

  if (gone) return null;
  const a = "manas".slice(0, Math.min(chars, 5));
  const b = ".shinde".slice(0, Math.max(0, Math.min(chars, 12) - 5));
  const c = "()".slice(0, Math.max(0, chars - 12));
  return (
    <div id="preloader" className={done ? "done" : ""} aria-hidden="true">
      <span className="pre-text">
        <span>
          {a}
          <span className="pre-accent">{b}</span>
          {c}
        </span>
        <span className="pre-caret" />
      </span>
    </div>
  );
}
