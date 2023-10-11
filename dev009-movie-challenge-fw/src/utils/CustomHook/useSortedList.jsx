import { useState, useEffect } from 'react';

export const useSortedList = (list, selectedSortOption) => {
  const [sortedList, setSortedList] = useState(list);

  useEffect(() => {
    if (list) {
      const [sortField, sortOrder] = selectedSortOption.split('-');

      // Clone the list to avoid modifying the state directly
      const nextList = [...list];

      // Apply the sorting logic
      nextList.sort((a, b) => {
        if (sortField === 'title') {
          return sortOrder === 'asc' ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title);
        } else if (sortField === 'vote_average') {
          return sortOrder === 'asc' ? a.vote_average - b.vote_average : b.vote_average - a.vote_average;
        }
        return 0;
      });

      setSortedList(nextList);
    }
  }, [list, selectedSortOption]);

  return sortedList;
};


