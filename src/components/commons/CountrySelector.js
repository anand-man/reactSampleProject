import React, { useState} from "react";
import { Country}  from 'country-state-city';


const CountrySelector = React.forwardRef((props, ref) => {
  const [value, setValue] = useState('')
  const countries = Country.getAllCountries();

  const changeHandler = event => {
    setValue(event);
    let value = event.target.value
    props.getCountryCode(value)
    console.log(event.target)
  }

  // <Select countries={countries} value={value} onChange={changeHandler} />
  return (
    <div className= "select-country">
      <p>Country</p>
      <select ref={ref} onChange={(event) => {props.onChange(); changeHandler(event)}}>
        <option>Select Country</option>
        {countries.map((item, index) => {
          return <option key={index} value ={item.isoCode} name = {item.name}>{item.name}</option>
        })}
      </select>
    </div>
  )
})

export default CountrySelector