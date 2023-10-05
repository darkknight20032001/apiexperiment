import React, { useContext } from 'react'
import OffsetContext from '../OffsetContext';

const OffsetFilter = () => {
    const { offset, setOffset } = useContext(OffsetContext);
    console.log(offset)
    return (
                 <div>
                <button type="submit" onClick={(e) => {
                    e.preventDefault();
                    setOffset(offset + 5);
                }}>Go Down</button>
            </div>
      
    )
}

export default OffsetFilter