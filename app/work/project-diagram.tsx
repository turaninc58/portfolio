import type { Project } from "../project-data";

export function ProjectDiagram({ project }: { project: Project }) {
  return (
    <figure className={`system-visual system-visual--${project.theme}`}>
      <figcaption className="system-visual-heading">
        <div>
          <span>Architecture view</span>
          <h2>{project.diagramTitle}</h2>
        </div>
        <p>{project.diagramCaption}</p>
      </figcaption>

      <div
        className="system-flow"
        role="img"
        aria-label={`${project.title} architecture: ${project.diagramNodes
          .map((node) => node.label)
          .join(" to ")}`}
      >
        {project.diagramNodes.map((node, index) => (
          <div className="system-node" key={node.label}>
            <span className="system-node-index">
              {String(index + 1).padStart(2, "0")}
            </span>
            <strong>{node.label}</strong>
            <small>{node.detail}</small>
          </div>
        ))}
      </div>

      <div className="system-visual-footer" aria-hidden="true">
        <span>Input</span>
        <span className="system-pulse" />
        <span>Controlled transformation</span>
        <span className="system-pulse" />
        <span>Output</span>
      </div>
    </figure>
  );
}
