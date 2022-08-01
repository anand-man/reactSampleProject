import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "../commons/Container";
import Pricing from "../Kart/Pricing";
import Contact from "./Contact";
import PaymentMethod from "./PaymentMethod";
import ShipingMethod from "./ShipingMethod";

export default function CheckoutHandler() {

  
  const store = useSelector(state => state.checkoutData);

  console.log(store.checkoutData);

  const [checkoutAttr, setCheckoutAttr] = useState({
    contactInfo: true,
    shipingMethod: false,
    paymentInfo: false
  });

  const onContactSave = (event) => {
    event.preventDefault();
    setCheckoutAttr((prevState) => ({
      ...prevState,
      contactInfo: false,
      shipingMethod: true
    }));
  }

  const editContact= (event) => {
    event.preventDefault();
    setCheckoutAttr((prevState) => ({
      ...prevState,
      contactInfo: true,
    }));
  }

  const editShipping= (event) => {
    event.preventDefault();
    setCheckoutAttr((prevState) => ({
      ...prevState,
      shipingMethod: true,
    }));
  }

  const editPayment= (event) => {
    event.preventDefault();
    setCheckoutAttr((prevState) => ({
      ...prevState,
      paymentInfo: true,
    }));
  }

  const onShipingSave = (event) => {
    event.preventDefault();
    setCheckoutAttr((prevState) => ({
      ...prevState,
      shipingMethod: false,
      paymentInfo: true
    }));
  }

  const onPaymentSave = () => {
    setCheckoutAttr((prevState) => ({
      ...prevState,
      paymentInfo: false
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
          <Contact onEdit = {editContact} onContactSave = {onContactSave} notification = {checkoutAttr.contactInfo} conDatas = {store.checkoutData.contactInfo} />
          </div>
          <div className="product-checkout--shiping-method">
            {!checkoutAttr.shipingMethod && <h5 className={checkoutAttr.shipingMethod ? "hide" : ""}>2. Shipping Method</h5>}
            <ShipingMethod onEdit = {editShipping} onShipingSave = {onShipingSave} shippingData = {{notification: checkoutAttr.shipingMethod, data: store.checkoutData.shipingMethod}}/>
          </div>
          <div className="product-checkout--payment-info">
            {!checkoutAttr.paymentInfo && <h5>3. Payment Information</h5>}
            <PaymentMethod onEdit = {editPayment} notification = {checkoutAttr.paymentInfo} onPaymentSave = {onPaymentSave} payData = {store.checkoutData.paymentInfo}/>
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
