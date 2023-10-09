import React, { useState } from 'react'
import './FoodFilterCard.css'
import FoodFilterSearch from './FoodFilterSearch';
const FoodFilterCard = ({ item }) => {
    const filteredFood = sessionStorage.getItem('filteredFood') !== null && JSON.parse(sessionStorage.getItem('filteredFood')).filter((foodItem) => { return (item === foodItem) });
    const status = filteredFood.length > 0 ? true : false;
    const [selectedFood, setSelectedFood] = useState(status);

    const filteredFoodFunctionality = () => {
        let arrFood = [];
        if (sessionStorage.getItem('filteredFood') == null) {
            arrFood.push(item);
            sessionStorage.setItem('filteredFood', JSON.stringify(arrFood));
            setSelectedFood(true);
        }
        else {
            arrFood = JSON.parse(sessionStorage.getItem('filteredFood'));
            const filteredFood = arrFood.filter((foodItem) => { return (item === foodItem) });
            if (filteredFood.length > 0) {
                const arrFoodRes = arrFood.filter((foodItem) => { return (foodItem !== item) })
                sessionStorage.setItem('filteredFood', JSON.stringify(arrFoodRes));
                setSelectedFood(false);
            }
            else {
                arrFood.push(item);
                sessionStorage.setItem('filteredFood', JSON.stringify(arrFood));
                setSelectedFood(true);

            }


        }

    }
    const foodClicked = (e) => {
        e.preventDefault();
        filteredFoodFunctionality();


    }
    return (
        <div >

            <h4 className={selectedFood ? `selected` : 'ItemList'} onClick={foodClicked}>
                {item}
            </h4>
        </div>


    )
}

export default FoodFilterCard