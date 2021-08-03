import { useEffect } from 'react';
import { useState } from 'react';
import './search-bar.css';

export const SearchBar = ({ searchQuery, setSearchQuery }) => {
  const [empty, setEmpty] = useState(true);

  useEffect(() => {
    setEmpty(!searchQuery);
  }, [searchQuery]);

  const handleQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleClearButtonClick = () => {
    setSearchQuery('');
  };

  return (
    <div className='search-bar'>
      <input
        className='search-field'
        type='search'
        placeholder='Search...'
        value={searchQuery}
        onChange={handleQueryChange}
      />
      {!empty && (
        <button className='clear-button' onClick={handleClearButtonClick}>
          &times;
        </button>
      )}
    </div>
  );
};
