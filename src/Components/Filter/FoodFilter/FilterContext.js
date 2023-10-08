// FilterContext.js
import React, { createContext, useContext, useState } from 'react';

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [minimumVal, setMinimumVal] = useState(``);
  const [maximumVal, setMaximumVal] = useState(``);

  return (
    <FilterContext.Provider value={{ minimumVal, setMinimumVal, maximumVal, setMaximumVal }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => {
  return useContext(FilterContext);
};
