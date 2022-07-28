import React, { useState} from "react";
import { Country}  from 'country-state-city';
import Select from "react-select";


const CountrySelector = React.forwardRef((props, ref) => {
  const [value, setValue] = useState('')
  const countries = Country.getAllCountries();

  const changeHandler = event => {
    setValue(event.target.value);
    let value = event.target.value
    props.getCountryCode(value)
  }

  // <Select countries={countries} value={value} onChange={changeHandler} />
  return (
    <div className= "select-country">
      <p>Country</p>
      {/* <Select options={countries} value={value}/> */}
      <select ref={ref} onChange={(event) => {props.onChange(); changeHandler(event)}} value = {value}>
        <option>Select Country</option>
        {countries.map((item, index) => {
          return <option key={index} value ={item.isoCode} name = {item.name}>{item.name}</option>
        })}
      </select>
    </div>
  )
})

export default CountrySelector