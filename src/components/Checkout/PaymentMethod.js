import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addPaymentInfo } from "../../store/action";
import Input from "../commons/Input";

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
      cardNum: "",
      expDate: "",
      cvv: "",
    },
    payAddress: ""
  });

  const nameOnCardRed = useRef();
  const cardNumRef = useRef();
  const expDateRef = useRef();
  const cvvRef = useRef();

  const onCreditCard = () => {
    setPayMethod(prevState => ({
      ...prevState,
      payPal: false,
      creditCard: true
    }));
  }

  const onPayPal = () => {
    setPayMethod(prevState => ({
      ...prevState,
      creditCard: false,
      payPal: true
    }))
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

  const onCardNumHandler = (event) => {
    setPayInfo(prevState => ({
      ...prevState,
      info: {
        ...payInfo.info,
        cardNum: cardNumRef.current.value
      }
    }));
  }

  const onCardNameHandler = (event) => {
    setPayInfo(prevState => ({
      ...prevState,
      info: {
        ...payInfo.info,
        nameOnCard: nameOnCardRed.current.value
      }
    }));
  }

  const onExpDateHandler = (event) => {
    setPayInfo(prevState => ({
      ...prevState,
      info: {
        ...payInfo.info,
        expDate: expDateRef.current.value
      }
    }));
  }

  const onCvvHandler = (event) => {
    setPayInfo(prevState => ({
      ...prevState,
      info: {
        ...payInfo.info,
        cvv: cvvRef.current.value
      }
    }));
  }

  const onSubmitPayment = (event) => {
    event.preventDefault();
    const paymentContainer = document.querySelector(".payment-form");
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


  return (
    <div className="payment-method">
       {props.notification && <><h5>3. Payment Information</h5>
      <form className="payment-form" onSubmit={(event) => (onSubmitPayment(event))}>
      <div className={payMethod.creditCard ? "payment-method__option credit-card": "payment-method__option"}>
      <div className="payment-method__radio-input">
        <Input className = "wrapper radio-input" input= {{type: "radio", id: "creditCard", className: "payment-option", name: "paymentMethod", defaultChecked: "checked", onChange: onCreditCard}} label = "Credit Card"/>
      </div>
      {payMethod.creditCard && <> <div className="payment-method__text-input">
        <Input ref={nameOnCardRed} className= "wrapper" input = {{type: "text", id: "nameOnCard", value: payInfo.nameOnCard, onChange: onCardNameHandler }} label = "Name on Card"/>
        <Input ref = {cardNumRef} className= "wrapper" input = {{type: "text", id: "creditCardNo", value: payInfo.cardNum, onChange: onCardNumHandler }} label = "Credit Card Number"/>
        <Input ref={expDateRef} className= "wrapper payment-method--card-exp" input = {{type: "text", id: "expData", value: payInfo.expDate, onChange: onExpDateHandler }} label = "Expiration Date"/>
        <div className="payment-method--card-cvv">
        <div className="wrapper">
          <input ref={cvvRef} type = "number" value={payInfo.cvv}  id="cardCvv" onChange={onCvvHandler}/>
          <label htmlFor="cardCvv">CVV</label>
        </div>
        <span>?</span>
        </div>
        </div>
        <div className="payment-method__check-input">
          <Input className= "wrapper check-input" input = {{type: "checkbox", id: "addVerification", value:"sameAsShipping", onChange: onPayAddCheck }} label = "Billing address same as shipping address"/>
        </div></>}
      </div>
      <div className={payMethod.payPal ? "payment-method__option pay-pal": "payment-method__option"}>
      <div className="payment-method__radio-input">
        <Input className = "wrapper radio-input" input= {{type: "radio", id: "payPal", className: "payment-option", name: "paymentMethod", onChange: onPayPal}} label = "PayPal"/>
      </div>
      {payMethod.payPal && <div className="pay-pal-detail">
        <p>This services is available soon!</p>
      </div>}
      </div>
      <button className="btn-secondry"><span>CONTINUE TO REVIEW ORDER</span></button>
      </form></>}
      {payMethod.status && <div className="payment-method__payment-data"></div>}
    </div> 
  )
}
