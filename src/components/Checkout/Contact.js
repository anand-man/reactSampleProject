import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCusAddress } from "../../store/action";
import CountrySelector from "../commons/CountrySelector";
import InputBox from "../commons/Input";
import StateSelector from "../commons/StateSelector";
import PhoneInput from "react-phone-number-input/input";
import { Country}  from 'country-state-city';

export default function Contact(props) {

const [countryCodeName, setCountryCodeName] = useState({
  code:"",
  name: ""
});

const dispatch = useDispatch();

const [contactDataShow, setcontactDataShow] = useState(false);

const {email, contactNo, firstName, lastName, streetAdd1, streetAdd2, city, country, state, zipCode} = props.conDatas ? props.conDatas : "";

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
  setContactInfo(prevState => ({
    ...prevState,
    countryCode: event.target.value,
    countryName: countryCodeName.name
  }));
}
const stateChangeHandler = (event) => {
  setContactInfo(prevState => ({
    ...prevState,
    state: event.target.value
  }));
}

const firstNameRef = useRef("");
const secondNameRef = useRef("");
const streetAdd1Ref = useRef("");
const streetAdd2Ref = useRef("");
const cityRef = useRef("");
const zipCodeRef = useRef("");

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
    countryName: countryCodeName.name 
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
  const checkoutData = {
    customerId: "cus01",
    contactInfo,
  }
  dispatch(addCusAddress(checkoutData));
  dataShow();
}
// console.log(props.notification.contactInfo || props.notification.contactEdit)
  return (
    <div className="contact-info">
      {props.notification.contactInfo  && <><h5>Contact information</h5>
      <p>We’ll use these details to keep you informed on your delivery.</p>
      <form className="contact-info--contact-form" onSubmit={(event) => (submitContact(event), props.onContactSave(event))}>
      <div className="contact-info__email-phone">
        <InputBox  className = "wrapper" input= {{type: "email", id: "email", placeholder: "abc@xyz.com", name: "email", value: contactInfo.email, onChange: onEmailChange}} label = "Email"/>
        <div className="wrapper">
        <PhoneInput
          placeholder="(222) 222-2222"
          value={contactInfo.contactNo}
          onChange={onPhoneChange} id= "phone"/>
          <label htmlFor="phone">Phone Number</label>
        </div>
        
      </div>
      <div className="contact-info__shiping-info">
        <h5>1. Shipping Information</h5>
        <CountrySelector getCountryCode = {getCountryCode} value = {contactInfo.countryCode} countryname = {contactInfo.countryName} onChange =  {countryChangeHandler}/>
        <InputBox ref= {firstNameRef} className = "wrapper" input= {{type: "text", id: "firstName", value: contactInfo.firstName, onChange: onChangeHandler}} label = "First Name"/>
        <InputBox ref= {secondNameRef} className = "wrapper" input= {{type: "text", id: "lastName", value: contactInfo.lastName, onChange: onChangeHandler}} label = "Last Name"/>
        <InputBox ref= {streetAdd1Ref} className = "wrapper" input= {{type: "text", id: "streetAdd", value: contactInfo.streetAdd1, onChange: onChangeHandler}} label = "Street Address"/>
        <InputBox ref= {streetAdd2Ref} className = "wrapper" input= {{type: "text", id: "streetAdd2", value: contactInfo.streetAdd2, onChange: onChangeHandler}} label = "Street Address 2" supportTxt = "Optional"/>
        <InputBox ref= {cityRef} className = "wrapper" input= {{type: "text", id: "city", value: contactInfo.city, onChange: onChangeHandler}} label = "City"/>
        <StateSelector countryCode = {countryCodeName.code} value= {contactInfo.state} onChange= {stateChangeHandler}/>
        <InputBox ref= {zipCodeRef} className = "wrapper zip" input= {{type: "number", id: "zipCode", value: contactInfo.zipCode, onChange: onChangeHandler}} label = "ZIP"/>
      </div>
      <button className="btn-secondry"><span>{props.notification.contactEdit ? "CONTINUE TO REVIEW ORDER" : "CONTINUE TO SHIPPING METHOD"}</span></button>
      </form> </>}
      {contactDataShow && <div className="contact-info__contact-data">
        <div className="contact-info__contact-data--title">
          <h6>Shipping Information</h6>
          <p onClick={event => onEdit(event)}>Edit</p>
        </div>
        <div className="contact-info__contact-data--email-phone">
          <ul>
            <li>{email}</li>
            <li>{contactNo}</li>
          </ul>
        </div>
        <div className="contact-info__contact-data--name-address">
          <ul>
            <li>{firstName} {lastName}</li>
            <li>{streetAdd1} {streetAdd2}</li>
            <li>{city}, {state} {zipCode}</li>
            <li>{countryCodeName.name}</li>
          </ul>
        </div>
        </div>}
    </div>
  )
}
