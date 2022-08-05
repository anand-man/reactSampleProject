import React, { useRef, useState} from "react";
import { useDispatch } from "react-redux";
import { addPaymentInfo } from "../../store/action";
import DateInput from "../commons/DateInput";
import InputBox from "../commons/Input";
import CardInput from "../commons/CardInput";
import CvvInput from "../commons/CvvInput";

export default function PaymentMethod(props) {

  const dispatch = useDispatch();
  const {payType, cardNum, nameOnCard} = props.payData ? props.payData.info : "";
  const notification = props.notification;
  const [payMethod, setPayMethod] = useState({
    creditCard: true,
    payPal: false,
    status: false
  });
  const [payInfo, setPayInfo] = useState({
    info: {
      nameOnCard: nameOnCard,
      cardNum: "",
      expDate: "",
      cvv: "",
      payType: "Credit Card",
    },
    payAddress: ""
  });

  const nameOnCardRef = useRef("");
  const cardNoRef = useRef("");
  const expDateRef = useRef("");
  const cvvRef = useRef("");

  const creditCardHandler = () => {
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
        nameOnCard: nameOnCardRef.current.value
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
    if(nameOnCardRef.current.value === ""){
      alert("Please enter your name!");
      nameOnCardRef.current.focus();
      return;
    }
    if(cardNoRef.current.value.length < 19){
      cardNoRef.current.focus();
      alert("Please enter 16 digit card number!");
      return;
    }
    if(expDateRef.current.value === ""){
      expDateRef.current.focus();
      alert("Please enter expiry date");
      return;
    }
    if(cvvRef.current.value === ""){
      cvvRef.current.focus();
      alert("Please enter card cvv");
      return;
    }

    props.onPaymentSave(event);
    dataShow();
    props.reviewOrder(event);
    dispatch(addPaymentInfo(payInfo));
  }

  return (
    <div className="payment-method">
      {!payMethod.status && <h5 className={!notification ? "make-indicate" : ""}>3. Payment Information</h5>}
       {notification && <>
      <form className="payment-method__payment-form" onSubmit={(event) => (onSubmitPayment(event))}>
      <div className={payMethod.creditCard ? "payment-method__option credit-card": "payment-method__option"}>
      <div className="payment-method__radio-input">
        <InputBox className = "wrapper radio-input" input= {{type: "radio", id: "creditCard", className: "payment-option", name: "paymentMethod", defaultChecked: "checked", onChange: creditCardHandler}} label = "Credit Card"/>
      </div>

      {payMethod.creditCard && <> <div className="payment-method__text-input">
        <InputBox ref={nameOnCardRef} className= "wrapper" input = {{type: "text", id: "nameOnCard", value: nameOnCard, onChange: cardNameHandler }} label = "Name on Card"/>

        <div className="wrapper">
          <CardInput ref = {cardNoRef} input = {{type: "text", id: "creditCardNo", maxLength: 19}} getValue=  {getCardNum} label = "Credit Card Number"/>
        </div>

        <div className="wrapper payment-method--card-exp">
          <DateInput ref={expDateRef} input = {{type: "text", id: "expData", }} getValue=  {getExpDate} label = "Expiration Date"/>
        </div>

        <div className="payment-method--card-cvv">
        <div className="wrapper">
          <CvvInput ref ={cvvRef} input = {{type: "text", id: "cardCvv", }} getValue=  {getCvv} label = "CVV"/>
        </div>
        <span>?</span>
        </div>
        </div>
        <div className="payment-method__check-input">
          <InputBox className= "wrapper check-input" input = {{type: "checkbox", id: "addVerification", value:"sameAsShipping", defaultChecked: "checked", onChange: onPayAddCheck }} label = "Billing address same as shipping address"/>
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
