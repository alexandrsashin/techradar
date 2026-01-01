import { Link } from "react-router-dom";
import type { TechEntry } from "../types/radar";
import "./TechCard.css";

interface TechCardProps {
  entry: TechEntry;
}

const ringLabels: Record<string, string> = {
  adopt: "Adopt",
  trial: "Trial",
  assess: "Assess",
  hold: "Hold",
};

export const TechCard = ({ entry }: TechCardProps) => {
  return (
    <Link to={`/tech/${entry.id}`} className="tech-card">
      <div className="tech-card-header">
        <h3 className="tech-card-title">{entry.name}</h3>
      </div>

      <div className="tech-card-badges">
        <span className={`badge badge-ring badge-${entry.ring}`}>
          {ringLabels[entry.ring]}
        </span>
        <span className="badge badge-quadrant">{entry.quadrant}</span>
      </div>

      <p className="tech-card-description line-clamp-3">{entry.description}</p>

      {(entry.website || entry.repository) && (
        <div className="tech-card-links">
          {entry.website && <span className="link-chip">Website</span>}
          {entry.repository && <span className="link-chip">GitHub</span>}
        </div>
      )}
    </Link>
  );
};
