import React, { useState } from 'react';

const DateInput = React.forwardRef((props, ref) => {
  const[state, setState] =  useState(false);
  const inputDate = ref;

  const handleChange = () => {

    const dateValue = inputDate.current.value
      .replace(/\D/g, '')
      .match(/(\d{0,2})(\d{0,2})/);

      if(dateValue[1] <= 31 && Number(dateValue[1]) !== 0 && Number(dateValue[2]) !== 0){
        setState(false);
        inputDate.current.value.replace(/(\D)/g, '/');
        inputDate.current.value = !dateValue[2]
      ? dateValue[1]
      : `${dateValue[1]}/${dateValue[2]}`;
      }
      else{
        setState(true);
        return
      }
    const numbers = inputDate.current.value.replace(/(\D)/g, '/');
    props.getValue(numbers);

  };

  return (
    <>
    {state && <i>Please enter valid date.</i>}
    <input className= {state ? "invilid" : ""} {...props.input} ref={ref} onChange={handleChange} />
    <label htmlFor = {props.input.id}>{props.label}</label>
    </>
      
  );
});

export default DateInput;