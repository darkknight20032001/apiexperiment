// FoodFilterSearch.js
import React, { useState } from 'react';
import { useFilter, FilterProvider } from './FilterContext';

const FoodFilterSearch = ({ nutrients, receipeData, setReceipeData, minimumVal, setMinimumVal, maximumVal, setMaximumVal }) => {

  const [typedMinValue, setTypedMinValue] = useState(minimumVal || '');
  const [typedMaxValue, setTypedMaxValue] = useState(maximumVal || '');

  const getClickedData = (e) => {
    e.preventDefault();
    console.log(nutrients)
    if (minimumVal !== `` && maximumVal !== ``) {
      minimumVal = Number(minimumVal);
      maximumVal = Number(maximumVal);
      console.log("The minimum value is ", minimumVal);
      const filteredData = receipeData.filter((item) => {
        const itemFat = parseFloat(item.fat);
        console.log(itemFat);
        return (itemFat > minimumVal && itemFat < maximumVal);
      });
      console.log(filteredData);
    }
  }
  return (
    <div>
      <input
        type='number'
        placeholder='Minimum'
        value={typedMinValue}
        onChange={(e) => {
          setTypedMinValue(e.target.value);
          setMinimumVal(e.target.value)
        }}
      />
      <input
        type='number'
        placeholder='Maximum'
        value={typedMaxValue}
        onChange={(e) => {
          setTypedMaxValue(e.target.value);
          setMaximumVal(e.target.value);
        }}
      />
      <button onClick={getClickedData}>Filter</button>
    </div>
  );
};

export default FoodFilterSearch;
