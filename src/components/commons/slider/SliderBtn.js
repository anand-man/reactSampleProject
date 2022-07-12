import React from "react";

export default function SliderBtn({ direction, moveSlide }) {
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "next" : "prev"}
    >{direction === "next" ? "next" : "prev"}
    </button>
  );
}