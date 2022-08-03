import React from "react";
import Container from "../commons/Container";

export default function HeroBanner() {
  return (
    <section className="hero-banner">
      <div className="hero-banner__column-wrapper">
        <div className="hero-banner__content-wrapper">
          <div className="hero-banner__content__middle-wrapper">
            <div className="hero-banner__content--inner-wrapper">
            <h1 className="heading-1">Shop the new Signature Collection</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lobortis mattis aliquam faucibus purus.</p>
            <div className="hero-banner__content-wrapper--btn-wrapper">
              <a className="btn-primary" href="#"><span>SHOP NOW</span></a>
            </div>
            </div>
          </div>
        </div>
        <div className="hero-banner__img-wrapper">
          <img src={process.env.PUBLIC_URL + `/Images/hero-banner-image.png`} alt="lady running on stone" />
        </div>
      </div>
    </section>
  )
}
