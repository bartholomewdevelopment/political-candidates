import React, { useState } from 'react';
import '../styles/components/PoliticianSearch.scss';


function PoliticianSearch({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearch(term);
  };

  return (
    <div className="politician-search">
      <input
        type="text"
        placeholder="Search by name, party, or value..."
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
}

export default PoliticianSearch;
