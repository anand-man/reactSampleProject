import React, { useState} from "react";
import {State }  from 'country-state-city';


const StateSelector = React.forwardRef((props, ref) => {
  const [value, setValue] = useState(props.value)
  let countryCode = props.countryCode && props.countryCode.toString();
  const states = State.getStatesOfCountry(countryCode)

  const changeHandler = event => {
    setValue(event.target.value);
  }

  return (
    <div className= "select-state">
      <p>State</p>
      <span>carrot</span>
      <select ref={ref} onChange={(event) => {props.onChange(event); changeHandler(event)}} value = {value}>
      <option>Select State</option>
        {states.map((item, index) => {
          return <option key={index} value ={item.name}>{item.name}</option>
        })}
      </select>
    </div>
  )
})

export default StateSelector