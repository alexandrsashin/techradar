import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TechRadarVisualization } from "../components/TechRadarVisualization";
import { TechCard } from "../components/TechCard";
import { techEntries } from "../data/techData";
import type { Ring, Quadrant, TechEntry } from "../types/radar";
import "./RadarPage.css";

export const RadarPage = () => {
  const navigate = useNavigate();
  const [selectedRing, setSelectedRing] = useState<Ring | "all">("all");
  const [selectedQuadrant, setSelectedQuadrant] = useState<Quadrant | "all">(
    "all"
  );
  const [view, setView] = useState<"radar" | "list">("radar");
  const [searchTerm, setSearchTerm] = useState("");

  const normalizedSearch = searchTerm.trim().toLowerCase();

  const filteredEntries = techEntries.filter((entry) => {
    if (selectedRing !== "all" && entry.ring !== selectedRing) return false;
    if (selectedQuadrant !== "all" && entry.quadrant !== selectedQuadrant)
      return false;
    if (normalizedSearch) {
      const matchesSearch = entry.name.toLowerCase().includes(normalizedSearch);
      if (!matchesSearch) return false;
    }
    return true;
  });

  const handleBlipClick = (entry: TechEntry) => {
    navigate(`/tech/${entry.id}`);
  };

  return (
    <div className="page">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <h1 className="header-title">Tech Radar</h1>
          <p className="header-subtitle">
            Explore our technology landscape and adoption strategy
          </p>
        </div>
      </header>

      {/* Filters */}
      <div className="filters">
        <div className="filters-content">
          <div className="filters-row">
            {/* View Toggle */}
            <div className="view-toggle">
              <button
                onClick={() => setView("radar")}
                className={`view-button ${view === "radar" ? "active" : ""}`}
              >
                Radar View
              </button>
              <button
                onClick={() => setView("list")}
                className={`view-button ${view === "list" ? "active" : ""}`}
              >
                List View
              </button>
            </div>

            <input
              type="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search technologies..."
              aria-label="Search technologies"
              className="filter-input"
            />

            {/* Ring Filter */}
            <select
              value={selectedRing}
              onChange={(e) => setSelectedRing(e.target.value as Ring | "all")}
              className="filter-select"
            >
              <option value="all">All Rings</option>
              <option value="adopt">Adopt</option>
              <option value="trial">Trial</option>
              <option value="assess">Assess</option>
              <option value="hold">Hold</option>
            </select>

            {/* Quadrant Filter */}
            <select
              value={selectedQuadrant}
              onChange={(e) =>
                setSelectedQuadrant(e.target.value as Quadrant | "all")
              }
              className="filter-select"
            >
              <option value="all">All Quadrants</option>
              <option value="methods">Methods & Techniques</option>
              <option value="languages-frameworks">
                Languages & Frameworks
              </option>
              <option value="tools">Tools</option>
              <option value="platforms">Platforms</option>
            </select>

            <div className="filter-count">
              Showing {filteredEntries.length} of {techEntries.length}{" "}
              technologies
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="content">
        {view === "radar" ? (
          <div className="radar-view">
            <TechRadarVisualization
              entries={filteredEntries}
              onBlipClick={handleBlipClick}
            />
            <div className="radar-note">
              Click on any technology to view details
            </div>
          </div>
        ) : (
          <div className="list-view">
            {/* Group by quadrant */}
            {(
              [
                "methods",
                "languages-frameworks",
                "tools",
                "platforms",
              ] as Quadrant[]
            ).map((quadrant) => {
              const quadrantEntries = filteredEntries.filter(
                (e) => e.quadrant === quadrant
              );
              if (quadrantEntries.length === 0) return null;

              const quadrantNames: Record<Quadrant, string> = {
                methods: "Methods & Techniques",
                "languages-frameworks": "Languages & Frameworks",
                tools: "Tools",
                platforms: "Platforms",
              };

              return (
                <div key={quadrant} className="quadrant-section">
                  <h2 className="quadrant-title">{quadrantNames[quadrant]}</h2>
                  <div className="tech-grid">
                    {quadrantEntries.map((entry) => (
                      <TechCard key={entry.id} entry={entry} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>Tech Radar • Built with React, TypeScript, and D3.js</p>
        </div>
      </footer>
    </div>
  );
};
