import React from 'react';
import PoliticianCard from './PoliticianCard';
import politicians from '../data/politicians';

function PoliticianList() {
  return (
    <div className="politician-list">
      {politicians.map((politician) => (
        <PoliticianCard
          key={politician.id}
          id={politician.id}
          name={politician.name}
          party={politician.party}
          image={politician.image}
        />
      ))}
    </div>
  );
}

export default PoliticianList;
