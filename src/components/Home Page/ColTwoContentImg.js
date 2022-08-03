import React from "react";
import Container from "../commons/Container";

export default function ColTwoContentImg() {
  return (
    <section className="col-two-content-img">
      <Container>
        <div className="col-two-content-img__column-wrapper">
          <div className="col-two-content-img--content-wrapper">
            <h2 className="heading-1">Take off in the new Signature Legging</h2>
            <h3>Lorem Ipsum Dolor Tempor</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor labore dolore magna lorem ipsum dolor sit dolore magna.</p>
            <div className="col-two-content-img__content-wrapper--btn-wrapper">
              <a className="btn-secondry" href="#"><span>SHOP COLLECTION</span></a>
              <a className="btn-primary" href="#"><span>SHOP NOW</span></a>
            </div>
          </div>
          <div className="col-two-content-img--img-wrapper">
            <img src={process.env.PUBLIC_URL + `/Images/man-lean-to-wall.png`} alt="man lean to wall" />
          </div>
        </div>
      </Container>
    </section>
  )
}
