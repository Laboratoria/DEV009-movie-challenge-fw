// orderBy.jsx
import React from 'react';

const OrderBy = ({ selectedSortOption, handleSortOptionChange }) => {
  return (
    <div className="orderBy">
      <h3>SORT BY</h3>
      <select
        title="dropdown ordenar por"
        className="opciones"
        value={selectedSortOption}
        onChange={handleSortOptionChange}
      >
        <option value="All">All</option>
        <option value="title-asc">A - Z</option>
        <option value="title-desc">Z - A</option>
        <option value="vote_average-asc">Score Low - High</option>
        <option value="vote_average-desc">Score High - Low</option>
      </select>
    </div>
  );
};

export default OrderBy;