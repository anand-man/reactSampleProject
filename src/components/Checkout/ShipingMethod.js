import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addShippingMethod } from "../../store/action";
import Input from "../commons/Input";

export default function ShipingMethod(props) {

  const dispatch = useDispatch();

  const [shippingDataShow, setShippingDataShow] = useState(true);
  const [shippingMethod, setShippingMethod] = useState("");

  const shippingRef = useRef();

  const dataShow = (event) => {
    event.preventDefault();
    setShippingDataShow(!props.shippingData.notification);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    const methodContainer = document.querySelector(".shipping");
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
    console.log(method)
  }

  return (
    <div className="shipping-method">
      {/* {!props.shippingData.notification && <h5>2. Shipping Method</h5>} */}
      {props.shippingData.notification && <form className="shipping" onSubmit={(event) => {onSubmit(event)}}> <div className="shipping-method__shipping-info">
        <h5>2. Shipping Method</h5>
        <Input ref={shippingRef} className = "wrapper radio-input" input= {{type: "radio", id: "standard", name: "shipingMethod", value: "standard", defaultChecked: "checked"}} label = "Standard Shipping (4-8 business days via USPS) FREE"/>
        <Input ref={shippingRef} className = "wrapper radio-input" input= {{type: "radio", id: "express", name: "shipingMethod", value: "express"}} label = "Express Delivery (2-5 business days via USPS) $17.95"/>
        <Input ref={shippingRef} className = "wrapper radio-input" input= {{type: "radio", id: "nextDay", name: "shipingMethod", value: "nextDay"}} label = "Next Day Delivery (Next business days via FedEx) $53.61"/>
      </div>
      <button className="btn-secondry"><span>CONTINUE TO PAYMENT</span></button></form>}
      {!shippingDataShow && <div className="shipping-method__shipping-data"></div>}
    </div>
  )
}
