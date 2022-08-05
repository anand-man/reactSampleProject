import React from "react";
import { useNavigate } from "react-router";
import Container from "../commons/Container";

export default function ColFourCards() {
  const navigate = useNavigate();
  return (
    <section className="col-four-card">
      <Container>
        <div className="col-four-card__column-wrapper">
          <div className="col-four-card--card" onClick={() => navigate("/products")}>
            <div className="col-four-card--card-img">
              <img src={process.env.PUBLIC_URL + `/Images/tshirt-white.jpg`} alt="tshirt white"></img>
            </div>
            <div className="col-four-card--card-content">
              <h4>Shop Women</h4>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>
          <div className="col-four-card--card" onClick={() => navigate("/products")}>
            <div className="col-four-card--card-img">
              <img src={process.env.PUBLIC_URL + `/Images/mens-jacket.jpg`} alt="mens jacket"></img>
            </div>
            <div className="col-four-card--card-content">
              <h4>Shop Men</h4>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>
          <div className="col-four-card--card" onClick={() => navigate("/products")}>
            <div className="col-four-card--card-img">
              <img src={process.env.PUBLIC_URL + `/Images/ring-white.jpg`} alt="white color ring"></img>
            </div>
            <div className="col-four-card--card-content">
              <h4>Jewellery</h4>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>
          <div className="col-four-card--card" onClick={() => navigate("/products")}>
            <div className="col-four-card--card-img">
              <img src={process.env.PUBLIC_URL + `/Images/led-tv.jpg`} alt="led curved tv"></img>
            </div>
            <div className="col-four-card--card-content">
              <h4>Electronics</h4>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
