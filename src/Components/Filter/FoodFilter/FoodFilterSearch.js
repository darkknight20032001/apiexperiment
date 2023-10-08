// FoodFilterSearch.js
import React from 'react';
import { useFilter, FilterProvider } from './FilterContext';

const FoodFilterSearch = ({ nutrients, receipeData, setReceipeData }) => {
  let { minimumVal, setMinimumVal, maximumVal, setMaximumVal } = useFilter();

  const getClickedData = (e) => {
    e.preventDefault();
    // const filteredData = receipeData.filter((item)=>{

    // })

    // console.log("The answer is" , receipeData)
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
        value={minimumVal}
        onChange={(e) => setMinimumVal(e.target.value)}
      />
      <input
        type='number'
        placeholder='Maximum'
        value={maximumVal}
        onChange={(e) => setMaximumVal(e.target.value)}
      />
      <button onClick={getClickedData}>Filter</button>
    </div>
  );
};

export default FoodFilterSearch;
