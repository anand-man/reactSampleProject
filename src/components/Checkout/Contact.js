import React, { useRef, useState } from "react";
import { useDispatch} from "react-redux";
import { addCusAddress } from "../../store/action";
import CountrySelector from "../commons/CountrySelector";
import InputBox from "../commons/Input";
import StateSelector from "../commons/StateSelector";
import PhoneInput from "react-phone-number-input/input";
import ContactData from "./ContactData";

export default function Contact(props) {

const [countryCodeName, setCountryCodeName] = useState({
  code:"",
  name: ""
});

const dispatch = useDispatch();

const [contactDataShow, setcontactDataShow] = useState(false);

const {email, contactNo, firstName, lastName, streetAdd1, streetAdd2, city, countryName, country, state, zipCode} = props.conDatas ? props.conDatas : "";

const [contactInfo, setContactInfo] = useState({
  email: email ? email : "",
  contactNo: contactNo ? contactNo : "",
  countryCode: country ? country : "",
  firstName: firstName ? firstName : "", 
  lastName: lastName ? lastName : "",
  streetAdd1: streetAdd1 ? streetAdd1 : "",
  streetAdd2: streetAdd2 ? streetAdd2 : "",
  city: city ? city : "",
  state: state ? state : "",
  zipCode: zipCode ? zipCode : "",
  countryName: countryName ? countryName : ""
});

const onEmailChange = (event) => {
  setContactInfo(prevState => ({
    ...prevState,
    email: event.target.value
  }));
}
const onPhoneChange = (value) => {
  setContactInfo(prevState => ({
    ...prevState,
    contactNo: value
  }));
}

const countryChangeHandler = (event) => {
  event.preventDefault();
  setContactInfo(prevState => ({
    ...prevState,
    countryCode: event.target.value,
    ...countryRef.current.attributes.countryName
  }));
}
const stateChangeHandler = (event) => {
  setContactInfo(prevState => ({
    ...prevState,
    state: event.target.value
  }));
}

const emailRef = useRef("");
const phoneRef = useRef("");
const firstNameRef = useRef("");
const secondNameRef = useRef("");
const streetAdd1Ref = useRef("");
const streetAdd2Ref = useRef("");
const cityRef = useRef("");
const zipCodeRef = useRef("");
const countryRef = useRef("");
const stateRef = useRef("");

const getCountryCode = (code) => {
  setCountryCodeName({...code});
}

const onChangeHandler = () => {
  setContactInfo(prevState => ({
    ...prevState,
    firstName: firstNameRef.current.value, 
    lastName: secondNameRef.current.value,
    streetAdd1: streetAdd1Ref.current.value,
    streetAdd2: streetAdd2Ref.current.value,
    city: cityRef.current.value,
    zipCode: zipCodeRef.current.value,
  }))
}

const dataShow = () => {
  setcontactDataShow(!contactDataShow);
} 

const onEdit = (event) => {
  dataShow();
  props.onEdit(event);
}

const submitContact = (event) => {
  event.preventDefault();
  if(emailRef.current.value === ""){
    alert("Please enter email!");
    emailRef.current.focus();
    return;
  }
  if(phoneRef.current.value === ""){
    alert("Please enter phone number!");
    phoneRef.current.focus();
    return false;
  }
  if(countryRef.current.value === "Select Country"){
    alert("Please select your country!");
    countryRef.current.focus();
    return false;
  }
  if(firstNameRef.current.value === ""){
    alert("Please enter first name!");
    firstNameRef.current.focus();
    return false;
  }
  if(secondNameRef.current.value === ""){
    alert("Please enter second name!");
    secondNameRef.current.focus();
    return false;
  }
  if(streetAdd1Ref.current.value === ""){
    alert("Please enter street address!");
    streetAdd1Ref.current.focus();
    return false;
  }
  if(cityRef.current.value === ""){
    alert("Please enter city!");
    cityRef.current.focus();
    return false;
  }
  if(stateRef.current.value === "Select State"){
    alert("Please select state!");
    stateRef.current.focus();
    return false;
  }
  if(zipCodeRef.current.value === ""){
    alert("Please enter zip code!");
    zipCodeRef.current.focus();
    return false;
  }
  const checkoutData = {
    customerId: "cus02",
    contactInfo: {
      ...contactInfo,
      countryName: countryRef.current.attributes.countryName.value,
      state: stateRef.current.value,
    }
  }
  dispatch(addCusAddress(checkoutData));
  props.onContactSave(event);
  dataShow();
}

  return (
    <div className="contact-info">
      {props.notification.contactInfo  && <><h5>Contact information</h5>
      <p>We’ll use these details to keep you informed on your delivery.</p>
      <form className="contact-info--contact-form" onSubmit={(event) => submitContact(event)}>
      <div className="contact-info__email-phone">
        <InputBox ref={emailRef}  className = "wrapper" input= {{type: "email", id: "email", placeholder: "abc@xyz.com", name: "email", value: contactInfo.email, onChange: onEmailChange}} label = "Email"/>
        <div className="wrapper">
        <PhoneInput
          ref = {phoneRef}
          placeholder="(222) 222-2222"
          value={contactInfo.contactNo}
          onChange={onPhoneChange} id= "phone"/>
          <label htmlFor="phone">Phone Number</label>
        </div>
        
      </div>
      <div className="contact-info__shiping-info">
        <h5>1. Shipping Information</h5>
        <CountrySelector ref={countryRef} getCountryCode = {getCountryCode} value = {countryCodeName.code} countryname = {contactInfo.countryName} onChange =  {countryChangeHandler}/>
        <InputBox ref= {firstNameRef} className = "wrapper" input= {{type: "text", id: "firstName", value: contactInfo.firstName, onChange: onChangeHandler}} label = "First Name"/>
        <InputBox ref= {secondNameRef} className = "wrapper" input= {{type: "text", id: "lastName", value: contactInfo.lastName, onChange: onChangeHandler}} label = "Last Name"/>
        <InputBox ref= {streetAdd1Ref} className = "wrapper" input= {{type: "text", id: "streetAdd", value: contactInfo.streetAdd1, onChange: onChangeHandler}} label = "Street Address"/>
        <InputBox ref= {streetAdd2Ref} className = "wrapper" input= {{type: "text", id: "streetAdd2", value: contactInfo.streetAdd2, onChange: onChangeHandler}} label = "Street Address 2" supportTxt = "Optional"/>
        <InputBox ref= {cityRef} className = "wrapper" input= {{type: "text", id: "city", value: contactInfo.city, onChange: onChangeHandler}} label = "City"/>
        <StateSelector ref={stateRef} countryCode = {countryCodeName.code} value= {contactInfo.state} onChange= {stateChangeHandler}/>
        <InputBox ref= {zipCodeRef} className = "wrapper zip" input= {{type: "number", id: "zipCode", value: contactInfo.zipCode, onChange: onChangeHandler}} label = "ZIP"/>
      </div>
      <button className="btn-secondry"><span>{props.notification.contactEdit ? "CONTINUE TO REVIEW ORDER" : "CONTINUE TO SHIPPING METHOD"}</span></button>
      </form> </>}
      {contactDataShow && <ContactData conDatas = {props.conDatas} onEdit = {onEdit} countryName = {countryCodeName}/>}
    </div>
  )
}
