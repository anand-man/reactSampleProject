import React, { useState, useMemo, useEffect } from "react";
import Select from "react-select";
import {State }  from 'country-state-city';


const StateSelector = React.forwardRef((props, ref) => {
  const [value, setValue] = useState('')
  let countryCode = props.countryCode.toString();
  const states = State.getStatesOfCountry(countryCode)

  const changeHandler = value => {
    setValue(value)
  }

  return (
    <div className= "select-state">
      <p>State</p>
      <select ref={ref} onChange={(event) => {props.onChange(); changeHandler(event)}}>
      <option>Select State</option>
        {states.map((item, index) => {
          return <option key={index} value ={item.name}>{item.name}</option>
        })}
      </select>
    </div>
  )
})

export default StateSelector