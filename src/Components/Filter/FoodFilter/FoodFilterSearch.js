// FoodFilterSearch.js
import React from 'react';
import { useFilter, FilterProvider } from './FilterContext';

const FoodFilterSearch = () => {
  const { minimumVal, setMinimumVal, maximumVal, setMaximumVal } = useFilter();

  return (
    <div>
      <input
        type='number'
        placeholder='Minimum'
        value={minimumVal}
        onChange={(e) => setMinimumVal(e.target.value)}
      />
      <input
        type='number'
        placeholder='Maximum'
        value={maximumVal}
        onChange={(e) => setMaximumVal(e.target.value)}
      />
    </div>
  );
};

export default FoodFilterSearch;
