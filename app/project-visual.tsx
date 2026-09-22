import type { Project } from "./project-data";

function EmotionGraphic() {
  const bars = [72, 44, 92, 58, 112, 76, 101, 52, 84, 66, 122, 88];
  return (
    <svg viewBox="0 0 680 400" className="project-graphic" aria-hidden="true">
      <g className="svg-grid">
        {[90, 150, 210, 270, 330].map((y) => <line x1="36" x2="644" y1={y} y2={y} key={y} />)}
        {[100, 190, 280, 370, 460, 550].map((x) => <line x1={x} x2={x} y1="42" y2="356" key={x} />)}
      </g>
      <text x="42" y="64" className="svg-label">FEATURE VECTOR / 1793D</text>
      <g className="svg-bars">
        {bars.map((height, index) => <rect key={index} x={48 + index * 18} y={290 - height} width="9" height={height} rx="2" />)}
      </g>
      <path className="svg-accent" d="M285 238 C330 160 359 274 403 184 S482 112 534 192 S595 272 634 128" />
      <g className="svg-nodes">
        {[[315, 104], [315, 178], [315, 252], [403, 126], [403, 216], [491, 171]].map(([x, y], index) => (
          <circle cx={x} cy={y} r={index === 5 ? 9 : 6} key={`${x}-${y}`} />
        ))}
        <path d="M321 104 L397 126 M321 104 L397 216 M321 178 L397 126 M321 178 L397 216 M321 252 L397 216 M409 126 L482 171 M409 216 L482 171" />
      </g>
      <text x="476" y="332" className="svg-label svg-label-accent">GROUP-AWARE VALIDATION</text>
    </svg>
  );
}

function TradingGraphic() {
  const candles = [[78,146,100,124],[122,190,145,164],[94,172,112,150],[137,218,160,199],[166,244,188,224],[118,210,142,174],[86,178,106,146],[108,202,129,180],[152,236,177,214],[190,278,214,252],[171,263,194,232],[205,306,230,284]];
  return (
    <svg viewBox="0 0 680 400" className="project-graphic" aria-hidden="true">
      <g className="svg-grid">
        {[76, 136, 196, 256, 316].map((y) => <line x1="38" x2="642" y1={y} y2={y} key={y} />)}
        {[100, 190, 280, 370, 460, 550].map((x) => <line x1={x} x2={x} y1="40" y2="322" key={x} />)}
      </g>
      <text x="42" y="62" className="svg-label">MARKET STREAM / RESEARCH MODE</text>
      <g className="svg-candles">
        {candles.map(([top, bottom, open, close], index) => {
          const x = 58 + index * 47;
          return <g key={index} className={close > open ? "positive" : "negative"}>
            <line x1={x} x2={x} y1={330 - bottom} y2={330 - top} />
            <rect x={x - 7} y={330 - Math.max(open, close)} width="14" height={Math.max(8, Math.abs(close - open))} />
          </g>;
        })}
      </g>
      <path className="svg-accent" d="M58 245 C106 234 136 256 182 220 S264 184 309 205 S394 247 443 189 S529 106 623 94" />
      <g className="svg-pipeline-labels">
        <rect x="58" y="338" width="126" height="34" rx="17" /><rect x="276" y="338" width="126" height="34" rx="17" /><rect x="494" y="338" width="126" height="34" rx="17" />
        <text x="121" y="359">DATA</text><text x="339" y="359">SIGNAL</text><text x="557" y="359">RISK GATE</text><path d="M184 355 H276 M402 355 H494" />
      </g>
    </svg>
  );
}

