import React, { useMemo } from "react";

/**
 * Generative "AI / neural network" backdrop for the hero.
 * Pure SVG + CSS so it stays crisp at any size and inherits the
 * active theme's accent colour via currentColor / CSS vars.
 */
function NeuralBackdrop() {
  const { nodes, edges } = useMemo(() => buildGraph(), []);

  return (
    <div className="neural-backdrop" aria-hidden="true">
      <svg
        viewBox="0 0 1200 700"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full"
      >
        <defs>
          <radialGradient id="nb-glow" cx="50%" cy="45%" r="60%">
            <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.12" />
            <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0" />
          </radialGradient>
        </defs>

        <rect x="0" y="0" width="1200" height="700" fill="url(#nb-glow)" />

        <g stroke="var(--color-accent)" fill="none">
          {edges.map((e, i) => (
            <line
              key={i}
              x1={nodes[e[0]].x}
              y1={nodes[e[0]].y}
              x2={nodes[e[1]].x}
              y2={nodes[e[1]].y}
              strokeWidth="1"
              strokeOpacity="0.1"
              className="nb-edge"
              style={{ animationDelay: `${(i % 12) * 0.45}s` }}
            />
          ))}
        </g>

        <g fill="var(--color-accent)">
          {nodes.map((n, i) => (
            <circle
              key={i}
              cx={n.x}
              cy={n.y}
              r={n.r}
              fillOpacity={n.dim ? 0.35 : 0.85}
              className="nb-node"
              style={{ animationDelay: `${(i % 9) * 0.6}s` }}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}

function buildGraph() {
  // Deterministic pseudo-random so layout is stable between renders.
  let seed = 20260903;
  const rand = () => {
    seed = (seed * 1664525 + 1013904223) % 4294967296;
    return seed / 4294967296;
  };

  const layers = [90, 330, 570, 810, 1050];
  const nodes = [];
  const layerNodes = [];

  layers.forEach((x, li) => {
    const count = li === 0 || li === layers.length - 1 ? 4 : 6;
    const ids = [];
    for (let i = 0; i < count; i++) {
      const y = 90 + (i + 0.5) * ((700 - 180) / count) + (rand() - 0.5) * 60;
      ids.push(nodes.length);
      nodes.push({
        x: x + (rand() - 0.5) * 40,
        y,
        r: 2 + rand() * 3,
        dim: rand() > 0.6,
      });
    }
    layerNodes.push(ids);
  });

  const edges = [];
  for (let li = 0; li < layerNodes.length - 1; li++) {
    layerNodes[li].forEach((a) => {
      layerNodes[li + 1].forEach((b) => {
        if (rand() > 0.45) edges.push([a, b]);
      });
    });
  }

  return { nodes, edges };
}

export default NeuralBackdrop;
