const links = {
  github: "https://github.com/turaninc58",
  linkedin:
    "https://www.linkedin.com/in/turan-ince%C3%B6z-7bb8b729b/",
  instagram: "https://www.instagram.com/inceozturan/",
  email: "mailto:inceoz.benim.58@gmail.com",
};

const work = [
  {
    number: "01",
    status: "Published",
    title: "Emotion Recognition",
    kicker: "Machine Learning · Class Kaggle Competition",
    description:
      "A reproducible four-class emotion classification pipeline designed around subject-level generalization, not just a strong validation score.",
    details: [
      "1st place on the class leaderboard",
      "StratifiedKFold + GroupKFold validation",
      "MLP ensembles, calibration and robust preprocessing",
    ],
    href: "https://github.com/turaninc58/emotion-recognition",
    linkLabel: "Explore repository",
  },
  {
    number: "02",
    status: "In development",
    title: "Algorithmic Trading System",
    kicker: "Python · Automation · Applied ML",
    description:
      "A modular research environment that brings market data, feature engineering, signal generation, backtesting and paper trading into one workflow.",
    details: [
      "Rule-based and data-driven signals",
      "Risk-aware evaluation workflow",
      "Structured logging and experiment tracking",
    ],
  },
  {
    number: "03",
    status: "Course project",
    title: "Data-Driven Web Application",
    kicker: "Full-stack · SQL · Team of 5",
    description:
      "A collaborative full-stack application built around a public dataset, spanning interface work, service integration and relational data modeling.",
    details: [
      "Frontend and backend contributions",
      "Database schema and SQL design",
      "API and data-layer integration",
    ],
  },
  {
    number: "04",
    status: "Systems project",
    title: "ARM Cortex-M0 Paint",
    kicker: "Assembly · Embedded Systems",
    description:
      "A cursor-based paint application implemented under low-level register and instruction constraints, with timer-driven input and canvas updates.",
    details: [
      "SysTick interrupt-driven control flow",
      "Memory-mapped canvas operations",
      "Input processing with boundary checks",
    ],
  },
];

