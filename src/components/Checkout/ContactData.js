import React from "react";
import { useSelector } from "react-redux";

export default function ContactData(props) {

const store = useSelector(state => state.checkoutData.checkoutData.contactInfo);
const {email, contactNo, firstName, lastName, streetAdd1, streetAdd2, city, countryName, state, zipCode} = store ? store : "";

return (
    <div className="contact-info__contact-data">
        <div className="contact-info__contact-data--title">
          <h6>Shipping Information</h6>
          <p onClick={event => props.onEdit(event)}>Edit</p>
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
            <li>{countryName}</li>
          </ul>
        </div>
        </div>
  )
}
