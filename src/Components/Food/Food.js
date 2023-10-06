import React from 'react'
import './Food.css'

const Food = ({ foodItem }) => {
    
    return (
        <div className='FoodList'>
            <h3>{foodItem.title}</h3>
            <ol>
                <li>{foodItem.protein}</li>
                <li>{foodItem.fat}</li>
                <li>{foodItem.carbs}</li>
                <li>{foodItem.calories}</li>
            </ol>
        </div>
    )
}

export default Food