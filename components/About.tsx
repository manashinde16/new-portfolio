export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <div className="sec-head reveal">
          <div>
            <span className="eyebrow">01 — About</span>
            <h2 className="sec-title">Who I <span className="fancy blue">am</span></h2>
          </div>
          <span className="sec-note">{"// builder, quick learner, problem solver"}</span>
        </div>
        <div className="about-grid">
          <div className="about-copy reveal">
            <p>
              I&apos;m a <strong>full-stack developer with 1.5+ years of experience</strong> delivering scalable web
              applications. My core stack is <strong>React, Node.js, MySQL and Redis</strong>, with strong foundations
              in Java, OOP and data structures.
            </p>
            <p>
              At <strong>DoTimely</strong>, I&apos;ve led the migration of a legacy jQuery codebase to React, designed
              complete customer flows, worked on payment features, integrated AWS S3, and built AI-powered UI —
              including a chatbot interface for customer support.
            </p>
            <p>
              I care about the unglamorous things that make software good:{" "}
              <strong>performance, reliability, clean component structure</strong>, proper validation, and shipping
              without regressions. Outside of work I build things like LLM request gateways and real-time collaboration
              tools — because the best way to learn a system is to build one.
            </p>
          </div>
          <div className="readout reveal" data-delay="1">
            <div className="readout-head">$ whoami --verbose</div>
            <div className="readout-row"><span className="k">role</span><span className="v">Software Developer</span></div>
            <div className="readout-row"><span className="k">company</span><span className="v">DoTimely (remote, US)</span></div>
            <div className="readout-row"><span className="k">location</span><span className="v">Pune, India</span></div>
            <div className="readout-row"><span className="k">experience</span><span className="v"><span id="yearsVal">0.0</span>+ years</span></div>
            <div className="readout-row"><span className="k">stack</span><span className="v">React · Node · MySQL · Redis</span></div>
            <div className="readout-row"><span className="k">languages</span><span className="v">English · Hindi · Marathi</span></div>
            <div className="readout-row"><span className="k">currently</span><span className="v ok">shipping @ DoTimely</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
