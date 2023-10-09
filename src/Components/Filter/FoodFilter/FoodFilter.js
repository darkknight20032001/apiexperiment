import React from 'react'
import { filterDb } from './FilterDb'
import FoodFilterCard from './FoodFilterCard';
import './FoodFilter.css'
import FoodFilterSearch from './FoodFilterSearch';
import { useFilter } from './FilterContext';

const FoodFilter = ({ nutrients, receipeData, setReceipeData }) => {
    let { minimumVal, setMinimumVal, maximumVal, setMaximumVal } = useFilter();

    console.log(filterDb);
    return (
        <div>
            <h3>FoodFilter</h3>



            <div className="filterItem">
                {Object.values(filterDb).map((item) => {
                    return <div className='filterClass'>
                        <FoodFilterCard key={item} item={item} />
                        <FoodFilterSearch key={item} nutrients={nutrients} receipeData={receipeData} setReceipeData={setReceipeData} minimumVal={minimumVal} setMinimumVal={setMinimumVal} maximumVal={maximumVal} setMaximumVal={setMaximumVal} />
                    </div>
                })}
            </div>
        </div>

    )
}

export default FoodFilter