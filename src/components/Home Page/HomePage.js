import React from "react";
import HeroBanner from "../Hero Banner/HeroBanner";
import ColFourCards from "./ColFourCards";
import ColTwoContentFullWidthImg from "./ColTwoContentFullWidthImg";
import ColTwoContentImg from "./ColTwoContentImg";

export default function HomePage() {
  return (
    <>
      <HeroBanner/>
      <ColFourCards/>
      <ColTwoContentImg/>
      <ColTwoContentFullWidthImg/>
    </>
  )
}
