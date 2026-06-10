export default function Chrome() {
  return (
    <>
      <div className="scroll-progress" id="scrollProgress" aria-hidden="true" />
      <div className="grid-pulse" id="gridPulse" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />
      <svg className="thread" id="threadSvg" aria-hidden="true">
        <defs>
          <linearGradient id="threadGrad" x1="0" y1="0" x2="0" y2="1" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#2B3FF0" />
            <stop offset=".55" stopColor="#7C89FF" />
            <stop offset="1" stopColor="#FF6B2C" />
          </linearGradient>
        </defs>
        <path className="thread-glow" id="threadGlow" fill="none" stroke="url(#threadGrad)" strokeLinecap="round" />
        <path className="thread-line" id="threadPath" fill="none" stroke="url(#threadGrad)" strokeLinecap="round" />
        <circle className="thread-head-pulse" id="threadHeadPulse" r="6" fill="var(--blue)" />
        <circle className="thread-head" id="threadHead" r="5" fill="var(--blue)" stroke="var(--paper)" strokeWidth="2" />
      </svg>
      <div className="cursor-dot" id="curDot" aria-hidden="true" />
      <div className="cursor-ring" id="curRing" aria-hidden="true">
        <span className="cursor-label" id="curLabel" />
      </div>
    </>
  );
}
