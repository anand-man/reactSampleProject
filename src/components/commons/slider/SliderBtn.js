import React from "react";

export default function SliderBtn({ direction, moveSlide, classActive }) {
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? `next ${classActive}` : `prev ${classActive}`}
    >{direction === "next" ? "next" : "prev"}
    </button>
  );
}