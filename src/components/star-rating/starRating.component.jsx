import { useState } from "react";
import "./starRating.styles.css";

//React Icons Import
import {FaStar} from 'react-icons/fa';

const StarRating = ({numOfStars=5}) => {
    const [rating,setRating] = useState(0);
    const [hover, setHover] = useState(0);

const handleOnClick = (getCurrentId) => {
    setRating(getCurrentId)
    console.log('during rating: ', rating)
}

const handleOnMouseEnter = (getCurrentId) => {
    setHover(getCurrentId);
}

const handleOnMouseLeave = (getCurrentId) => {
    setHover(rating)
}

console.log('after rating: ',rating)

    return (
        <>
            <div>
                {
                    [...Array(numOfStars)].map((_,index)=> {
                        index++
                        return <FaStar
                                    key={index}
                                    className={index <= (hover || rating) ? 'active':'inactive'}
                                    onClick={()=>handleOnClick(index)}
                                    onMouseEnter={()=>handleOnMouseEnter(index)}
                                    onMouseLeave={()=>handleOnMouseLeave(index)}
                                    size={40}
                                    />
                    })
                }
            </div>
            <div>
                you are selecting {rating} out of {numOfStars}.
            </div>
        </>
    )
}

export default StarRating;