import React from "react";

const Input = React.forwardRef((props, ref) =>{
  return (
    <div className={props.className}>
      <input  ref={ref} {...props.input} />
      <label htmlFor = {props.input.id}>{props.label}</label>
    </div>
  )
});

export default Input;