function WebGraphic() {
  return (
    <svg viewBox="0 0 680 400" className="project-graphic" aria-hidden="true">
      <g className="svg-grid">
        {[90, 150, 210, 270, 330].map((y) => <line x1="36" x2="644" y1={y} y2={y} key={y} />)}
        {[100, 190, 280, 370, 460, 550].map((x) => <line x1={x} x2={x} y1="42" y2="356" key={x} />)}
      </g>
      <text x="42" y="64" className="svg-label">REQUEST / RESPONSE CONTRACT</text>
      <g className="svg-web-panels">
        <rect x="52" y="112" width="180" height="188" rx="8" /><circle cx="72" cy="132" r="4" /><circle cx="86" cy="132" r="4" /><circle cx="100" cy="132" r="4" />
        <rect x="72" y="162" width="140" height="18" rx="4" /><rect x="72" y="196" width="92" height="12" rx="4" /><rect x="72" y="224" width="120" height="52" rx="5" />
        <rect x="288" y="144" width="112" height="124" rx="8" /><path d="M312 178 H376 M312 202 H364 M312 226 H380" />
        <ellipse cx="548" cy="150" rx="74" ry="28" /><path d="M474 150 V260 C474 275 507 288 548 288 C589 288 622 275 622 260 V150 M474 205 C474 220 507 233 548 233 C589 233 622 220 622 205" />
      </g>
      <g className="svg-connectors svg-accent"><path d="M232 206 H288" /><path d="M400 206 H474" /><circle cx="260" cy="206" r="5" /><circle cx="437" cy="206" r="5" /></g>
      <text x="116" y="326" className="svg-label">INTERFACE</text><text x="316" y="294" className="svg-label">API</text><text x="486" y="326" className="svg-label">RELATIONAL DATA</text>
    </svg>
  );
}

function EmbeddedGraphic() {
  const pins = [112, 142, 172, 202, 232, 262, 292];
  return (
    <svg viewBox="0 0 680 400" className="project-graphic" aria-hidden="true">
      <g className="svg-grid">
        {[90, 150, 210, 270, 330].map((y) => <line x1="36" x2="644" y1={y} y2={y} key={y} />)}
        {[100, 190, 280, 370, 460, 550].map((x) => <line x1={x} x2={x} y1="42" y2="356" key={x} />)}
      </g>
      <text x="42" y="64" className="svg-label">CORTEX-M0 / MEMORY MAP</text>
      <g className="svg-chip">
        <rect x="220" y="96" width="238" height="226" rx="12" /><rect x="258" y="134" width="162" height="150" rx="6" />
        {pins.map((y) => <path d={`M186 ${y} H220 M458 ${y} H492`} key={y} />)}
        <text x="339" y="194">ARM</text><text x="339" y="224">CORTEX-M0</text><circle cx="339" cy="254" r="8" />
      </g>
      <g className="svg-memory-blocks">
        <rect x="42" y="112" width="112" height="52" rx="5" /><rect x="42" y="181" width="112" height="52" rx="5" /><rect x="42" y="250" width="112" height="52" rx="5" />
        <text x="98" y="143">INPUT</text><text x="98" y="212">STATE</text><text x="98" y="281">BOUNDS</text>
      </g>
      <g className="svg-accent svg-address-bus"><path d="M154 138 H186 M154 207 H186 M154 276 H186" /><path d="M492 206 H616 V304" /><rect x="544" y="304" width="72" height="44" rx="5" /></g>
      <text x="516" y="371" className="svg-label svg-label-accent">CANVAS WRITE</text>
    </svg>
  );
}

export function ProjectVisual({ project }: { project: Project }) {
  const graphic = { signal: <EmotionGraphic />, markets: <TradingGraphic />, web: <WebGraphic />, embedded: <EmbeddedGraphic /> }[project.theme];
  return (
    <figure className={`project-preview project-preview--${project.theme}`}>
      <figcaption><span>System view</span><span><i /> {project.diagramTitle}</span></figcaption>
      <div className="project-preview-canvas">{graphic}</div>
      <div className="project-preview-footer" aria-hidden="true"><span>{project.number} / {String(project.diagramNodes.length).padStart(2, "0")} stages</span><span>Technical overview</span></div>
    </figure>
  );
}
