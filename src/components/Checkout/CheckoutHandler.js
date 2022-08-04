import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Container from "../commons/Container";
import Pricing from "../Kart/Pricing";
import Contact from "./Contact";
import OrderedItem from "./OrderedItem";
import PaymentMethod from "./PaymentMethod";
import ShipingMethod from "./ShipingMethod";

export default function CheckoutHandler() {
  
  const store = useSelector(state => state.checkoutData);
  const navigate = useNavigate();

  const [checkoutAttr, setCheckoutAttr] = useState({
    contactInfo: true,
    shipingMethod: false,
    paymentInfo: false,
    contactEdit: false,
    shippingEdit: false,
    paymentEdit: false,
    orderItems: false
  });

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

  const onContactSave = (event) => {
    event.preventDefault();
    setCheckoutAttr((prevState) => ({
      ...prevState,
      contactInfo: false,
      shipingMethod: true
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

  const reviewOrder = (event) =>{
    event.preventDefault();
    setCheckoutAttr({
      contactInfo: false,
      shipingMethod: false,
      paymentInfo: false,
      contactEdit: false,
      shippingEdit: false,
      paymentEdit: false,
      orderItems: true
    })
  }

  return (
    <section className="product-checkout">
      <Container>
      <h1 className="heading-1">Checkout</h1>
      <div className="product-checkout__column-wrapper">
        <div className="col-seven">
          <h2>Guest Checkout</h2>
          <div className="product-checkout--contact">
          <Contact onEdit = {editContact} onContactSave = {onContactSave} notification = {checkoutAttr} conDatas = {store.checkoutData.contactInfo}/>
          </div>
          <div className="product-checkout--shiping-method">
            <ShipingMethod onEdit = {editShipping} onShipingSave = {onShipingSave} shippingData = {{notification: checkoutAttr.shipingMethod, data: store.checkoutData.shipingMethod}}/>
          </div>

          <div className="product-checkout--payment-info">
            <PaymentMethod onEdit = {editPayment} notification = {checkoutAttr.paymentInfo} onPaymentSave = {onPaymentSave} payData = {store.checkoutData.paymentInfo} reviewOrder = {reviewOrder} test= {checkoutAttr}/>
          </div>

          <OrderedItem className = "product-checkout" notification = {checkoutAttr.orderItems}/>

          {checkoutAttr.orderItems && <div className="product-checkout__order-placed">
            <div className="kart-btn"  onClick={() => {navigate("/order-placed")}}><span>PLACE ORDER</span></div>
          </div>} 
        </div>
        <div className="col-three">
          <div className = "product-checkout--signin">
            <h5>Sign in for Express Checkout</h5>
            <a href="#" className="btn-secondry"><span>SIGN IN</span></a>
          </div>
          <Pricing/>
        </div>
      </div>
      </Container>
    </section>
  )
}
