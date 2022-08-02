import React, { useState} from "react";
import { Country}  from 'country-state-city';


const CountrySelector = React.forwardRef((props, ref) => {
  const [counValue, setCounValue] = useState({
    code: props.value,
    name: props.name
  })
  const countries = Country.getAllCountries();

  const changeHandler = event => {
    let value = event.target.value;
    const singleCountry = countries.filter(item => { return item.isoCode === value});
    const countryData = {
      code: value,
      name: singleCountry.length > 0 ? singleCountry[0].name : "Country"
    }
    setCounValue(countryData);
    props.getCountryCode(countryData)
  }

  return (
    <div className= "select-country">
      <p>Country</p>
      <span>carrot</span>
      <select ref={ref} onChange={(event) => {changeHandler(event);props.onChange(event);}} value = {counValue.code} countryname = {counValue.name ? counValue.name : "country"}>
        <option>Select Country</option>
        {countries.map((item, index) => {
          return <option key={index} value ={item.isoCode} name = {item.name}>{item.name}</option>
        })}
      </select>
    </div>
  )
})

export default CountrySelector