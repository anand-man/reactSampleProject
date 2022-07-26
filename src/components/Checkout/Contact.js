import React, { useRef, useState } from "react";
import CountrySelector from "../commons/CountrySelector";
import Input from "../commons/Input";
import StateSelector from "../commons/StateSelector";

export default function Contact(props) {

const [countryCode, setCountryCode] = useState("");

const [contactInfo, setContactInfo] = useState({
  email: "",
  contactNo: "",
  country: "",
  firstName: "", 
  secondName: "",
  streetAdd1: "",
  streetAdd2: "",
  city: "",
  state: "",
  zipCode: ""
});

const emailRef = useRef("");
const phoneRef = useRef("");
const countryRef = useRef("");
const firstNameRef = useRef("");
const secondNameRef = useRef("");
const streetAdd1Ref = useRef("");
const streetAdd2Ref = useRef("");
const cityRef = useRef("");
const stateRef = useRef("");
const zipCodeRef = useRef("");

const getCountryCode = (code) => {
  setCountryCode(code);
}

const onChangeHandler = (event) => {
  
  setContactInfo(prevState => ({
    ...prevState,
    email: emailRef.current.value,
    contactNo: phoneRef.current.value,
    country: countryRef.current.value,
    firstName: firstNameRef.current.value, 
    secondName: secondNameRef.current.value,
    streetAdd1: streetAdd1Ref.current.value,
    streetAdd2: streetAdd2Ref.current.value,
    city: cityRef.current.value,
    state: stateRef.current.value,
    zipCode: zipCodeRef.current.value 
  }))
}

const submitContact = (event) => {
  event.preventDefault();
  console.log(contactInfo);
}


  return (
    <div className="contact-info">
      <h5>Contact information</h5>
      <p>We’ll use these details to keep you informed on your delivery.</p>
      <form onSubmit={submitContact}>
      <div className="contact-info__email-phone">
        <Input ref = {emailRef} className = "wrapper" input= {{type: "email", id: "email", placeholder: "abc@xyz.com", name: "email", value: contactInfo.email, onChange: onChangeHandler}} label = "Email"/>
        <Input ref= {phoneRef} className = "wrapper" input= {{type: "number", id: "phone", placeholder: "(222) 222-2222", value: contactInfo.contactNo, onChange: onChangeHandler }} label = "Phone Number"/>
      </div>
      <div className="contact-info__shiping-info">
        <h5>1. Shipping Information</h5>
        <CountrySelector ref= {countryRef} getCountryCode = {getCountryCode} value = {contactInfo.country} onChange =  {onChangeHandler}/>
        <Input ref= {firstNameRef} className = "wrapper" input= {{type: "text", id: "firstName", value: contactInfo.firstName, onChange: onChangeHandler}} label = "First Name"/>
        <Input ref= {secondNameRef} className = "wrapper" input= {{type: "text", id: "lastName", value: contactInfo.secondName, onChange: onChangeHandler}} label = "Last Name"/>
        <Input ref= {streetAdd1Ref} className = "wrapper" input= {{type: "text", id: "streetAdd", value: contactInfo.streetAdd1, onChange: onChangeHandler}} label = "Street Address"/>
        <Input ref= {streetAdd2Ref} className = "wrapper" input= {{type: "text", id: "streetAdd2", value: contactInfo.streetAdd2, onChange: onChangeHandler}} label = "Street Address 2"/>
        <Input ref= {cityRef} className = "wrapper" input= {{type: "text", id: "city", value: contactInfo.city, onChange: onChangeHandler}} label = "City"/>
        <StateSelector ref = {stateRef} countryCode = {countryCode} value= {contactInfo.state} onChange= {onChangeHandler}/>
        <Input ref= {zipCodeRef} className = "wrapper zip" input= {{type: "number", id: "zipCode", value: contactInfo.zipCode, onChange: onChangeHandler}} label = "ZIP"/>
      </div>
      <button className="btn-secondry"><span>CONTINUE TO SHIPPING METHOD</span></button>
      </form>
    </div>
    // value = {contactInfo.country} onChange =  {onChangeHandler}
    // value= {contactInfo.state} onChange= {onChangeHandler}
  )
}
