import React from "react";

const InputBox = React.forwardRef((props, ref) =>{
  const supportTxt = props.supportTxt && <span>{props.supportTxt}</span>;
  const boldTxt = props.boldTxt && <span>{props.boldTxt}</span>;
  return (
    <div className={props.className}>
      <input  ref={ref} {...props.input} />
      <label htmlFor = {props.input.id}>{boldTxt} {props.label} {supportTxt}</label>
    </div>
  )
});

export default InputBox;