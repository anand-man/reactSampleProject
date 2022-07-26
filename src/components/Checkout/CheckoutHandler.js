import React, { useState } from "react";
import Container from "../commons/Container";
import Pricing from "../Kart/Pricing";
import Contact from "./Contact";
import ShipingMethod from "./ShipingMethod";

export default function CheckoutHandler() {

  const [checkoutAttr, setCheckoutAttr] = useState({
    contactInfo: true,
    shipingMethod: false,
    paymentInfo: false
  });

  const onContactSave = () => {
    setCheckoutAttr((prevState) => ({
      ...prevState,
      contactInfo: false,
      shipingMethod: true
    }));
  }

  const onShipingSave = () => {
    setCheckoutAttr((prevState) => ({
      ...prevState,
      shipingMethod: false,
      paymentInfo: true
    }));
  }

  const onPaymentSave = () => {
    setCheckoutAttr((prevState) => ({
      ...prevState,
      shipingMethod: false
    }));
  }

  return (
    <section className="product-checkout">
      <Container>
      <h1 className="heading-1">Checkout</h1>
      <div className="product-checkout__column-wrapper">
        <div className="col-seven">
          <h2>Guest Checkout</h2>
          <div className="product-checkout--contact">
          {checkoutAttr.contactInfo && <Contact onContactSave = {onContactSave}/>}
          </div>
          <div className="product-checkout--shiping-method">
            {!checkoutAttr.shipingMethod && <h5>2. Shipping Method</h5>}
            {checkoutAttr.shipingMethod && <><ShipingMethod onShipingSave = {onShipingSave}/>
            <button className="btn-secondry" onClick={onShipingSave}><span>CONTINUE TO PAYMENT</span></button></>}
          </div>
          <div className="product-checkout--payment-info">
            <h5>3. Payment Information</h5>
          </div>
        </div>
        <div className="col-three">
          <Pricing/>
        </div>
      </div>
      </Container>
    </section>
  )
}
