import React from 'react';
import PoliticianCard from '../components/PoliticianCard';
import politicians from '../data/politicians';
import '../styles/pages/Home.scss';

function Home() {
  return (
    <div className="home">
      <h1>Ohio Politicians Platform</h1>

      {/* Federal Representatives Section */}
      <section>
        <h2 className="section-title">Federal Representatives</h2>
        <h3 className="subsection-title">Senators</h3>
        <div className="politician-list">
          {politicians.federal.senators.map((senator) => (
            <PoliticianCard
              key={senator.id}
              id={senator.id}
              name={senator.name}
              party={senator.party}
              position={senator.position}
              since={senator.since}
              image={senator.image}
            />
          ))}
        </div>

        <h3 className="subsection-title">House Representatives</h3>
        <div className="politician-list">
          {politicians.federal.houseRepresentatives.map((rep) => (
            <PoliticianCard
              key={rep.id}
              id={rep.id}
              name={rep.name}
              party={rep.party}
              position={`District ${rep.district} Representative`}
              since={rep.since}
              image={rep.image}
            />
          ))}
        </div>
      </section>

      {/* State Officials Section */}
      <section>
        <h2 className="section-title">State Officials</h2>
        <div className="politician-list">
          {Object.values(politicians.state).map((official) => (
            <PoliticianCard
              key={official.id}
              id={official.id}
              name={official.name}
              party={official.party}
              position={official.position}
              since={official.since}
              image={official.image}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
