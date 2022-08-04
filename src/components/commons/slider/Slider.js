import React, {useState } from "react";
import SliderBtn from "./SliderBtn";


export default function Slider(props) {

  const [slideIndex, setSlideIndex] = useState(1)

  const nextSlide = () => {
    if (slideIndex !== props.noOfSlide.length) {
      setSlideIndex(slideIndex + 1)
    }
    else if (slideIndex === props.noOfSlide.length) {
      setSlideIndex(1)
    }
  }

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1)
    }
    else if (slideIndex === 1) {
      setSlideIndex(props.noOfSlide.length)
    }
  }

  const moveDot = index => {
    setSlideIndex(index)
  }

  return (
    <div className="container-slider">
      <div className="slider">
      {props.noOfSlide.map((item, index) => {
        return (
          <div key={index} className={slideIndex === index + 1 ? "slide active" : "slide"}>{props.data}</div>
        )
      })}
      </div>

      <div className="slider-btn">
      {<SliderBtn classActive = {slideIndex !== props.noOfSlide.length ? "active" : ""} moveSlide={nextSlide} direction={"next"} />}
      {<SliderBtn classActive = {slideIndex !== 1 ? "active" : ""} moveSlide={prevSlide} direction={"prev"} />}
      </div>

      <div className="slider-dots">
        <ul>
          {props.noOfSlide.map((item, index) => (
            <li key={index}
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? "dot active" : "dot"}
          ></li>
        ))}
        </ul>
      </div>
    </div>
  )
}
