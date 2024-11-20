import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import politicians from "../data/politicians";
import "../styles/pages/PoliticianDetails.scss";

function PoliticianDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const politicianId = parseInt(id, 10);

  // Combine all politicians into a single array
  const allPoliticians = [
    ...politicians.federal.senators,
    ...politicians.federal.houseRepresentatives,
    ...Object.values(politicians.state),
  ];

  // Find the politician by ID
  const politician = allPoliticians.find((p) => p.id === politicianId);
  const currentIndex = allPoliticians.findIndex((p) => p.id === politicianId);

  if (!politician) {
    return <div>Politician not found.</div>;
  }

  // Handlers for navigation buttons
  const handlePrevious = () => {
    if (currentIndex > 0) {
      const previousId = allPoliticians[currentIndex - 1].id;
      navigate(`/politician/${previousId}`);
    }
  };

  const handleNext = () => {
    if (currentIndex < allPoliticians.length - 1) {
      const nextId = allPoliticians[currentIndex + 1].id;
      navigate(`/politician/${nextId}`);
    }
  };

  // State to manage collapsible sections
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (sectionName) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [sectionName]: !prevState[sectionName],
    }));
  };

  return (
    <div className="politician-details">
      {/* Left Sidebar */}
      <div className="sidebar left">
        <div className="image-container">
          <img
            src={politician.image || "/images/profile.png"}
            alt={`${politician.name}`}
            className="politician-image"
          />
          {politician.imageAttribution && (
          <div className="image-attribution-tooltip" title="Image Attribution">
            i
          <span
            className="tooltip-text"
            dangerouslySetInnerHTML={{ __html: politician.imageAttribution }}
          />
    </div>
  )}
</div>

        
        <p>
          <strong>Party:</strong> {politician.party}
        </p>
        <p>
          <strong>Position:</strong> {politician.position}
        </p>
        <p>
          <strong>State/Agency:</strong> {politician.state || "Not Specified"}
        </p>
        <p>
          <strong>Address:</strong> {politician.address}
        </p>
        <p>
          <strong>Email:</strong> {politician.email}
        </p>
        <p>
          <strong>Website:</strong>{" "}
          <a
            href={politician.website}
            target="_blank"
            rel="noopener noreferrer"
          >
            {politician.website}
          </a>
        </p>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h1>{politician.name}</h1>

        {/* Biography Section */}
        {politician.biography && (
          <div className="section">
            <h2
              onClick={() => toggleSection("biography")}
              className="collapsible"
            >
              Biography
            </h2>
            {openSections.biography && <p>{politician.biography}</p>}
          </div>
        )}

        {/* Committees Section */}
        {Array.isArray(politician.committees) &&
          politician.committees.length > 0 && (
            <div className="section">
              <h2
                onClick={() => toggleSection("committees")}
                className="collapsible"
              >
                Committees
              </h2>
              {openSections.committees && (
                <ul>
                  {politician.committees.map((committee, index) => (
                    <li key={index}>{committee}</li>
                  ))}
                </ul>
              )}
            </div>
          )}
        {/* Caucuses Section */}
        {Array.isArray(politician.caucuses) &&
          politician.caucuses.length > 0 && (
            <div className="section">
              <h2
                onClick={() => toggleSection("caucuses")}
                className="collapsible"
              >
                Caucuses
              </h2>
              {openSections.caucuses && (
                <ul>
                  {politician.caucuses.map((caucus, index) => (
                    <li key={index}>{caucus}</li>
                  ))}
                </ul>
              )}
            </div>
          )}

        {/* Military Service Section */}
        {politician.military && (
          <div className="section">
            <h2
              onClick={() => toggleSection("military")}
              className="collapsible"
            >
              Military Service
            </h2>
            {openSections.military && (
              <>
                <p>
                  <strong>Rank:</strong> {politician.military.rank}
                </p>
                <p>
                  <strong>Branch:</strong> {politician.military.branch}
                </p>
                <ul>
                  {politician.military.accolades.map((award, index) => (
                    <li key={index}>{award}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        )}

        {/* Education Section */}
        {Array.isArray(politician.education) &&
          politician.education.length > 0 && (
            <div className="section">
              <h2
                onClick={() => toggleSection("education")}
                className="collapsible"
              >
                Education
              </h2>
              {openSections.education && (
                <ul>
                  {politician.education.map((degree, index) => (
                    <li key={index}>{degree}</li>
                  ))}
                </ul>
              )}
            </div>
          )}

{Array.isArray(politician.electoralHistory) &&
  politician.electoralHistory.length > 0 && (
    <div className="section">
      <h2
        onClick={() => toggleSection("electoralHistory")}
        className="collapsible"
      >
        Electoral History
      </h2>
      {openSections.electoralHistory && (
        <ul>
          {politician.electoralHistory.map((entry, index) => (
            <li key={index}>
              <strong>{entry.year}:</strong> {entry.office} ({entry.result})
              {entry.opponent && ` vs. ${entry.opponent}`}
              <br />
              Votes: {entry.votes} | Opponent Votes: {entry.opponentVotes}
            </li>
          ))}
        </ul>
      )}
    </div>
  )}


       {/* Values Section */}
{politician.values && (
  <div className="section">
    <h2 onClick={() => toggleSection("values")} className="collapsible">
      Values
    </h2>
    {openSections.values && (
      <table className="values-table">
        <thead>
          <tr>
            <th>Topic</th>
            <th>Opinion</th>
          </tr>
        </thead>
        <tbody>
          {politician.values.map((value, index) => (
            <tr key={index}>
              <td>{value.topic}</td>
              <td>{value.opinion}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )}
  </div>
)}

        {/* Essay Section */}
        {politician.essay && (
          <div className="section">
            <h2 onClick={() => toggleSection("essay")} className="collapsible">
              Campaign Essay
            </h2>
            {openSections.essay && <p>{politician.essay}</p>}
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="navigation-buttons">
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className="prev-button"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex === allPoliticians.length - 1}
            className="next-button"
          >
            Next
          </button>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="sidebar right">
        <h3>Voting Record</h3>
        {Array.isArray(politician.votingRecord) &&
        politician.votingRecord.length > 0 ? (
          <ul>
            {politician.votingRecord.map((record, index) => (
              <li key={index}>
                <strong>{record.bill}:</strong> {record.vote} on {record.date}
              </li>
            ))}
          </ul>
        ) : (
          <p>No voting records available.</p>
        )}

        <h3>News Articles</h3>
        {Array.isArray(politician.newsArticles) &&
        politician.newsArticles.length > 0 ? (
          <ul>
            {politician.newsArticles.map((article, index) => (
              <li key={index}>
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  {article.title}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p>No news articles available.</p>
        )}
      </div>
    </div>
  );
}

export default PoliticianDetails;
