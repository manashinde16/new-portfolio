import { LINKS } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact">
      <div className="wrap">
        <div className="contact-box reveal">
          <span className="eyebrow" style={{ position: "relative" }}>06 — Contact</span>
          <h2 style={{ marginTop: 14 }}>
            Let&apos;s build something<br />
            <span className="fancy blue">worth shipping.</span>
          </h2>
          <p>
            Have a question, an idea, or something interesting to build? My inbox is always open — whether it&apos;s
            about a project, a collaboration, or just to talk shop.
          </p>
          <div className="contact-actions">
            <a className="btn btn-primary" href={`mailto:${LINKS.email}`}>{LINKS.email} →</a>
            <a className="btn btn-ghost" href={LINKS.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
          </div>
          <div className="contact-meta">
            <a href={`tel:${LINKS.phone}`}>+91 99607 71836</a>
            <span>Pune, Maharashtra, India</span>
            <a href={LINKS.github} target="_blank" rel="noopener noreferrer">github/manashinde16</a>
          </div>
        </div>
      </div>
    </section>
  );
}
