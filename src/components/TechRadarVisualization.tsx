import { useEffect, useRef } from "react";
import * as d3 from "d3";
import type { TechEntry } from "../types/radar";
import "./TechRadarVisualization.css";

interface TechRadarVisualizationProps {
  entries: TechEntry[];
  onBlipClick: (entry: TechEntry) => void;
}

const RINGS = [
  {
    name: "ADOPT",
    radius: 130,
    color: "#93c47d",
    description:
      "Technologies we have high confidence in to serve our purpose. Use by default.",
  },
  {
    name: "TRIAL",
    radius: 220,
    color: "#93d2c2",
    description:
      "Technologies worth pursuing. Understand how to build up capability and try on a project that can handle the risk.",
  },
  {
    name: "ASSESS",
    radius: 310,
    color: "#fbdb84",
    description:
      "Technologies that are promising and worth exploring with the goal of understanding how it will affect us.",
  },
  {
    name: "HOLD",
    radius: 400,
    color: "#efafa9",
    description: "Proceed with caution. Should not be used for new projects.",
  },
];

const QUADRANTS = [
  { name: "Methods & Techniques", angle: 0 },
  { name: "Languages & Frameworks", angle: 90 },
  { name: "Tools", angle: 180 },
  { name: "Platforms", angle: 270 },
];

