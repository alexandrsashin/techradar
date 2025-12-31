import { useParams, Link, useNavigate } from "react-router-dom";
import { techEntries } from "../data/techData";
import "./TechDetail.css";

const ringLabels: Record<string, string> = {
  adopt: "Adopt",
  trial: "Trial",
  assess: "Assess",
  hold: "Hold",
};

export const TechDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const entry = techEntries.find((e) => e.id === id);

  if (!entry) {
    return (
      <div className="container">
        <div className="not-found-container">
          <h1 className="not-found-title">Technology Not Found</h1>
          <Link to="/" className="not-found-link">
            ← Back to Radar
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="detail-container">
      <button onClick={() => navigate(-1)} className="back-button">
        ← Back
      </button>

      <div className="detail-card">
        <div className="detail-header">
          <h1 className="detail-title">{entry.name}</h1>
          {entry.isNew && <span className="badge badge-new">NEW</span>}
        </div>

        <div className="detail-badges">
          <span className={`badge badge-ring badge-${entry.ring}`}>
            {ringLabels[entry.ring]}
          </span>
          <span className="badge badge-quadrant">{entry.quadrant}</span>
          {entry.moved === 1 && (
            <span className="movement-text up">
              <span>▲</span> Moved up
            </span>
          )}
          {entry.moved === -1 && (
            <span className="movement-text down">
              <span>▼</span> Moved down
            </span>
          )}
        </div>

        <div className="detail-section">
          <h2 className="section-title">Description</h2>
          <p className="section-content">{entry.description}</p>
        </div>
      </div>
    </div>
  );
};
