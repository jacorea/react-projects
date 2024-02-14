import { useState, useEffect } from "react";
import "./ImageSlider.styles.css"

import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs'


const ImageSlider = ({url, limit =5, page=1}) => {

    const [images, setImages] = useState([]);
    const [currentSlide,setCurrentSlide] = useState(0);
    const [errorMsg,setErrorMsg] = useState(null);
    const [loading,setLoading] = useState(false);


    //async function to get fetch url
    const fetchImages = async (getUrl) => {
        try{
            setLoading(true); //getting data, so want to let user know data is loading.
            const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
            const data = await response.json();

            if(data) {
                setImages(data);
                setLoading(false);
            }
        }
        catch(e){
            setErrorMsg(e.message)
            setLoading(false);
        }
    }

    //for url
    useEffect(()=>{
        if(url !== '') fetchImages(url)
    },[url])

    if(loading) {
        return <div>Loading.... Please wait!</div>
    }

    if(errorMsg !== null) {
        return <div>Error message occured: {errorMsg}</div>
    }

    const handlePrev = () => {
        setCurrentSlide(currentSlide === 0 ? images.length-1 : currentSlide - 1)
    }

    const handleNext = () => {
        setCurrentSlide(currentSlide === images.length-1 ? 0 : currentSlide + 1)
    }

    const handleSelect =(getCurrentId) => {
        setCurrentSlide(getCurrentId);
    }

    return (
        <div className="container">
            <BsArrowLeftCircleFill onClick={handlePrev} className="arrow arrow-left" />
            {images && images.length
            ? images.map((imageItem, index)=>(
                <img
                    key={imageItem.id}
                    alt={imageItem.download_url}
                    src={imageItem.download_url}
                    className={currentSlide === index ? "current-image" : "current-image hide-current-image"}
                />
            )) : null}
            <BsArrowRightCircleFill onClick={handleNext} className="arrow arrow-right"/>
            <span className="circle-indicators">
                {images && images.length ?
                images.map((_,index)=>
                    <button 
                        key={index} 
                        className={currentSlide === index ? 'current-indicator' : 'current-indicator inactive-indicator'} 
                        onClick={()=>handleSelect(index)}>
                    </button>
                ): null}
            </span>
        </div>
    )
}

export default ImageSlider