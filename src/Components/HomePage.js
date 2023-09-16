import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import ApiContext from '../ApiContext';
import Food from './Food/Food';

const HomePage = () => {
    const apiKey = useContext(ApiContext);
    const [receipeData, setReceipeData] = useState([]);
    console.log(apiKey);
    const fetchData = async () => {
        const data = await axios.get('https://api.spoonacular.com/recipes/findByNutrients?apiKey=' + apiKey + '&minCarbs=10');
        console.log("The answer is ",data);
        setReceipeData(data?.data);
    }
    useEffect(() => { fetchData() }, []);
    return (
        <div>
            <h1>HomePage</h1>
            {receipeData.length > 0 && receipeData.map((foodItem) => { return <Food foodItem={foodItem} /> })}
        </div>
    )
}

export default HomePage