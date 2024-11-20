import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/PoliticianCard.scss';

function PoliticianCard({ id, name, party, position, since, image }) {
  // Determine the dynamic class for the party glow effect
  const partyClass = party === 'Republican' ? 'republican' : party === 'Democrat' ? 'democrat' : '';

  return (
    <div className={`politician-card ${partyClass}`}>
      <img
        src={image || '/images/profile.png'} // Use default image if none provided
        alt={name}
      />
      <h3>{name}</h3>
      <p className="party">{party}</p>
      <p className="position">{position}</p>
      {since && <p className="since">In Office Since: {since}</p>}
      <Link to={`/politician/${id}`} className="details-link">
        View Details
      </Link>
    </div>
  );
}

export default PoliticianCard;

