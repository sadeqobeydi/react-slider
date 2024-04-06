import { useState } from "react"


function ImageSlider({slides , currentIndex}){


    let styleSlide = {
        backgroundImage:`url(${slides[currentIndex].url})`,
        backgroundPosition : "center center" ,
        backgroundSize : "cover",
        backgroundRepeat: "no-repeat"
    }

    return(

        <div className="image-slider" style={{backgroundImage:`url(${slides[currentIndex].url})`,}}></div>
    )
}

export default ImageSlider