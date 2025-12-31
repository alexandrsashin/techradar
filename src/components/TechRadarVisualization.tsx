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

      // Blip shape
      if (entry.moved === 1) {
        blip
          .append("path")
          .attr("d", "M -8,4 8,4 0,-10 z")
          .attr("fill", RINGS[ringIndex].color);
      } else if (entry.moved === -1) {
        blip
          .append("path")
          .attr("d", "M -8,-4 8,-4 0,10 z")
          .attr("fill", RINGS[ringIndex].color);
      } else if (entry.moved === 0) {
        blip.append("circle").attr("r", 8).attr("fill", RINGS[ringIndex].color);
      } else {
        blip
          .append("path")
          .attr("d", d3.symbol().type(d3.symbolStar).size(160)())
          .attr("fill", RINGS[ringIndex].color);
      }

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

    // Legend - Movement indicators
    const movementLegend = svg
      .append("g")
      .attr("transform", `translate(20, ${height - 100})`);

    movementLegend
      .append("text")
      .attr("font-weight", "bold")
      .attr("font-size", "12px")
      .text("Movement:");

    const legendItems = [
      { symbol: "circle", text: "No change", y: 20 },
      { symbol: "triangle-up", text: "Moved up", y: 40 },
      { symbol: "triangle-down", text: "Moved down", y: 60 },
      { symbol: "star", text: "New entry", y: 80 },
    ];

    legendItems.forEach((item) => {
      const g = movementLegend
        .append("g")
        .attr("transform", `translate(0, ${item.y})`);

      if (item.symbol === "circle") {
        g.append("circle").attr("r", 6).attr("cx", 10).attr("fill", "#93c47d");
      } else if (item.symbol === "triangle-up") {
        g.append("path")
          .attr("d", "M 2,10 18,10 10,-6 z")
          .attr("fill", "#93c47d");
      } else if (item.symbol === "triangle-down") {
        g.append("path")
          .attr("d", "M 2,0 18,0 10,16 z")
          .attr("fill", "#93c47d");
      } else if (item.symbol === "star") {
        g.append("path")
          .attr("d", d3.symbol().type(d3.symbolStar).size(120)())
          .attr("transform", "translate(10, 6)")
          .attr("fill", "#93c47d");
      }

      g.append("text")
        .attr("x", 25)
        .attr("y", 10)
        .attr("font-size", "11px")
        .text(item.text);
    });

    // Legend - Ring descriptions
    const ringLegend = svg
      .append("g")
      .attr("transform", `translate(${width - 420}, 20)`);

    ringLegend
      .append("text")
      .attr("font-weight", "bold")
      .attr("font-size", "14px")
      .text("Rings:");

    RINGS.forEach((ring, index) => {
      const yOffset = 25 + index * 90;
      const legendGroup = ringLegend
        .append("g")
        .attr("transform", `translate(0, ${yOffset})`);

      // Ring color indicator
      legendGroup
        .append("circle")
        .attr("r", 8)
        .attr("cx", 8)
        .attr("cy", 0)
        .attr("fill", ring.color);

      // Ring name
      legendGroup
        .append("text")
        .attr("x", 25)
        .attr("y", 5)
        .attr("font-weight", "bold")
        .attr("font-size", "13px")
        .attr("fill", "#333")
        .text(ring.name);

      // Ring description (wrapped text)
      const words = ring.description.split(" ");
      let line: string[] = [];
      let lineNumber = 0;
      const lineHeight = 14;
      const maxWidth = 380;

      const testText = legendGroup
        .append("text")
        .attr("x", 25)
        .attr("y", 22)
        .attr("font-size", "11px")
        .attr("fill", "#666");

      words.forEach((word) => {
        line.push(word);
        const testLine = line.join(" ");
        const testElement = testText.text(testLine);
        const textLength = (
          testElement.node() as SVGTextElement
        )?.getComputedTextLength();

        if (textLength && textLength > maxWidth) {
          line.pop();
          testText.text(line.join(" "));
          legendGroup
            .append("text")
            .attr("x", 25)
            .attr("y", 22 + lineNumber * lineHeight)
            .attr("font-size", "11px")
            .attr("fill", "#666")
            .text(line.join(" "));
          line = [word];
          lineNumber++;
        }
      });

      if (line.length > 0) {
        testText.remove();
        legendGroup
          .append("text")
          .attr("x", 25)
          .attr("y", 22 + lineNumber * lineHeight)
          .attr("font-size", "11px")
          .attr("fill", "#666")
          .text(line.join(" "));
      }
    });
  }, [entries, onBlipClick]);

  return (
    <div className="radar-container">
      <svg ref={svgRef}></svg>
    </div>
  );
};
