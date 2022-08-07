import React from "react";
import { useNavigate } from "react-router";
import Container from "../commons/Container";

export default function ColFourCards() {
  const navigate = useNavigate();
  return (
    <section className="col-four-grid">
      <Container>
        <div className="col-four-grid__column-wrapper">
          <article className="col-four-grid__card" onClick={() => navigate("/products")}>
            <div className="col-four-grid--card-img">
              <img src={process.env.PUBLIC_URL + `/Images/tshirt-white.jpg`} alt="tshirt white"></img>
            </div>
            <div className="col-four-grid--card-content">
              <h4>Shop Women</h4>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </article>
          <article className="col-four-grid__card" onClick={() => navigate("/products")}>
            <div className="col-four-grid--card-img">
              <img src={process.env.PUBLIC_URL + `/Images/mens-jacket.jpg`} alt="mens jacket"></img>
            </div>
            <div className="col-four-grid--card-content">
              <h4>Shop Men</h4>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </article>
          <article className="col-four-grid__card" onClick={() => navigate("/products")}>
            <div className="col-four-grid--card-img">
              <img src={process.env.PUBLIC_URL + `/Images/ring-white.jpg`} alt="white color ring"></img>
            </div>
            <div className="col-four-grid--card-content">
              <h4>Jewellery</h4>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </article>
          <article className="col-four-grid__card" onClick={() => navigate("/products")}>
            <div className="col-four-grid--card-img">
              <img src={process.env.PUBLIC_URL + `/Images/led-tv.jpg`} alt="led curved tv"></img>
            </div>
            <div className="col-four-grid--card-content">
              <h4>Electronics</h4>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </article>
        </div>
      </Container>
    </section>
  )
}
