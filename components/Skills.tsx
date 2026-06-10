import { SKILLS } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <div className="sec-head reveal">
          <div>
            <span className="eyebrow">03 — Skills</span>
            <h2 className="sec-title">What I <span className="fancy blue">work</span> with</h2>
          </div>
          <span className="sec-note">{"// hover a module"}</span>
        </div>
        <div className="skills-grid">
          {SKILLS.map((group, i) => (
            <div className="skill-card reveal" data-delay={i || undefined} key={group.title}>
              <h4><span className="idx">{group.idx}</span> {group.title}</h4>
              <ul>
                {group.items.map((item) => (
                  <li className="tag" key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
