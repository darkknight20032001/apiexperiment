import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import ApiContext from '../ApiContext';
import Food from './Food/Food';
import OffsetFilter from './Filter/OffsetFilter';
import OffsetContext from './OffsetContext';
import FoodFilter from './Filter/FoodFilter/FoodFilter';
import { useFilter } from './Filter/FoodFilter/FilterContext';

const HomePage = () => {
    const { minimumVal, maximumVal } = useFilter();
    console.log(minimumVal, maximumVal);
    const apiKey = useContext(ApiContext);
    const [offset, setOffset] = useState(0);
    const [receipeData, setReceipeData] = useState([]);
    console.log(apiKey);

    const fetchData = async () => {
        
        const data = await axios.get('https://api.spoonacular.com/recipes/findByNutrients?apiKey=' + apiKey + '&number=5&offset=' + offset + '&minCarbs=10');
        console.log("The answer is ", data);
        setReceipeData(data?.data);
    }
    useEffect(() => { fetchData() }, [offset]);
    return (
        <div>
            <h1>HomePage</h1>

            <FoodFilter />
            {receipeData.length > 0 && receipeData.map((foodItem) => { return <Food key={foodItem.id} foodItem={foodItem} /> })}
            <OffsetContext.Provider value={{ offset, setOffset }} >
                <OffsetFilter />
            </OffsetContext.Provider>
        </div>
    )
}

export default HomePage