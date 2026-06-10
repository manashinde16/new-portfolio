import { LINKS } from "@/lib/data";

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.15c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.34.96.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.26 5.66.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.55V9h3.57v11.45Z" />
  </svg>
);

function Schematic() {
  return (
    <div className="schematic reveal in" data-delay="2" aria-hidden="true">
      <div className="schematic-bar">
        <span className="dot" style={{ background: "#FF5F57" }} />
        <span className="dot" style={{ background: "#FEBC2E" }} />
        <span className="dot" style={{ background: "#28C840" }} />
        <span style={{ marginLeft: 8 }}>system://manas — request lifecycle</span>
      </div>
      <svg viewBox="0 0 520 420" xmlns="http://www.w3.org/2000/svg">
        <path className="sch-wire" d="M110 80 H260 V140" />
        <path className="sch-wire" d="M260 196 V250" />
        <path className="sch-wire" d="M260 306 V330 H160 V348" />
        <path className="sch-wire" d="M260 306 V330 H360 V348" />
        <path className="sch-wire" d="M310 168 H430 V230" />
        <path className="sch-flow" d="M110 80 H260 V140" />
        <path className="sch-flow" d="M260 196 V250" />
        <path className="sch-flow" d="M260 306 V330 H160 V348" />
        <path className="sch-flow alt" d="M310 168 H430 V230" />
        <path className="sch-flow" d="M260 306 V330 H360 V348" />

        <rect className="sch-node" x="30" y="56" width="80" height="48" rx="10" />
        <text className="sch-node-label" x="70" y="78" textAnchor="middle">REQ</text>
        <text className="sch-node-sub" x="70" y="93" textAnchor="middle">client</text>

        <rect className="sch-node" x="200" y="140" width="120" height="56" rx="10" />
        <text className="sch-node-label" x="260" y="165" textAnchor="middle">React UI</text>
        <text className="sch-node-sub" x="260" y="181" textAnchor="middle">redux · tailwind</text>

        <rect className="sch-node" x="380" y="230" width="100" height="52" rx="10" />
        <text className="sch-node-label" x="430" y="253" textAnchor="middle">Redis</text>
        <text className="sch-node-sub" x="430" y="268" textAnchor="middle">cache · rate-limit</text>
        <text className="sch-tag" x="320" y="160">cache hit</text>

        <rect className="sch-node" x="200" y="250" width="120" height="56" rx="10" />
        <text className="sch-node-label" x="260" y="275" textAnchor="middle">Node / Express</text>
        <text className="sch-node-sub" x="260" y="291" textAnchor="middle">REST · auth · logging</text>

        <rect className="sch-node" x="105" y="348" width="110" height="52" rx="10" />
        <text className="sch-node-label" x="160" y="371" textAnchor="middle">MySQL</text>
        <text className="sch-node-sub" x="160" y="386" textAnchor="middle">persistence</text>

        <rect className="sch-node" x="305" y="348" width="110" height="52" rx="10" />
        <text className="sch-node-label" x="360" y="371" textAnchor="middle">AWS S3</text>
        <text className="sch-node-sub" x="360" y="386" textAnchor="middle">media storage</text>

        <rect className="sch-pkt" width="8" height="8" rx="2">
          <animateMotion dur="3s" repeatCount="indefinite" path="M110 76 H256 V140 M0 0" />
        </rect>
        <rect className="sch-pkt" width="8" height="8" rx="2" y="-4" x="-4">
          <animateMotion dur="3s" begin="1s" repeatCount="indefinite" path="M260 196 V250" />
        </rect>
        <rect className="sch-pkt alt" width="8" height="8" rx="2" y="-4" x="-4">
          <animateMotion dur="3.4s" begin=".6s" repeatCount="indefinite" path="M310 168 H430 V230" />
        </rect>
        <rect className="sch-pkt" width="8" height="8" rx="2" y="-4" x="-4">
          <animateMotion dur="3.2s" begin="1.7s" repeatCount="indefinite" path="M260 306 V330 H160 V348" />
        </rect>

        <text className="sch-tag" x="36" y="40">{"// full request lifecycle — owned end to end"}</text>
      </svg>
    </div>
  );
}

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="wrap hero-grid">
        <div>
          <div className="hero-kicker reveal in">
            <span className="eyebrow">Pune, India · Software Developer</span>
          </div>
          <h1>
            <span className="line"><span className="line-in" style={{ animationDelay: ".95s" }}>Manas</span></span>
            <span className="line"><span className="line-in" style={{ animationDelay: "1.06s" }}>Shinde<span style={{ color: "var(--orange)" }}>.</span></span></span>
            <span className="line"><span className="line-in" style={{ animationDelay: "1.17s" }}><span className="accent">Full Stack</span></span></span>
            <span className="line"><span className="line-in" style={{ animationDelay: "1.28s" }}><span className="fancy blue">Developer.</span></span></span>
          </h1>
          <p className="hero-sub reveal in" data-delay="2">
            I build <strong>scalable web applications</strong> end-to-end — React on the front,{" "}
            <strong>Node.js, MySQL &amp; Redis</strong> behind it. Currently shipping product at{" "}
            <strong>DoTimely</strong>, migrating legacy systems to modern React and building AI-powered features.
          </p>
          <div className="hero-actions reveal in" data-delay="3">
            <a className="btn btn-primary" data-target="projects" role="link" tabIndex={0}>View projects →</a>
            <a className="btn btn-ghost" data-target="contact" role="link" tabIndex={0}>Contact me</a>
          </div>
          <div className="hero-socials reveal in" data-delay="3">
            <span className="lbl">FIND ME //</span>
            <a className="soc" href={LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><GitHubIcon /></a>
            <a className="soc" href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedInIcon /></a>
          </div>
        </div>
        <Schematic />
      </div>
    </header>
  );
}
