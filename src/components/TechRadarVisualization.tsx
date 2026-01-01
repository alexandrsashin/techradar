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
      const node = t.node() as SVGTextElement | null;
      if (node) {
        const bbox = node.getBBox();
        if (bbox.width > maxLabelWidth) maxLabelWidth = bbox.width;
        if (bbox.height > maxLabelHeight) maxLabelHeight = bbox.height;
      }
      t.remove();
    });
    tempGroup.remove();

    const gapSize = Math.max(
      16,
      Math.round(Math.max(maxLabelWidth, maxLabelHeight) + 8)
    );
    const maxRadius = RINGS[RINGS.length - 1].radius;

    const g = svg
      .append("g")
      .attr("transform", `translate(${centerX},${centerY})`);

    // Top-level tooltip layer (renders after main group so it's always on top)
    const tooltipLayer = svg.append("g").attr("class", "tooltip-layer");
    const polarToCartesian = (
      cx: number,
      cy: number,
      radius: number,
      angleDeg: number
    ) => {
      const angleRad = ((angleDeg - 90) * Math.PI) / 180;
      return {
        x: cx + radius * Math.cos(angleRad),
        y: cy + radius * Math.sin(angleRad),
      };
    };

    const describeArc = (
      cx: number,
      cy: number,
      radius: number,
      startAngle: number,
      endAngle: number
    ) => {
      const start = polarToCartesian(cx, cy, radius, endAngle);
      const end = polarToCartesian(cx, cy, radius, startAngle);
      const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
      return `M ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArcFlag} 0 ${end.x} ${end.y}`;
    };

    const quadrantConfigs = [
      {
        key: "methods",
        name: "Methods & Techniques",
        offset: { x: gapSize / 2, y: -gapSize / 2 },
        startAngle: 0,
        endAngle: 90,
      },
      {
        key: "languages-frameworks",
        name: "Languages & Frameworks",
        offset: { x: -gapSize / 2, y: -gapSize / 2 },
        startAngle: 270,
        endAngle: 360,
      },
      {
        key: "tools",
        name: "Tools",
        offset: { x: -gapSize / 2, y: gapSize / 2 },
        startAngle: 180,
        endAngle: 270,
      },
      {
        key: "platforms",
        name: "Platforms",
        offset: { x: gapSize / 2, y: gapSize / 2 },
        startAngle: 90,
        endAngle: 180,
      },
    ] as const;

    // Draw quadrant-specific ring arcs with offsets so lines stay inside quadrants
    RINGS.forEach((ring) => {
      quadrantConfigs.forEach((config) => {
        const pathData = describeArc(
          config.offset.x,
          config.offset.y,
          ring.radius,
          config.startAngle,
          config.endAngle
        );

        g.append("path")
          .attr("d", pathData)
          .attr("fill", "none")
          .attr("stroke", "#ddd")
          .attr("stroke-width", 2);
      });
    });

    // Draw quadrant divider lines starting from offset centers toward max radius
    quadrantConfigs.forEach((config) => {
      const xDirection = config.offset.x >= 0 ? 1 : -1;
      const yDirection = config.offset.y >= 0 ? 1 : -1;

      g.append("line")
        .attr("x1", config.offset.x)
        .attr("y1", config.offset.y)
        .attr("x2", config.offset.x + xDirection * maxRadius)
        .attr("y2", config.offset.y)
        .attr("stroke", "#ccc")
        .attr("stroke-width", 1);

      g.append("line")
        .attr("x1", config.offset.x)
        .attr("y1", config.offset.y)
        .attr("x2", config.offset.x)
        .attr("y2", config.offset.y + yDirection * maxRadius)
        .attr("stroke", "#ccc")
        .attr("stroke-width", 1);
    });

    // Ring labels positioned inside the cross-shaped gap
    RINGS.forEach((ring, index) => {
      const innerRadius = index === 0 ? 0 : RINGS[index - 1].radius;
      const labelRadius = innerRadius + (ring.radius - innerRadius) / 2;

      const labelPositions = [
        { x: 0, y: -gapSize / 2 - labelRadius },
        { x: 0, y: gapSize / 2 + labelRadius },
        { x: -gapSize / 2 - labelRadius, y: 0 },
        { x: gapSize / 2 + labelRadius, y: 0 },
      ];

      labelPositions.forEach((pos) => {
        g.append("text")
          .attr("x", pos.x)
          .attr("y", pos.y)
          .attr("text-anchor", "middle")
          .attr("dominant-baseline", "middle")
          .attr("font-size", "11px")
          .attr("font-weight", "bold")
          .attr("fill", "#999")
          .text(ring.name);
      });
    });

    // Quadrant labels placed outside sectors without clipping
    const lineHeight = 18;
    const horizontalLabelOffset = maxRadius * 0.7 + gapSize * 0.1;
    const verticalLabelOffset = maxRadius + gapSize * 0.3;
    const quadrantLabelPositions: Record<
      (typeof quadrantConfigs)[number]["key"],
      { x: number; y: number; anchor: "start" | "end" }
    > = {
      methods: {
        x: horizontalLabelOffset,
        y: -verticalLabelOffset,
        anchor: "start",
      },
      "languages-frameworks": {
        x: -horizontalLabelOffset,
        y: -verticalLabelOffset,
        anchor: "end",
      },
      tools: {
        x: -horizontalLabelOffset,
        y: verticalLabelOffset,
        anchor: "end",
      },
      platforms: {
        x: horizontalLabelOffset,
        y: verticalLabelOffset,
        anchor: "start",
      },
    };

    const getQuadrantLines = (name: string) => {
      const parts = name.split(" & ");
      if (parts.length > 1) {
        const [first, ...rest] = parts;
        return [`${first.toUpperCase()} &`, rest.join(" & ").toUpperCase()];
      }
      return [name.toUpperCase()];
    };

    quadrantConfigs.forEach((config) => {
      const pos = quadrantLabelPositions[config.key];
      if (!pos) return;
      const lines = getQuadrantLines(config.name);

      const text = g
        .append("text")
        .attr("x", pos.x)
        .attr("y", pos.y - ((lines.length - 1) * lineHeight) / 2)
        .attr("text-anchor", pos.anchor)
        .attr("font-size", "16px")
        .attr("font-weight", "bold")
        .attr("fill", "#333");

      lines.forEach((line, idx) => {
        text
          .append("tspan")
          .attr("x", pos.x)
          .attr("dy", idx === 0 ? 0 : lineHeight)
          .text(line);
      });
    });

    // Prepare entries with numbers
    const quadrantMap = quadrantConfigs.reduce<Record<string, number>>(
      (acc, config, index) => {
        acc[config.key] = index;
        return acc;
      },
      {}
    );

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
      const config = quadrantConfigs[quadrantIndex];
      if (!config) return null;

      let startAngle = config.startAngle + 5;
      let endAngle = config.endAngle - 5;
      if (endAngle <= startAngle) {
        startAngle = config.startAngle;
        endAngle = config.endAngle;
      }
      const angleSpan = endAngle - startAngle;
      if (angleSpan <= 0) return null;

      for (let i = 0; i < attempts; i++) {
        // Generate random position within circular sector
        const radius = minRadius + Math.random() * (maxRadius - minRadius);
        const angleDeg = startAngle + Math.random() * angleSpan;
        const point = polarToCartesian(
          config.offset.x,
          config.offset.y,
          radius,
          angleDeg
        );
        const { x, y } = point;

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
      const angleDeg = startAngle + Math.random() * angleSpan;
      const point = polarToCartesian(
        config.offset.x,
        config.offset.y,
        radius,
        angleDeg
      );
      const { x, y } = point;
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
        .on("mouseenter", function () {
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

          const textNode = textEl.node() as SVGTextElement | null;
          if (!textNode) {
            return;
          }
          const bbox = textNode.getBBox();
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
