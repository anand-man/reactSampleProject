import React, { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPaymentInfo } from "../../store/action";
import DateInput from "../commons/DateInput";
import InputBox from "../commons/Input";
import CardInput from "../commons/CardInput";
import CvvInput from "../commons/CvvInput";

export default function PaymentMethod(props) {

  const dispatch = useDispatch();

  const [payMethod, setPayMethod] = useState({
    creditCard: true,
    payPal: false,
    status: false
  });

  const [payInfo, setPayInfo] = useState({
    info: {
      nameOnCard: "",
      cardNum: [],
      expDate: "",
      cvv: "",
      payType: "Credit Card",
    },
    payAddress: ""
  });

  const nameOnCardRed = useRef();

  const onCreditCard = () => {
    setPayMethod(prevState => ({
      ...prevState,
      payPal: false,
      creditCard: true
    }));
    setPayInfo(prevState => ({
      ...prevState,
      info: {
        ...payInfo.info,
        payType: "Credit Card"
      }
    }));
  }

  const onPayPal = () => {
    setPayMethod(prevState => ({
      ...prevState,
      creditCard: false,
      payPal: true
    }));
    setPayInfo(prevState => ({
      ...prevState,
      info: {
        ...payInfo.info,
        payType: "Pay Pal"
      }
    }));
  }

  const dataShow = () => {
    setPayMethod(prevState => ({
      ...prevState,
      status: !payMethod.status,
    }));
    }
  
  const onPayAddCheck = (event) => {
    const input = document.getElementById("addVerification");
    if (input.checked){
      setPayInfo(prevState => ({
        ...prevState,
        payAddress: input.value
      }))
    }
  }


  const getCardNum = (value) => {
    setPayInfo(prevState => ({
      ...prevState,
      info: {
        ...payInfo.info,
        cardNum: value
      }
    }));
  }



  const cardNameHandler = (event) => {
    setPayInfo(prevState => ({
      ...prevState,
      info: {
        ...payInfo.info,
        nameOnCard: nameOnCardRed.current.value
      }
    }));
  }

  const getExpDate = (value) => {
    setPayInfo(prevState => ({
      ...prevState,
      info: {
        ...payInfo.info,
        expDate: value
      }
    }));
  }


  const getCvv = (value) => {
    setPayInfo(prevState => ({
      ...prevState,
      info: {
        ...payInfo.info,
        cvv: value
      }
    }));
  }

  const onEdit = (event) => {
    dataShow();
    props.onEdit(event);
  }

  const onSubmitPayment = (event) => {
    event.preventDefault();
    const paymentContainer = document.querySelector(".payment-method__payment-form");
    const payment = paymentContainer.querySelectorAll(".payment-option");
    let method = "";
    payment.forEach((element) => {
      if(element.checked){
        method = element.id;
      }
    })
    props.onPaymentSave(event);
    dataShow();
    dispatch(addPaymentInfo(payInfo))
  }

  const {payType, cardNum} = props.payData ? props.payData.info : "";

  return (
    <div className="payment-method">
      {!payMethod.status && <h5 className={!props.notification ? "make-indicate" : ""}>3. Payment Information</h5>}
       {props.notification && <>
      <form className="payment-method__payment-form" onSubmit={(event) => (onSubmitPayment(event), props.reviewOrder(event))}>
      <div className={payMethod.creditCard ? "payment-method__option credit-card": "payment-method__option"}>
      <div className="payment-method__radio-input">
        <InputBox className = "wrapper radio-input" input= {{type: "radio", id: "creditCard", className: "payment-option", name: "paymentMethod", defaultChecked: "checked", onChange: onCreditCard}} label = "Credit Card"/>
      </div>

      {payMethod.creditCard && <> <div className="payment-method__text-input">
        <InputBox ref={nameOnCardRed} className= "wrapper" input = {{type: "text", id: "nameOnCard", value: payInfo.nameOnCard, onChange: cardNameHandler }} label = "Name on Card"/>

        <div className="wrapper">
          <CardInput input = {{type: "text", id: "creditCardNo", maxLength: 19}} getValue=  {getCardNum} label = "Credit Card Number"/>
        </div>

        <div className="wrapper payment-method--card-exp">
          <DateInput input = {{type: "text", id: "expData", }} getValue=  {getExpDate} label = "Expiration Date"/>
        </div>

        <div className="payment-method--card-cvv">
        <div className="wrapper">
          <CvvInput input = {{type: "text", id: "cardCvv", }} getValue=  {getCvv} label = "CVV"/>
        </div>
        <span>?</span>
        </div>
        </div>
        <div className="payment-method__check-input">
          <InputBox className= "wrapper check-input" input = {{type: "checkbox", id: "addVerification", value:"sameAsShipping", onChange: onPayAddCheck }} label = "Billing address same as shipping address"/>
        </div></>}
      </div>
      <div className={payMethod.payPal ? "payment-method__option pay-pal": "payment-method__option"}>
      <div className="payment-method__radio-input">
        <InputBox className = "wrapper radio-input" input= {{type: "radio", id: "payPal", className: "payment-option", name: "paymentMethod", onChange: onPayPal}} label = "PayPal"/>
      </div>
      {payMethod.payPal && <div className="pay-pal-detail">
        <p>This services is available soon!</p>
      </div>}
      </div>
      <button className="btn-secondry"><span>CONTINUE TO REVIEW ORDER</span></button>

      </form></>}
      {payMethod.status && <div className="payment-method__payment-data">
      <div className="payment-method__payment-data--title">
        <h6>Payment Information</h6>
          <p onClick={event => onEdit(event)}>Edit</p>
        </div>
        <div className="payment-method__payment-data--pay-info">
          <ul>
            <li>{payType}</li>
            <li>Visa ending in {cardNum.slice(12, 16)}</li>
          </ul>
        </div>
        </div>}
    </div> 
  )
}
