import { FEATURED, FLIP_PROJECTS } from "@/lib/data";

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.15c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.34.96.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.26 5.66.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
  </svg>
);

export default function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <div className="sec-head reveal">
          <div>
            <span className="eyebrow">04 — Projects</span>
            <h2 className="sec-title">Things I&apos;ve <span className="fancy blue">built</span></h2>
          </div>
          <span className="sec-note">{"// selected work"}</span>
        </div>

        <div className="proj-featured">
          {FEATURED.map((p, i) => (
            <article className="proj-card reveal" data-delay={i || undefined} key={p.name}>
              <div className="glow" />
              <div className="proj-top">
                <span className="proj-id">{p.id}</span>
                <div className="proj-links">
                  <a href={p.repo} target="_blank" rel="noopener noreferrer" aria-label={`${p.name} on GitHub`}>
                    <GitHubIcon />
                  </a>
                </div>
              </div>
              <h3>{p.name}</h3>
              <p>{p.description}</p>
              <div className="xp-tags">
                {p.tags.map((t) => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="proj-grid">
          {FLIP_PROJECTS.map((p, i) => (
            <article className="proj-card flip-card reveal" data-delay={i || undefined} key={p.name}>
              <div className="flip-inner">
                <div className="flip-front">
                  <div className="proj-top"><span className="proj-id">{p.id}</span></div>
                  <h3>{p.name}</h3>
                  <p>{p.description}</p>
                  <div className="xp-tags">
                    {p.tags.map((t) => (
                      <span className="tag" key={t}>{t}</span>
                    ))}
                  </div>
                  <span className="flip-hint">HOVER TO FLIP</span>
                </div>
                <div className="flip-back">
                  <div>
                    <h4>{"// under the hood"}</h4>
                    <ul>
                      {p.back.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </div>
                  <a className="btn btn-ghost" href={p.link} target="_blank" rel="noopener noreferrer">
                    View GitHub ↗
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