export const TechRadarVisualization = ({
  entries,
  onBlipClick,
}: TechRadarVisualizationProps) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const width = 900;
    const height = 900;
    const centerX = width / 2;
    const centerY = height / 2;
    // placeholder for gapDegrees; will compute after svg exists
    let gapDegrees = 6; // default gap between quadrants in degrees

    // Clear previous render
    d3.select(svgRef.current).selectAll("*").remove();

    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", `0 0 ${width} ${height}`)
      .style("max-width", "100%")
      .style("height", "auto");

    // compute gap based on ring label size so gap equals label length on arc
    // create temp text elements to measure label sizes
    const tempGroup = svg.append("g");
    let maxLabelWidth = 0;
    let maxLabelHeight = 0;
    RINGS.forEach((ring) => {
      const t = tempGroup
        .append("text")
        .attr("x", -9999)
        .attr("y", -9999)
        .attr("font-size", "11px")
        .attr("font-weight", "bold")
        .text(ring.name);
      const bbox = (t.node() as any).getBBox();
      if (bbox.width > maxLabelWidth) maxLabelWidth = bbox.width;
      if (bbox.height > maxLabelHeight) maxLabelHeight = bbox.height;
      t.remove();
    });
    tempGroup.remove();

    const maxRadiusForGap = RINGS[RINGS.length - 1].radius;
    const computedGapDegrees =
      (maxLabelWidth / (2 * Math.PI * maxRadiusForGap)) * 360;
    gapDegrees = Math.max(6, computedGapDegrees);

    const g = svg
      .append("g")
      .attr("transform", `translate(${centerX},${centerY})`);

    // Top-level tooltip layer (renders after main group so it's always on top)
    const tooltipLayer = svg.append("g").attr("class", "tooltip-layer");

    // Draw circular rings with gaps (sectors)
    RINGS.forEach((ring, ringIndex) => {
      // Draw 4 arcs for each ring (one per quadrant)
      for (let q = 0; q < 4; q++) {
        const startAngle = q * 90 + gapDegrees / 2;
        const endAngle = (q + 1) * 90 - gapDegrees / 2;

        const arc = d3
          .arc()
          .innerRadius(ring.radius)
          .outerRadius(ring.radius)
          .startAngle((startAngle * Math.PI) / 180)
          .endAngle((endAngle * Math.PI) / 180);

        g.append("path")
          .attr("d", arc as any)
          .attr("fill", "none")
          .attr("stroke", "#ddd")
          .attr("stroke-width", 2);
      }
    });

    // Draw separator lines as L-shaped segments that start at arc ends
    const maxRadius = RINGS[RINGS.length - 1].radius;
    const gapSize = Math.max(12, Math.round(maxLabelHeight + 6)); // central half-gap

    // For each quadrant boundary (0,90,180,270) compute two arc-end points and
    // draw L-shaped connector: arcPoint1 -> (signX * gapSize, arcPoint1.y) -> (signX * gapSize, arcPoint2.y) -> arcPoint2
    [0, 90, 180, 270].forEach((angleDeg) => {
      const rad1 = ((angleDeg - gapDegrees / 2) * Math.PI) / 180;
      const rad2 = ((angleDeg + gapDegrees / 2) * Math.PI) / 180;

      const p1 = {
        x: Math.cos(rad1) * maxRadius,
        y: Math.sin(rad1) * maxRadius,
      };
      const p2 = {
        x: Math.cos(rad2) * maxRadius,
        y: Math.sin(rad2) * maxRadius,
      };

      // If boundary is roughly horizontal (angle 0 or 180), route via x then y
      if (angleDeg % 180 === 0) {
        const signX = angleDeg === 0 ? 1 : -1;
        const midX = signX * gapSize;

        // left segment from p1 to midX at p1.y, then vertical to p2.y, then to p2
        const pathData = [
          `M ${p1.x} ${p1.y}`,
          `L ${midX} ${p1.y}`,
          `L ${midX} ${p2.y}`,
          `L ${p2.x} ${p2.y}`,
        ].join(" ");

        g.append("path")
          .attr("d", pathData)
          .attr("fill", "none")
          .attr("stroke", "#ccc")
          .attr("stroke-width", 1);
      } else {
        // vertical boundary (90 or 270): route via y then x
        const signY = angleDeg === 90 ? 1 : -1;
        const midY = signY * gapSize;

        const pathData = [
          `M ${p1.x} ${p1.y}`,
          `L ${p1.x} ${midY}`,
          `L ${p2.x} ${midY}`,
          `L ${p2.x} ${p2.y}`,
        ].join(" ");

        g.append("path")
          .attr("d", pathData)
          .attr("fill", "none")
          .attr("stroke", "#ccc")
          .attr("stroke-width", 1);
      }
    });

    // Ring labels in the gaps between quadrants
    RINGS.forEach((ring, ringIndex) => {
      [0, 90, 180, 270].forEach((angle) => {
        const rad = (angle * Math.PI) / 180;
        const labelRadius =
          ringIndex === 0
            ? ring.radius / 2
            : (ring.radius +
                (ringIndex > 0 ? RINGS[ringIndex - 1].radius : 0)) /
              2;
        const x = Math.cos(rad) * labelRadius;
        const y = Math.sin(rad) * labelRadius;

        g.append("text")
          .attr("x", x)
          .attr("y", y)
          .attr("text-anchor", "middle")
          .attr("dominant-baseline", "middle")
          .attr("font-size", "11px")
          .attr("font-weight", "bold")
          .attr("fill", "#999")
          .text(ring.name);
      });
    });

    // Quadrant labels
    QUADRANTS.forEach((quadrant, index) => {
      const angle = (quadrant.angle * Math.PI) / 180;
      const labelDistance = RINGS[RINGS.length - 1].radius + 30;
      const x = Math.cos(angle + Math.PI / 4) * labelDistance;
      const y = Math.sin(angle + Math.PI / 4) * labelDistance;

      g.append("text")
        .attr("x", x)
        .attr("y", y)
        .attr("text-anchor", "middle")
        .attr("font-size", "16px")
        .attr("font-weight", "bold")
        .attr("fill", "#333")
        .text(quadrant.name.toUpperCase());
    });

    // Prepare entries with numbers
    const quadrantMap: Record<string, number> = {
      methods: 0,
      "languages-frameworks": 1,
      tools: 2,
      platforms: 3,
    };

    const ringMap: Record<string, number> = {
      adopt: 0,
      trial: 1,
      assess: 2,
      hold: 3,
    };

    // Group entries by quadrant and ring, then assign numbers
    const entriesWithNumbers = entries.map((entry, index) => ({
      ...entry,
      number: index + 1,
    }));

    // Collision detection function
    const positions: Array<{ x: number; y: number; radius: number }> = [];
    const minDistance = 14; // Minimum distance between blips (reduced for tighter packing)

    const findNonOverlappingPosition = (
      quadrantIndex: number,
      ringIndex: number,
      attempts = 50
    ): { x: number; y: number } | null => {
      const minRadius = ringIndex === 0 ? 30 : RINGS[ringIndex - 1].radius + 10;
      const maxRadius = RINGS[ringIndex].radius - 10;
      const baseAngle = ((quadrantIndex * 90 + gapDegrees) * Math.PI) / 180;
      const angleRange = ((90 - gapDegrees * 2) * Math.PI) / 180;

      for (let i = 0; i < attempts; i++) {
        // Generate random position within circular sector
        const radius = minRadius + Math.random() * (maxRadius - minRadius);
        const angle = baseAngle + Math.random() * angleRange;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        // Check collision with existing blips
        const hasCollision = positions.some((pos) => {
          const dist = Math.sqrt((x - pos.x) ** 2 + (y - pos.y) ** 2);
          return dist < minDistance;
        });

        if (!hasCollision) {
          positions.push({ x, y, radius: 8 });
          return { x, y };
        }
      }

      // Fallback: return a position anyway
      const radius = minRadius + Math.random() * (maxRadius - minRadius);
      const angle = baseAngle + Math.random() * angleRange;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      positions.push({ x, y, radius: 8 });
      return { x, y };
    };

    // Plot blips
    entriesWithNumbers.forEach((entry) => {
      const quadrantIndex = quadrantMap[entry.quadrant];
      const ringIndex = ringMap[entry.ring];
      const position = findNonOverlappingPosition(quadrantIndex, ringIndex);

      if (!position) return;

      const blip = g
        .append("g")
        .attr("class", "blip")
        .attr("transform", `translate(${position.x},${position.y})`)
        .style("cursor", "pointer")
        .on("click", () => onBlipClick(entry));

      // Blip circle (smaller)
      blip
        .append("circle")
        .attr("r", 7)
        .attr("fill", RINGS[ringIndex].color)
        .attr("stroke", "#fff")
        .attr("stroke-width", 2);

      // Blip number (smaller font)
      blip
        .append("text")
        .attr("text-anchor", "middle")
        .attr("dominant-baseline", "middle")
        .attr("font-size", "9px")
        .attr("font-weight", "bold")
        .attr("fill", "#333")
        .text(entry.number);

      // Tooltip on hover: render into `tooltipLayer` so it's always above other elements
      blip
        .on("mouseenter", function (event) {
          // remove any existing floating tooltip
          tooltipLayer.selectAll(".floating-tooltip").remove();

          // parse current transform of this blip group: translate(x,y)
          const tr = d3.select(this).attr("transform") || "translate(0,0)";
          const match = /translate\(([-0-9.]+),?\s*([-0-9.]+)\)/.exec(tr);
          const tx = match ? parseFloat(match[1]) : 0;
          const ty = match ? parseFloat(match[2]) : 0;

          const tooltipG = tooltipLayer
            .append("g")
            .attr("class", "floating-tooltip")
            .attr(
              "transform",
              `translate(${centerX + tx},${centerY + ty - 18})`
            )
            .style("pointer-events", "none");

          const textEl = tooltipG
            .append("text")
            .attr("x", 0)
            .attr("y", 0)
            .attr("text-anchor", "middle")
            .attr("font-size", "11px")
            .attr("font-weight", "bold")
            .attr("fill", "#333")
            .text(entry.name);

          const bbox = (textEl.node() as any).getBBox();
          tooltipG
            .insert("rect", "text")
            .attr("x", bbox.x - 6)
            .attr("y", bbox.y - 4)
            .attr("width", bbox.width + 12)
            .attr("height", bbox.height + 8)
            .attr("fill", "white")
            .attr("stroke", "#ddd")
            .attr("stroke-width", 1)
            .attr("rx", 4)
            .attr("opacity", 0.98);
        })
        .on("mouseleave", function () {
          tooltipLayer.selectAll(".floating-tooltip").remove();
        });
    });
  }, [entries, onBlipClick]);

  // Group entries by quadrant for legend with numbers
  const quadrantEntries: Record<
    string,
    Array<TechEntry & { number: number }>
  > = {
    methods: [],
    "languages-frameworks": [],
    tools: [],
    platforms: [],
  };

  entries.forEach((entry, index) => {
    quadrantEntries[entry.quadrant].push({
      ...entry,
      number: index + 1,
    });
  });

  // Sort entries within each quadrant by ring
  const ringOrder: Record<string, number> = {
    adopt: 0,
    trial: 1,
    assess: 2,
    hold: 3,
  };

  const ringMap: Record<string, number> = {
    adopt: 0,
    trial: 1,
    assess: 2,
    hold: 3,
  };

  Object.keys(quadrantEntries).forEach((quadrant) => {
    quadrantEntries[quadrant].sort(
      (a, b) => ringOrder[a.ring] - ringOrder[b.ring]
    );
  });

  const getBlipIcon = (entry: TechEntry & { number: number }) => {
    const ringIndex = ringMap[entry.ring];
    const ringColor = RINGS[ringIndex].color;

    return (
      <svg width="14" height="14" viewBox="0 0 14 14">
        <circle
          cx="7"
          cy="7"
          r="6"
          fill={ringColor}
          stroke="#fff"
          strokeWidth="1.5"
        />
        <text
          x="7"
          y="7"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="9"
          fontWeight="bold"
          fill="#333"
        >
          {entry.number}
        </text>
      </svg>
    );
  };

  return (
    <div className="radar-container">
      <svg ref={svgRef}></svg>

      <div className="radar-legend">
        <div className="legend-quadrants">
          {QUADRANTS.map((quadrant, index) => {
            const quadrantKeys = [
              "methods",
              "languages-frameworks",
              "tools",
              "platforms",
            ];
            const quadrantKey = quadrantKeys[index];
            const items = quadrantEntries[quadrantKey] || [];

            return (
              <div key={quadrant.name} className="legend-column">
                <h3 className="legend-title">{quadrant.name.toUpperCase()}</h3>
                <div className="legend-divider"></div>
                <ul className="legend-items">
                  {items.map((item) => (
                    <li
                      key={item.id}
                      className="legend-item"
                      onClick={() => onBlipClick(item)}
                    >
                      <span className="legend-icon">{getBlipIcon(item)}</span>
                      <span className="legend-name">{item.name}</span>
                      <span className="legend-ring">
                        [{item.ring.toUpperCase()}]
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="legend-rings-description">
          <p className="rings-intro">The rings are:</p>
          <ul className="rings-list">
            <li className="ring-description">
              <strong>Adopt.</strong> Blips that we think you should seriously
              consider using.
            </li>
            <li className="ring-description">
              <strong>Trial.</strong> Things we think are ready for use, but not
              as completely proven as those in the Adopt ring.
            </li>
            <li className="ring-description">
              <strong>Assess.</strong> Things to look at closely, but not
              necessarily trial yet — unless you think they would be a
              particularly good fit for you.
            </li>
            <li className="ring-description">
              <strong>Hold.</strong> Proceed with caution.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
