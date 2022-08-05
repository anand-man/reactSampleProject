import React from "react";
import Container from "../commons/Container";

export default function ColTwoContentFullWidthImg() {
  return (
    <section className="col-two-content-full-with-img">
      <Container>
        <div className="col-two-content-full-with-img__column-wrapper">
          <div className="col-two-content-full-with-img--img-wrapper">
            <img src={process.env.PUBLIC_URL + `/Images/man-standing-on-rock.png`} alt="man standing on rock" />
          </div>
          <div className="col-two-content-full-with-img--content-wrapper">
            <div className="col-two-content-full-with-img---content-inner">
              <h2 className="heading-1">Conquer your next adventure</h2>
              <h3>Lorem Ipsum Dolor Tempor</h3>
              <div className="col-two-content-full-with-img__content-wrapper--btn-wrapper">
                <a className="btn-secondry" href="#"><span>SHOP DEVICES</span></a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
