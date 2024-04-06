import {useState } from "react"

import bootstrapImage from './accet/images/bootstrap.png'
import javascriptImage from './accet/images/javascript.jpg'
import githubImage from './accet/images/github.jpg'
import reactImage from './accet/images/react.jpg'
import "./style/index.css"
import ImageSlider from "./component/imageSlider/ImageSlider"
import { Row } from "react-bootstrap"
import { SlArrowLeft , SlArrowRight  } from "react-icons/sl";


function App() {
    
    const [currentIndex , setCurrentIndex] = useState(0)

    const slide = [
        {url: bootstrapImage , title :"bootstrap"},
        {url: javascriptImage , title :"javascript"},
        {url: githubImage , title :"github"},
        {url: reactImage , title :"react"}
    ]

    const goToPrevious = ()=>{
        currentIndex == 0 ? setCurrentIndex(slide.length-1) : setCurrentIndex(currentIndex-1)
    }

    const goToNext = ()=>{
        currentIndex == slide.length-1 ? setCurrentIndex(0) : setCurrentIndex(currentIndex+1)
    }


    const goToSlide = (index)=>{
        setCurrentIndex(index)
    }

    const dotes = slide.map( (itemd , slideIndex) =>{
        
        return <div className="point" key={slideIndex} onClick={()=>{goToSlide(slideIndex)}}></div>
    })


    return (
        <>
            <Row className="content px-1 align-items-center justify-content-center">
                <div className="containerSLider col-md-7 col-lg-5 mx-auto p-0">

                    <ImageSlider slides = {slide} currentIndex ={currentIndex} />

                    <button className="previous-item" onClick={goToPrevious}>
                        <SlArrowLeft  size="25px"/>
                    </button>
                    <button className="next-item" onClick={goToNext}>
                        <SlArrowRight size="25px"/> 
                    </button>
                    <div className="containerdote">
                        {dotes}
                    </div>
                </div>
            </Row>

        </>
    )
}

export default App