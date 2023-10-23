import React from 'react';

const OrderBy = ({ selectedSortOption, handleSortOptionChange }) => {
  return (
    <div className="orderBy">
      <h3>SORT BY</h3>
      <select
          title="Dropdown para ordenar películas"
          className="sort-filter-options"
          value={selectedSortOption}
          onChange={handleSortOptionChange}
        >
          <option value="All">All</option>
          <option value="vote_average.desc">Most acclaimed</option>
          <option value="vote_average.asc">Less acclaimed</option>
          <option value="revenue.asc">Revenue Recognition Descending</option>
          <option value="revenue.desc">Revenue Recognition Ascending</option>
          <option value="primary_release_date.asc">Release Date Ascending</option>
          <option value="release_date.desc">Release Date Descending</option>
        </select>
    </div>
  );
};

export default OrderBy;