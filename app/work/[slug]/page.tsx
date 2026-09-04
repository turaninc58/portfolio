import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "../../project-data";
import { ProjectDiagram } from "../project-diagram";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: "Project not found — Turan İnceöz" };
  }

  const title = `${project.title} — Turan İnceöz`;

  return {
    title,
    description: project.description,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      title,
      description: project.description,
      type: "article",
      images: [],
    },
    twitter: {
      card: "summary",
      title,
      description: project.description,
      images: [],
    },
  };
}

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const projectIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <main className={`project-page project-page--${project.theme}`}>
      <nav className="site-nav project-site-nav" aria-label="Project navigation">
        <Link className="monogram" href="/" aria-label="Turan İnceöz, home">
          T<span>/</span>I
        </Link>
        <Link className="project-back-link" href="/#work">
          <span aria-hidden="true">←</span> All projects
        </Link>
        <a className="nav-cta" href="/Turan-Inceoz-CV.pdf" download>
          <span>Download CV</span>
          <small>PDF&nbsp;&nbsp;↓</small>
        </a>
      </nav>

      <header className="project-hero">
        <div className="project-hero-index" aria-hidden="true">
          <span>Case study</span>
          <strong>{project.number}</strong>
          <small>/ {String(projects.length).padStart(2, "0")}</small>
        </div>

        <div className="project-hero-copy">
          <div className="project-eyebrow">
            <span className="status-dot" />
            {project.status}
          </div>
          <p className="project-kicker">{project.kicker}</p>
          <h1>{project.title}</h1>
          <p className="project-deck">{project.description}</p>

          {(project.repository || project.report) && (
            <div className="project-actions">
              {project.repository && (
                <a
                  className="primary-button"
                  href={project.repository}
                  target="_blank"
                  rel="noreferrer"
                >
                  View repository <Arrow />
                </a>
              )}
              {project.report && (
                <a
                  className="text-button"
                  href={project.report}
                  target="_blank"
                  rel="noreferrer"
                >
                  Read project report <Arrow />
                </a>
              )}
            </div>
          )}
        </div>

        <dl className="project-meta">
          <div>
            <dt>Year</dt>
            <dd>{project.year}</dd>
          </div>
          <div>
            <dt>Type</dt>
            <dd>{project.projectType}</dd>
          </div>
          <div>
            <dt>Role</dt>
            <dd>{project.role}</dd>
          </div>
        </dl>
      </header>

      <section className="project-visual-section" aria-label="System architecture">
        <ProjectDiagram project={project} />
      </section>

      <section className="project-story" aria-label="Project overview">
        <div className="project-story-heading">
          <span>01 / Context</span>
          <h2>What I built<br />and why.</h2>
        </div>
        <div className="project-story-copy">
          <article>
            <span>Overview</span>
            <p>{project.overview}</p>
          </article>
          <article>
            <span>The challenge</span>
            <p>{project.challenge}</p>
          </article>
          <article>
            <span>The approach</span>
            <p>{project.approach}</p>
          </article>
        </div>
      </section>

      <section className="project-decisions">
        <div className="project-section-heading">
          <span>02 / Engineering</span>
          <h2>Key decisions</h2>
          <p>
            The choices that shaped the system—not only the technologies that
            appear in it.
          </p>
        </div>
        <div className="decision-list">
          {project.decisions.map((decision, index) => (
            <article className="decision-card" key={decision.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{decision.title}</h3>
              <p>{decision.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="project-outcomes">
        <div className="project-stack-panel">
          <span>Technical toolkit</span>
          <h2>Built with</h2>
          <div className="project-stack-list">
            {project.stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>

        <div className="project-learning-panel">
          <span>03 / Reflection</span>
          <h2>What the project taught me</h2>
          <ul>
            {project.learnings.map((learning) => (
              <li key={learning}>{learning}</li>
            ))}
          </ul>
          <p className="project-visual-note">
            This page uses a system diagram to document the current technical
            structure. Product screenshots and experiment outputs can be added
            here as each project evolves.
          </p>
        </div>
      </section>

      <footer className="project-footer">
        <Link href="/" className="project-footer-home">
          <span>Back to portfolio</span>
          <strong>Turan İnceöz</strong>
        </Link>
        <Link href={`/work/${nextProject.slug}`} className="next-project-link">
          <span>Next case study · {nextProject.number}</span>
          <strong>{nextProject.title}</strong>
          <Arrow />
        </Link>
      </footer>
    </main>
  );
}
