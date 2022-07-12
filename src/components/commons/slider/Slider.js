import React, { useState } from "react";
import SliderBtn from "./SliderBtn";


export default function Slider(props) {

  const [slideIndex, setSlideIndex] = useState(1)

  const nextSlide = () => {
    if (slideIndex !== props.dataSlider.length) {
      setSlideIndex(slideIndex + 1)
    }
    else if (slideIndex === props.dataSlider.length) {
      setSlideIndex(1)
    }
  }

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1)
    }
    else if (slideIndex === 1) {
      setSlideIndex(props.dataSlider.length)
    }
  }

  const moveDot = index => {
    setSlideIndex(index)
  }

  return (
    <div className="container-slider">
      <div className="slider">
      {props.dataSlider.map((item, index) => {
        return (
          <div key={index} className={slideIndex === index + 1 ? "nav-img active" : "nav-img"}><img src={props.image} alt="product image" /></div>
        )
      })}
      </div>

      <div className="slider-btn">
      {slideIndex !== props.dataSlider.length && <SliderBtn moveSlide={nextSlide} direction={"next"} />}
      {slideIndex !== 1 && <SliderBtn moveSlide={prevSlide} direction={"prev"} />}
      </div>

      <div className="slider-dots">
        <ul>
          {props.dataSlider.map((item, index) => (
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
