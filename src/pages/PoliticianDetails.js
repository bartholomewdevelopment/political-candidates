import React from "react";
import { useParams } from "react-router-dom";
import politicians from "../data/politicians";
import "../styles/pages/PoliticianDetails.scss";
import defaultProfileImage from "../images/profile.png";

function PoliticianDetails() {
  const { id } = useParams();
  const politicianId = parseInt(id);

  // Combine all politicians into a single array
  const allPoliticians = [
    ...politicians.federal.senators,
    ...politicians.federal.houseRepresentatives,
    ...Object.values(politicians.state),
  ];

  // Find the politician by ID
  const politician = allPoliticians.find((p) => p.id === politicianId);

  if (!politician) {
    return <div>Politician not found.</div>;
  }

  return (
    <div className="politician-details">
    {/* Sidebar */}
    <div className="sidebar">
      <img src={politician.image || defaultProfileImage} alt={politician.name} />
      {politician.imageAttribution && (
        <p
          className="image-attribution"
          dangerouslySetInnerHTML={{ __html: politician.imageAttribution }}
        />
      )}
      <p><strong>Party:</strong> {politician.party}</p>
      <p><strong>Position:</strong> {politician.position}</p>
      <p><strong>Address:</strong> {politician.address}</p>
      <p><strong>Email:</strong> {politician.email}</p>
      <p>
        <strong>Website:</strong>{" "}
        <a href={politician.website} target="_blank" rel="noopener noreferrer">
          {politician.website}
        </a>
      </p>
    </div>
  
    {/* Main Content */}
    <div className="main-content">
      <h1>{politician.name}</h1>
  
      <div className="section">
        <h2>Voting Results</h2>
        <ul>
          {politician.votingResults.map((result, index) => (
            <li key={index}>{result}</li>
          ))}
        </ul>
      </div>
  
      <div className="section">
        <h2>Laws Voted For</h2>
        <ul>
          {politician.laws.map((law, index) => (
            <li key={index}>{law}</li>
          ))}
        </ul>
      </div>
  
      <div className="section">
        <h2>Values</h2>
        <p>{politician.values}</p>
      </div>
  
      <div className="section">
        <h2>Campaign Essay</h2>
        <p>{politician.essay}</p>
      </div>
    </div>
  </div>
  
  );
}

export default PoliticianDetails;
