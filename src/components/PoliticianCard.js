import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/PoliticianCard.scss';

function PoliticianCard({ id, name, party, position, since, image }) {
  return (
    <div className="politician-card">
      <img
        src={image || '/images/profile.png'} // Use direct path for default image
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
