import React from "react";
import { useSelector } from "react-redux";
import Container from "../commons/Container";

export default function OrderPlaced(props) {
  const store = useSelector(state => state.checkoutData.checkoutData);
  const {email, contactNo, firstName, lastName, streetAdd1, streetAdd2, city, countryName, state, zipCode} =store.contactInfo ?store.contactInfo : "";
  return (
    <section className="order-placed">
      <Container>
        <h1 className="heading-1">Order Successful!</h1>
        <div className="order-placed__column-wrapper">
          <div className="col-seven">
            <h3>Order Number #1700834</h3>
            <div className="contact-info__contact-data--title">
          <h6>Shipping Information</h6>
        </div>
        <div className="contact-info__contact-data--email-phone">
          <ul>
            <li>{email}</li>
            <li>{contactNo}</li>
          </ul>
        </div>
        <div className="contact-info__contact-data--name-address">
          <ul>
            <li>{firstName} {lastName}</li>
            <li>{streetAdd1} {streetAdd2}</li>
            <li>{city}, {state} {zipCode}</li>
            <li>{countryName}</li>
          </ul>
        </div>
          </div>
          <div className="col-three"></div>
        </div>
      </Container>
    </section>
  )
}
