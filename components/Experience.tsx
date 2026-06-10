import { EXPERIENCE } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <div className="sec-head reveal">
          <div>
            <span className="eyebrow">02 — Experience</span>
            <h2 className="sec-title">Where I&apos;ve <span className="fancy blue">worked</span></h2>
          </div>
          <span className="sec-note">{"// 2022 → present"}</span>
        </div>
        <div className="timeline" id="timeline">
          <div className="timeline-progress" id="timelineProgress" />
          {EXPERIENCE.map((xp) => (
            <article className="xp reveal" key={xp.org}>
              <div className="xp-meta">{xp.meta}</div>
              <h3>{xp.role}</h3>
              <div className="org">
                <b>{xp.org}</b>
                {xp.orgNote ? ` — ${xp.orgNote}` : ""}
              </div>
              <ul>
                {xp.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <div className="xp-tags">
                {xp.tags.map((t) => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
