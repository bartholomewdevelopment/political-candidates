import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PoliticianCard from '../components/PoliticianCard';
import PoliticianSearch from '../components/PoliticianSearch';
import politicians from '../data/politicians';
import '../styles/pages/Home.scss';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
  };

  const filteredPoliticians = {
    federal: {
      senators: politicians.federal.senators.filter(
        (senator) =>
          senator.name.toLowerCase().includes(searchTerm) ||
          senator.party.toLowerCase().includes(searchTerm)
      ),
      houseRepresentatives: politicians.federal.houseRepresentatives.filter(
        (rep) =>
          rep.name.toLowerCase().includes(searchTerm) ||
          rep.party.toLowerCase().includes(searchTerm)
      ),
    },
    state: Object.values(politicians.state).filter(
      (official) =>
        official.name.toLowerCase().includes(searchTerm) ||
        official.party.toLowerCase().includes(searchTerm)
    ),
  };

  const toggleSidebar = () => {
    setIsSidebarCollapsed((prev) => !prev);
  };

  return (
    <div className="home">
      {/* Sidebar */}
      <div className={`sidebar ${isSidebarCollapsed ? 'collapsed' : ''}`}>
        <button className="toggle-sidebar-btn" onClick={toggleSidebar}>
          {isSidebarCollapsed ? '>' : '<'}
        </button>
        {!isSidebarCollapsed && (
          <>
            <h2>Search & Navigate</h2>
            <PoliticianSearch onSearch={handleSearch} />
            <div className="quick-links">
              <h3>Quick Links</h3>
              <ul>
                {[...politicians.federal.senators, ...politicians.federal.houseRepresentatives, ...Object.values(politicians.state)].map((politician) => (
                  <li key={politician.id}>
                    <Link to={`/politician/${politician.id}`}>{politician.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h1>Ohio Politicians Platform</h1>

        {/* Federal Representatives Section */}
        <section>
          <h2 className="section-title">Federal Representatives</h2>
          <h3 className="subsection-title">Senators</h3>
          <div className="politician-list">
            {filteredPoliticians.federal.senators.map((senator) => (
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
            {filteredPoliticians.federal.houseRepresentatives.map((rep) => (
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
            {filteredPoliticians.state.map((official) => (
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
    </div>
  );
}

export default Home;
