import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addShippingMethod } from "../../store/action";
import InputBox from "../commons/Input";

export default function ShipingMethod(props) {

  const dispatch = useDispatch();

  const [shippingDataShow, setShippingDataShow] = useState(true);
  const [shippingMethod, setShippingMethod] = useState(props.shippingData.value && props.shippingData.value);

  const shippingRef = useRef();

  const dataShow = (event) => {
    event.preventDefault();
    setShippingDataShow(!props.shippingData.notification);
  }

  const onEdit = (event) => {
    dataShow(event);
    props.onEdit(event);
    if (props.shippingData.data !== undefined) {
      setTimeout(() => {
        const methodContainer = document.querySelector(".shipping-method__shipping-form");
        const input = methodContainer.querySelectorAll("input");
        input.forEach((element) => {
          if (element.id === props.shippingData.data) {
            element.checked = true;
          }
        });
      }, 1)
    }
  }

  const onSubmit = (event) => {
    event.preventDefault();
    const methodContainer = document.querySelector(".shipping-method__shipping-form");
    const input = methodContainer.querySelectorAll("input");
    let method = "";
    input.forEach(element => {
      if(element.checked){
        method = element.value
      }
    });
    props.onShipingSave(event); dataShow(event)
    setShippingMethod(method);
    dispatch(addShippingMethod(method));
  }

  return (
    <div className="shipping-method">
      {shippingDataShow && <h5 className={!props.shippingData.notification ? "make-indicate" : ""}>2. Shipping Method</h5>}
      {props.shippingData.notification && <form className="shipping-method__shipping-form" onSubmit={(event) => {onSubmit(event)}}> <div className="shipping-method__shipping-info">
        <InputBox ref={shippingRef} className = "wrapper radio-input" input= {{type: "radio", id: "standard", name: "shipingMethod", value: "standard", defaultChecked: "checked"}} boldTxt = "Standard Shipping" label = {`(4-8 business days via USPS) FREE`}/>
        <InputBox ref={shippingRef} className = "wrapper radio-input" input= {{type: "radio", id: "express", name: "shipingMethod", value: "express", defaultChecked: false}} boldTxt = "Express Delivery" label = " (2-5 business days via USPS) $17.95"/>
        <InputBox ref={shippingRef} className = "wrapper radio-input" input= {{type: "radio", id: "nextDay", name: "shipingMethod", value: "nextDay"}} boldTxt = "Next Day Delivery" label = " (Next business days via FedEx) $53.61"/>
      </div>
      <button className="btn-secondry"><span>CONTINUE TO PAYMENT</span></button></form>}
      {!shippingDataShow && <div className="shipping-method__shipping-data">
        <div className="shipping-method__shipping-data--title">
        <h6>Shipping Method</h6>
          <p onClick={event => onEdit(event)}>Edit</p>
        </div>
        <div className="shipping-method__shipping-data--info">
          <ul>
            <li>{
                shippingMethod === "standard" && "Standard Shipping" || shippingMethod === "express" && "Express Delivery" || shippingMethod === "nextDay" && "Next Day Delivery"
              }</li>
            <li>{
                shippingMethod === "standard" && "Est. delivery in 4 - 8 business days FREE" || shippingMethod === "express" && "Est. delivery in 2-5 business days via USPS" || shippingMethod === "nextDay" && "Est. delivery in Next business days via FedEx"
              }</li>
          </ul>
        </div>
        </div>}
    </div>
  )
}
