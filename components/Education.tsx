const CapIcon = () => (
  <svg viewBox="0 0 24 24"><path d="M12 3 1 9l11 6 9-4.91V17h2V9L12 3Zm-7 9.18V17c0 1.66 3.13 3 7 3s7-1.34 7-3v-4.82l-7 3.82-7-3.82Z" /></svg>
);
const DiplomaIcon = () => (
  <svg viewBox="0 0 24 24"><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82ZM12 3 1 9l11 6 9-4.91V17h2V9L12 3Z" /></svg>
);

export default function Education() {
  return (
    <section id="education">
      <div className="wrap">
        <div className="sec-head reveal">
          <div>
            <span className="eyebrow">05 — Education</span>
            <h2 className="sec-title">Where I <span className="fancy blue">studied</span></h2>
          </div>
        </div>
        <div className="edu-grid">
          <div className="edu-card reveal">
            <div className="edu-icon"><CapIcon /></div>
            <div>
              <div className="yr">2020 — 2023</div>
              <h3>B.Tech, Computer Science &amp; Engineering</h3>
              <div className="inst">RCERT (Rajiv Gandhi College of Engineering, Research &amp; Technology), Chandrapur</div>
              <div className="score">CGPA — 8.65</div>
            </div>
          </div>
          <div className="edu-card reveal" data-delay="1">
            <div className="edu-icon"><DiplomaIcon /></div>
            <div>
              <div className="yr">2018 — 2020</div>
              <h3>Diploma — Polytechnic</h3>
              <div className="inst">Bajaj Polytechnic, Chandrapur</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
