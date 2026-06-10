"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { LINKS } from "@/lib/data";

export default function NotFound() {
  const pathname = usePathname();
  const shown = pathname && pathname !== "/" ? pathname : "/this-page";

  return (
    <main className="nf">
      <div className="nf-box">
        <span className="eyebrow nf-eyebrow">Error — route not found</span>
        <h1 className="nf-code">4<span className="nf-zero">0</span>4</h1>
        <h2 className="nf-title">
          Manas is still <span className="fancy blue">building</span> this one.
        </h2>
        <p className="nf-sub">
          The page you&apos;re looking for doesn&apos;t exist yet — or it got refactored away. Either way, the request
          couldn&apos;t be routed.
        </p>

        <div className="nf-term" aria-hidden="true">
          <div className="nf-term-bar">
            <span className="dot" style={{ background: "#FF5F57" }} />
            <span className="dot" style={{ background: "#FEBC2E" }} />
            <span className="dot" style={{ background: "#28C840" }} />
            <span style={{ marginLeft: 8 }}>system://manas — router log</span>
          </div>
          <div className="nf-term-body">
            <div><span className="p">$</span> GET {shown}</div>
            <div><span className="err">✗ 404</span> — no matching route</div>
            <div><span className="p">$</span> suggest <span className="ok">→ redirect home</span> <span className="nf-caret" /></div>
          </div>
        </div>

        <div className="nf-actions">
          <Link className="btn btn-primary" href="/">← Back home</Link>
          <a className="btn btn-ghost" href={`mailto:${LINKS.email}`}>Report a broken link</a>
        </div>

        <div className="nf-foot">
          manas<span style={{ color: "var(--blue)" }}>.shinde</span>
          <span style={{ color: "var(--orange)" }}>()</span> — full stack developer
        </div>
      </div>
    </main>
  );
}
