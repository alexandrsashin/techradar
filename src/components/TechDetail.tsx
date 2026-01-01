import { useParams, Link, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
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
        </div>

        <div className="detail-section">
          <h2 className="section-title">Description</h2>
          <p className="section-content">{entry.description}</p>
        </div>

        <div className="detail-section">
          <h2 className="section-title">Details</h2>
          <div className="detail-markdown">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {entry.detail}
            </ReactMarkdown>
          </div>
        </div>

        {(entry.website || entry.repository || entry.resources?.length) && (
          <div className="detail-section">
            <h2 className="section-title">Links</h2>
            <ul className="detail-links">
              {entry.website && (
                <li className="detail-link-item">
                  <a href={entry.website} target="_blank" rel="noreferrer">
                    Official site
                  </a>
                </li>
              )}
              {entry.repository && (
                <li className="detail-link-item">
                  <a href={entry.repository} target="_blank" rel="noreferrer">
                    GitHub repository
                  </a>
                </li>
              )}
              {entry.resources?.map((resource) => (
                <li key={resource.url} className="detail-link-item">
                  <a href={resource.url} target="_blank" rel="noreferrer">
                    {resource.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
