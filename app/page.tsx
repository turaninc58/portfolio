import Link from "next/link";
import { PortfolioEffects } from "./portfolio-effects";
import { projects } from "./project-data";
import { ProjectVisual } from "./project-visual";

const links = {
  github: "https://github.com/turaninc58",
  linkedin: "https://www.linkedin.com/in/turan-ince%C3%B6z-7bb8b729b/",
  instagram: "https://www.instagram.com/inceozturan/",
  email: "mailto:inceoz.benim.58@gmail.com",
};

const skillGroups = [
  { number: "01", label: "Languages", items: ["Python", "C / C++", "C#", "JavaScript", "Assembly", "HTML / CSS"] },
  { number: "02", label: "Machine Learning / Data", items: ["PyTorch", "scikit-learn", "Pandas", "NumPy", "SQL"] },
  { number: "03", label: "Systems", items: ["ARM Cortex-M0", "Embedded Systems", "Memory-mapped I/O", "SysTick"] },
  { number: "04", label: "Software", items: ["REST APIs", "Git", "Full-stack Development", "Automation"] },
];

function Arrow({ direction = "up" }: { direction?: "up" | "right" }) {
  return <span aria-hidden="true">{direction === "up" ? "↗" : "→"}</span>;
}

export default function Home() {
  return (
    <main className="portfolio-home">
      <PortfolioEffects />

      <nav className="home-nav" aria-label="Primary navigation">
        <a className="home-monogram" href="#top" aria-label="Turan İnceöz, home">T<span>/</span>I</a>
        <div className="home-nav-links">
          <a href="#about">About</a><a href="#work">Work</a><a href="#skills">Toolkit</a><a href="#contact">Contact</a>
        </div>
        <a className="home-nav-cv" href="/Turan-Inceoz-CV.pdf" download><span>Download CV</span><small>PDF&nbsp; ↓</small></a>
      </nav>

      <header className="home-hero" id="top">
        <div className="hero-grid-layer" aria-hidden="true" />
        <div className="hero-glow" aria-hidden="true" />

        <div className="home-hero-copy">
          <div className="home-hero-identity" data-reveal>
            <span className="availability-dot" /><span>Turan İnceöz</span><span className="identity-rule" /><span>Open to opportunities</span>
          </div>
          <h1 data-reveal>Engineering ideas<br />into <em>working software.</em></h1>
          <div className="home-hero-intro" data-reveal>
            <p>
              Computer Engineering at <strong>Istanbul Technical University</strong>.
              Building reliable software across machine learning, full-stack
              systems and low-level engineering.
            </p>
            <div className="hero-discipline" aria-label="Areas of focus">
              <span>Software Engineering</span><span>Machine Learning</span><span>Systems</span>
            </div>
          </div>
          <div className="home-hero-actions" data-reveal>
            <a className="home-primary-button" href="#work">Explore projects <Arrow direction="right" /></a>
            <a className="home-secondary-button" href="/Turan-Inceoz-CV.pdf" download>Download CV <span aria-hidden="true">↓</span></a>
          </div>
        </div>

        <div className="home-portrait-stage" data-reveal>
          <div className="portrait-index" aria-hidden="true"><span>Profile / 01</span><span>41.0082° N</span></div>
          <div className="home-portrait-frame">
            <img src="/turan-inceoz.jpg" alt="Turan İnceöz outdoors in Istanbul" width="800" height="800" fetchPriority="high" />
            <div className="portrait-scan" aria-hidden="true" />
          </div>
          <div className="portrait-caption">
            <div><span>Current chapter</span><strong>ITU · B.Sc. 2027</strong></div>
            <div><span>Based in</span><strong>Istanbul, Türkiye</strong></div>
          </div>
          <span className="portrait-outline" aria-hidden="true" />
        </div>

        <div className="hero-scroll-cue" aria-hidden="true"><span>Scroll to explore</span><i /></div>
      </header>

      <section className="editorial-about" id="about" data-nav-section>
        <div className="home-section-marker" data-reveal><span>01</span><strong>About</strong></div>
        <div className="about-statement" data-reveal>
          <p>I&apos;m interested in the part of engineering where a rough idea becomes a system you can <em>test, understand and improve.</em></p>
          <div className="about-supporting-copy">
            <p>My work moves between data-driven experimentation and software fundamentals: preparing datasets, designing validation flows, modeling relational data, integrating services and reasoning close to the hardware.</p>
            <p>I care about modularity, clear evaluation and learning through iteration. Each project here is documented around the decisions behind the implementation—not only its final output.</p>
          </div>
        </div>
        <aside className="about-metadata" data-reveal aria-label="Profile summary">
          <div><span>Focus</span><strong>Machine Learning</strong><strong>Software Engineering</strong><strong>Systems</strong></div>
          <div><span>Education</span><strong>Istanbul Technical University</strong><small>B.Sc. Computer Engineering · 2027</small></div>
          <div><span>Location</span><strong>Istanbul, Türkiye</strong></div>
        </aside>
      </section>

      <section className="portfolio-work" id="work" data-nav-section>
        <div className="work-atmosphere" aria-hidden="true" />
        <div className="work-section-intro">
          <div className="home-section-marker home-section-marker--light" data-reveal><span>02</span><strong>Selected work</strong></div>
          <div className="work-editorial-heading" data-reveal>
            <h2>Systems with a reason<br />behind every decision.</h2>
            <p>Selected projects across machine learning, software and embedded systems—presented as technical case studies rather than a list of tools.</p>
          </div>
        </div>

        <div className="project-showcase">
          {projects.map((project) => (
            <article className={`project-showcase-card project-showcase-card--${project.theme}`} key={project.slug} data-reveal>
              <Link href={`/work/${project.slug}`} aria-label={`View ${project.title} case study`}>
                <div className="project-showcase-copy">
                  <div className="project-showcase-topline"><span>{project.number}</span><span>{project.kicker}</span><span>{project.status}</span></div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-technical-highlight"><span>Technical highlight</span><strong>{project.details[0]}</strong></div>
                  <div className="project-tags" aria-label="Technologies">
                    {project.stack.slice(0, 5).map((technology) => <span key={technology}>{technology}</span>)}
                  </div>
                  <div className="project-case-link"><span>View case study</span><i aria-hidden="true"><Arrow /></i></div>
                </div>
                <ProjectVisual project={project} />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="editorial-toolkit" id="skills" data-nav-section>
        <div className="home-section-marker" data-reveal><span>03</span><strong>Toolkit</strong></div>
        <div className="toolkit-heading" data-reveal>
          <h2>Across the stack.<br /><em>Grounded in fundamentals.</em></h2>
          <p>Technologies I have used while building the projects documented in this portfolio.</p>
        </div>
        <div className="toolkit-rows">
          {skillGroups.map((group) => (
            <article className="toolkit-row" key={group.label} data-reveal>
              <span>{group.number}</span><h3>{group.label}</h3><div>{group.items.map((item) => <span key={item}>{item}</span>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="portfolio-contact" id="contact" data-nav-section>
        <div className="contact-grid-layer" aria-hidden="true" />
        <div className="home-section-marker home-section-marker--light" data-reveal><span>04</span><strong>Contact</strong></div>
        <div className="contact-statement" data-reveal>
          <span>Have a role, project or idea in mind?</span>
          <h2>Let&apos;s build something<br /><em>worth understanding.</em></h2>
        </div>
        <div className="contact-links" data-reveal>
          <a href={links.email}><span>Email</span><strong>inceoz.benim.58@gmail.com</strong><Arrow direction="right" /></a>
          <a href={links.github} target="_blank" rel="noreferrer"><span>GitHub</span><strong>turaninc58</strong><Arrow direction="right" /></a>
          <a href={links.linkedin} target="_blank" rel="noreferrer"><span>LinkedIn</span><strong>Turan İnceöz</strong><Arrow direction="right" /></a>
        </div>
        <footer className="home-footer">
          <span>© {new Date().getFullYear()} Turan İnceöz</span><span>Computer Engineering · Istanbul</span>
          <a href={links.instagram} target="_blank" rel="noreferrer">Instagram <Arrow /></a>
        </footer>
      </section>
    </main>
  );
}