const skillGroups = [
  {
    label: "Languages",
    items: ["Python", "C / C++", "C#", "JavaScript", "Assembly", "HTML / CSS"],
  },
  {
    label: "Engineering",
    items: ["Machine Learning", "Data Processing", "SQL", "REST APIs", "Embedded Systems"],
  },
  {
    label: "Exploring",
    items: ["Automation", "Cybersecurity", "System Design", "Full-stack Development"],
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <nav className="site-nav" aria-label="Primary navigation">
        <a className="monogram" href="#top" aria-label="Turan İnceöz, home">
          T<span>/</span>I
        </a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="nav-cta" href="/Turan-Inceoz-CV.pdf" download>
          <span>Download CV</span>
          <small>PDF&nbsp;&nbsp;↓</small>
        </a>
      </nav>

      <header className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="status-dot" />
            Open to internship opportunities
          </div>
          <h1>
            Engineering ideas
            <br />
            into <em>working<br className="mobile-break" /> software.</em>
          </h1>
          <p className="hero-intro">
            I&apos;m <strong>Turan İnceöz</strong>, a fourth-year Computer
            Engineering student at Istanbul Technical University. I build
            thoughtful software across machine learning, automation and
            low-level systems.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#work">
              Explore projects <Arrow />
            </a>
          </div>
          <div className="hero-meta" aria-label="Profile details">
            <div>
              <span>Based in</span>
              <strong>Istanbul, Türkiye</strong>
            </div>
            <div>
              <span>Current chapter</span>
              <strong>ITU · B.Sc. 2027</strong>
            </div>
          </div>
        </div>

        <div className="portrait-column">
          <div className="portrait-shell">
            <div className="portrait-frame">
              <img
                src="/turan-inceoz.jpg"
                alt="Turan İnceöz outdoors in Istanbul"
                width="800"
                height="800"
              />
              <span className="portrait-location">Istanbul / 2026</span>
            </div>
            <div className="portrait-card">
              <span className="portrait-monogram" aria-hidden="true">TI</span>
              <div>
                <strong>Turan İnceöz</strong>
                <small>Computer Engineering · ITU</small>
              </div>
            </div>
          </div>
          <p className="portrait-note">
            Currently focused on machine learning, automation and system
            design.
          </p>
        </div>
      </header>

      <section className="intro-strip" aria-label="Areas of focus">
        <span>Machine Learning</span>
        <span>Automation</span>
        <span>Full-stack</span>
        <span>Embedded Systems</span>
      </section>

      <section className="about section" id="about">
        <div className="section-label">
          <span>01</span>
          About
        </div>
        <div className="about-body">
          <p className="lead-copy">
            I&apos;m interested in the part of engineering where a rough idea
            becomes a system you can test, understand and improve.
          </p>
          <div className="about-grid">
            <p>
              My work moves between data-driven experimentation and software
              fundamentals: preparing datasets, designing validation flows,
              modeling relational data, integrating services and reasoning
              close to the hardware.
            </p>
            <p>
              I care about modularity, clear evaluation and learning through
              iteration. Right now, I&apos;m documenting my projects as focused
              case studies while developing more reliable automated trading
              research workflows.
            </p>
          </div>
          <div className="education-card">
            <div>
              <span className="card-kicker">Education</span>
              <h3>Istanbul Technical University</h3>
              <p>B.Sc. in Computer Engineering</p>
            </div>
            <div className="education-date">
              <strong>2022 — 2027</strong>
              <span>Istanbul, Türkiye</span>
            </div>
          </div>
        </div>
      </section>

      <section className="work section" id="work">
        <div className="section-label light-label">
          <span>02</span>
          Selected work
        </div>
        <div className="work-heading">
          <h2>Built to learn.<br />Documented to share.</h2>
          <p>
            These projects are presented as engineering stories—what the
            problem was, how I approached it and what I learned. Detailed case
            studies and visuals are being added as the work matures.
          </p>
        </div>

        <div className="work-list">
          {work.map((project) => (
            <article className="work-card" key={project.number}>
              <div className="work-number">{project.number}</div>
              <div className="work-main">
                <div className="work-topline">
                  <span>{project.kicker}</span>
                  <span className="work-status">{project.status}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul>
                  {project.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
                {project.href ? (
                  <a href={project.href} target="_blank" rel="noreferrer">
                    {project.linkLabel} <Arrow />
                  </a>
                ) : (
                  <span className="coming-soon">Case study in progress</span>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="skills section" id="skills">
        <div className="section-label">
          <span>03</span>
          Toolkit
        </div>
        <div className="skills-content">
          <div className="skills-heading">
            <h2>A broad foundation,<br />a systems mindset.</h2>
            <p>
              Comfortable moving across layers—and still curious about what
              happens underneath them.
            </p>
          </div>
          <div className="skill-groups">
            {skillGroups.map((group) => (
              <div className="skill-group" key={group.label}>
                <h3>{group.label}</h3>
                <div className="skill-tags">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="contact-orbit" aria-hidden="true">
          <span>TI</span>
        </div>
        <div className="section-label light-label">
          <span>04</span>
          Contact
        </div>
        <div className="contact-copy">
          <p>Have a role, project or idea in mind?</p>
          <h2>Let&apos;s build something<br />worth understanding.</h2>
          <a className="email-link" href={links.email}>
            inceoz.benim.58@gmail.com <Arrow />
          </a>
        </div>
        <div className="contact-footer">
          <span>© {new Date().getFullYear()} Turan İnceöz</span>
          <div>
            <a href={links.github} target="_blank" rel="noreferrer">
              GitHub <Arrow />
            </a>
            <a href={links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn <Arrow />
            </a>
            <a href={links.instagram} target="_blank" rel="noreferrer">
              Instagram <Arrow />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
