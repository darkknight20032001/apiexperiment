import React from 'react'
import { filterDb } from './FilterDb'
import FoodFilterCard from './FoodFilterCard';
import './FoodFilter.css'
import FoodFilterSearch from './FoodFilterSearch';
const FoodFilter = () => {
    console.log(filterDb);
    return (
        <div>
            <h3>FoodFilter</h3>



            <div className="filterItem">
                {Object.keys(filterDb).map((item) => {

                    return <FoodFilterCard item={item} />

                })}
            </div>
            <div className='FilterSearch'><FoodFilterSearch /></div>

        </div>
    )
}

export default FoodFilter