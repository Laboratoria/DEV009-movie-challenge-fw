import React, { useState, useEffect } from 'react';

const MovieFilter = ({ movies, onYearFilterChange, filteredYear }) => {
  const [selectedYear, setSelectedYear] = useState(filteredYear);

  // Extract the years from the movies and remove duplicates
  const years = [...new Set(movies.map(movie => movie.release_date.split('-')[0]))];

  useEffect(() => {
    onYearFilterChange(selectedYear);
  }, [selectedYear, onYearFilterChange]);

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  return (
    <div className="director-filter">
      <h3>FILTER</h3>
      <select
        title="Dropdown filtro por año"
        className="year-filter-options"
        value={selectedYear}
        onChange={handleYearChange}
      >
        <option value="all">All</option> {/* Add an "All" option */}
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MovieFilter;
