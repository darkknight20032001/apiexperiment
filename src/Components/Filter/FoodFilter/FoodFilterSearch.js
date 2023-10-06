import React, { useState } from 'react'

const FoodFilterSearch = () => {
    const [minimumVal, setMinimumVal] = useState(``);
    const [maximumVal, setMaximumVal] = useState(``);
    return (
        <div>
            <input type='number' placeholder='Minimum' onChange={(e) => { setMinimumVal(e.target.value) }} />
            <input type='number' placeholder='Maximum' onChange={(e) => { setMaximumVal(e.target.value) }} />
        </div>
    )
}

export default FoodFilterSearch