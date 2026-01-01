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
  { name: "Languages", angle: 0 },
  { name: "Frameworks", angle: 90 },
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

    const g = svg
      .append("g")
      .attr("transform", `translate(${centerX},${centerY})`);

    // Draw rings
    RINGS.forEach((ring) => {
      g.append("circle")
        .attr("r", ring.radius)
        .attr("fill", "none")
        .attr("stroke", "#ddd")
        .attr("stroke-width", 2);

      // Ring labels
      g.append("text")
        .attr("y", -ring.radius + 20)
        .attr("text-anchor", "middle")
        .attr("font-size", "14px")
        .attr("font-weight", "bold")
        .attr("fill", "#666")
        .text(ring.name);
    });

    // Draw quadrant lines
    g.append("line")
      .attr("x1", -400)
      .attr("y1", 0)
      .attr("x2", 400)
      .attr("y2", 0)
      .attr("stroke", "#ddd")
      .attr("stroke-width", 2);

    g.append("line")
      .attr("x1", 0)
      .attr("y1", -400)
      .attr("x2", 0)
      .attr("y2", 400)
      .attr("stroke", "#ddd")
      .attr("stroke-width", 2);

    // Quadrant labels
    QUADRANTS.forEach((quadrant) => {
      const angle = (quadrant.angle * Math.PI) / 180;
      const labelRadius = 420;
      const x = Math.cos(angle - Math.PI / 4) * labelRadius;
      const y = Math.sin(angle - Math.PI / 4) * labelRadius;

      g.append("text")
        .attr("x", x)
        .attr("y", y)
        .attr("text-anchor", "middle")
        .attr("font-size", "16px")
        .attr("font-weight", "bold")
        .attr("fill", "#333")
        .text(quadrant.name.toUpperCase());
    });

    // Plot blips
    const quadrantMap: Record<string, number> = {
      languages: 0,
      frameworks: 1,
      tools: 2,
      platforms: 3,
    };

    const ringMap: Record<string, number> = {
      adopt: 0,
      trial: 1,
      assess: 2,
      hold: 3,
    };

    entries.forEach((entry) => {
      const quadrantIndex = quadrantMap[entry.quadrant];
      const ringIndex = ringMap[entry.ring];

      const minRadius = ringIndex === 0 ? 30 : RINGS[ringIndex - 1].radius;
      const maxRadius = RINGS[ringIndex].radius;
      const radius = minRadius + Math.random() * (maxRadius - minRadius - 20);

      const baseAngle = (quadrantIndex * 90 * Math.PI) / 180;
      const angleRange = (90 * Math.PI) / 180;
      const angle = baseAngle + Math.random() * angleRange;

      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;

      const blip = g
        .append("g")
        .attr("class", "blip")
        .attr("transform", `translate(${x},${y})`)
        .style("cursor", "pointer")
        .on("click", () => onBlipClick(entry));

      // Blip shape - simple circle
      blip.append("circle").attr("r", 8).attr("fill", RINGS[ringIndex].color);

      // Blip label
      blip
        .append("text")
        .attr("dy", -12)
        .attr("text-anchor", "middle")
        .attr("font-size", "10px")
        .attr("font-weight", "bold")
        .attr("fill", "#333")
        .text(entry.name);
    });
  }, [entries, onBlipClick]);

  // Group entries by quadrant for legend
  const quadrantEntries: Record<string, TechEntry[]> = {
    languages: [],
    frameworks: [],
    tools: [],
    platforms: [],
  };

  entries.forEach((entry) => {
    quadrantEntries[entry.quadrant].push(entry);
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

  const getBlipIcon = (entry: TechEntry) => {
    const ringIndex = ringMap[entry.ring];
    const ringColor = RINGS[ringIndex].color;

    return (
      <svg width="12" height="12" viewBox="0 0 12 12">
        <circle cx="6" cy="6" r="5" fill={ringColor} />
      </svg>
    );
  };

  return (
    <div className="radar-container">
      <svg ref={svgRef}></svg>

      <div className="radar-legend">
        <div className="legend-quadrants">
          {QUADRANTS.map((quadrant) => {
            const quadrantKey = quadrant.name.toLowerCase();
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
      </div>
    </div>
  );
};
