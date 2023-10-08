import React from 'react'
import { filterDb } from './FilterDb'
import FoodFilterCard from './FoodFilterCard';
import './FoodFilter.css'
import FoodFilterSearch from './FoodFilterSearch';
const FoodFilter = ( {nutrients , receipeData , setReceipeData}) => {
    console.log(filterDb);
    return (
        <div>
            <h3>FoodFilter</h3>



            <div className="filterItem">
                {Object.values(filterDb).map((item) => {

                    return <FoodFilterCard item={item} />

                })}
            </div>
            <div className='FilterSearch'><FoodFilterSearch  nutrients={nutrients} receipeData={receipeData} setReceipeData={setReceipeData} /></div>

        </div>
    )
}

export default FoodFilter