export type ProjectTheme = "signal" | "markets" | "web" | "embedded";

export type Project = {
  slug: string;
  number: string;
  status: string;
  title: string;
  kicker: string;
  description: string;
  details: string[];
  year: string;
  projectType: string;
  role: string;
  stack: string[];
  overview: string;
  challenge: string;
  approach: string;
  decisions: Array<{ title: string; body: string }>;
  learnings: string[];
  diagramTitle: string;
  diagramCaption: string;
  diagramNodes: Array<{ label: string; detail: string }>;
  theme: ProjectTheme;
  repository?: string;
  report?: string;
};

export const projects: Project[] = [
  {
    slug: "emotion-recognition",
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
    year: "2026",
    projectType: "Machine learning competition",
    role: "ML pipeline design & implementation",
    stack: ["Python", "PyTorch", "scikit-learn", "Pandas", "NumPy"],
    overview:
      "This project predicts one of four emotion regions on the valence–arousal plane from a 1,793-dimensional feature vector. The complete workflow—from cleaning and validation to ensembling and submission generation—lives in one reproducible training pipeline.",
    challenge:
      "A random split can look convincing while still failing on people the model has never seen. The central engineering problem was therefore not only classification performance, but building an evaluation setup that made subject-level generalization visible.",
    approach:
      "I paired label-balanced StratifiedKFold evaluation with GroupKFold splits based on person_id. Inputs are cleaned, clipped and standardized inside each training fold. Two complementary MLP architectures are trained across multiple seeds, with class-aware sampling, regularization and probability calibration used to make inference more stable.",
    decisions: [
      {
        title: "Validate the real failure mode",
        body: "GroupKFold keeps samples from the same subject together, providing a stricter view of performance on unseen people.",
      },
      {
        title: "Keep preprocessing fold-safe",
        body: "Scaling is fit only on the training side of each fold to prevent information from leaking into validation.",
      },
      {
        title: "Reduce prediction variance",
        body: "Multiple seeds, EMA weights and probability renormalization create a more stable final ensemble than a single training run.",
      },
    ],
    learnings: [
      "A validation strategy is part of the model, not a final reporting step.",
      "Reproducible experiments make architecture and calibration choices easier to compare.",
      "Subject-aware evaluation can reveal risks hidden by otherwise strong aggregate scores.",
    ],
    diagramTitle: "Subject-aware inference pipeline",
    diagramCaption:
      "The same preprocessing contract is preserved from cross-validation through final inference.",
    diagramNodes: [
      { label: "Feature input", detail: "1,793 dimensions" },
      { label: "Preprocess", detail: "Clean · clip · scale" },
      { label: "Validation", detail: "Stratified + grouped" },
      { label: "MLP ensemble", detail: "Seeds · EMA weights" },
      { label: "Output", detail: "4 emotion regions" },
    ],
    theme: "signal",
    repository: "https://github.com/turaninc58/emotion-recognition",
    report: "https://github.com/turaninc58/emotion-recognition/blob/main/Report.pdf",
  },
  {
    slug: "algorithmic-trading-system",
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
    year: "Ongoing",
    projectType: "Independent research system",
    role: "Architecture & implementation",
    stack: ["Python", "Pandas", "scikit-learn", "REST APIs", "SQL"],
    overview:
      "An evolving research platform for testing trading ideas as repeatable software experiments. The system is being designed to keep data ingestion, features, signals, risk rules and execution adapters separate, so each layer can change without rewriting the whole workflow.",
    challenge:
      "Trading prototypes can easily mix data preparation, strategy logic and execution assumptions in one script. That makes experiments difficult to reproduce and can hide look-ahead bias, unrealistic costs or inconsistent position sizing.",
    approach:
      "The current architecture treats each research run as a traceable pipeline. Market data is normalized first, features are generated without future information, signals pass through a dedicated risk gate, and the same interface is intended to support both historical backtests and paper-trading experiments.",
    decisions: [
      {
        title: "Separate research from execution",
        body: "Strategy logic produces intent; portfolio and execution layers decide whether and how that intent becomes an order.",
      },
      {
        title: "Make assumptions explicit",
        body: "Costs, position sizing and timing rules belong in configuration so results can be reproduced and challenged.",
      },
      {
        title: "Log the whole experiment",
        body: "Parameters, data windows and evaluation outputs are tracked together instead of being scattered across notebooks.",
      },
    ],
    learnings: [
      "Clean module boundaries are especially valuable when the research question changes often.",
      "Risk and execution assumptions can matter as much as the raw signal.",
      "A useful backtest should be easy to inspect, reproduce and disprove.",
    ],
    diagramTitle: "Research-to-execution architecture",
    diagramCaption:
      "A planned modular flow that keeps market research, portfolio rules and execution concerns independently testable.",
    diagramNodes: [
      { label: "Market data", detail: "Ingest · normalize" },
      { label: "Features", detail: "Time-safe transforms" },
      { label: "Signal engine", detail: "Rules · ML models" },
      { label: "Risk gate", detail: "Size · limits · costs" },
      { label: "Execution", detail: "Backtest · paper" },
    ],
    theme: "markets",
  },
  {
    slug: "data-driven-web-application",
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
    year: "2025",
    projectType: "Team course project",
    role: "Full-stack contributor",
    stack: ["JavaScript", "HTML / CSS", "SQL", "REST APIs", "Git"],
    overview:
      "A five-person course project that turned a public dataset into an explorable web product. The work covered the complete request path: interface states, backend services, relational storage and the integration points that keep those layers in sync.",
    challenge:
      "The technical challenge was less about rendering a single screen and more about agreeing on stable contracts across a team. Changes to the data model affected API responses and interface behavior, so coordination and clear boundaries mattered.",
    approach:
      "We shaped the dataset into a relational schema, exposed the required operations through a service layer and built the interface around predictable loading, empty and result states. Git-based collaboration and small integration checkpoints kept parallel work manageable.",
    decisions: [
      {
        title: "Design from the data contract",
        body: "The schema and API response shapes were defined early so frontend and backend work could progress against the same assumptions.",
      },
      {
        title: "Keep responsibilities visible",
        body: "Interface, service and persistence concerns were separated to make changes easier to trace across the request lifecycle.",
      },
      {
        title: "Integrate continuously",
        body: "Smaller checkpoints reduced the cost of merging five contributors' work near the end of the project.",
      },
    ],
    learnings: [
      "Team velocity depends on shared interfaces as much as individual implementation speed.",
      "A relational model should reflect the questions the product needs to answer.",
      "Loading, error and empty states are part of the application—not edge-case polish.",
    ],
    diagramTitle: "End-to-end request path",
    diagramCaption:
      "The application turns a user action into a validated query and returns structured data to the interface.",
    diagramNodes: [
      { label: "Interface", detail: "Input · states · views" },
      { label: "API route", detail: "Validate · authorize" },
      { label: "Service", detail: "Application logic" },
      { label: "SQL layer", detail: "Schema · queries" },
      { label: "Response", detail: "Structured UI data" },
    ],
    theme: "web",
  },
  {
    slug: "arm-cortex-m0-paint",
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
    year: "2025",
    projectType: "Embedded systems assignment",
    role: "Low-level implementation",
    stack: ["ARM Assembly", "Cortex-M0", "SysTick", "Memory-mapped I/O"],
    overview:
      "A minimal paint application written for the ARM Cortex-M0 environment. Directional input moves a cursor across a memory-mapped canvas, while drawing and erasing operations update the active cell under strict low-level constraints.",
    challenge:
      "Without high-level data structures or an application framework, every state transition has to be explicit. Input timing, coordinate boundaries, address calculation and register use all need to stay correct at the same time.",
    approach:
      "A SysTick interrupt provides a predictable update rhythm. Each tick reads the current input, resolves the requested action, applies boundary checks and translates the cursor position into a canvas address before updating memory.",
    decisions: [
      {
        title: "Use a timer-driven loop",
        body: "SysTick creates a consistent control cadence and keeps input handling independent from arbitrary busy-wait timing.",
      },
      {
        title: "Guard coordinates first",
        body: "Movement is validated before address calculation so the cursor cannot write outside the canvas region.",
      },
      {
        title: "Keep state compact",
        body: "Cursor position and drawing mode are represented with a small, explicit state that maps cleanly to registers and memory.",
      },
    ],
    learnings: [
      "Interrupt-driven control changes how state and timing must be reasoned about.",
      "Memory layout becomes part of the application design at the assembly level.",
      "Small boundary checks can protect an entire memory region from invalid writes.",
    ],
    diagramTitle: "Interrupt-to-pixel control flow",
    diagramCaption:
      "Each timer tick advances a small deterministic state machine from physical input to a bounded canvas write.",
    diagramNodes: [
      { label: "SysTick", detail: "Periodic interrupt" },
      { label: "Read input", detail: "Direction · action" },
      { label: "State update", detail: "Cursor · draw mode" },
      { label: "Bounds", detail: "Validate coordinates" },
      { label: "Canvas", detail: "Memory-mapped write" },
    ],
    theme: "embedded",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
