import React, { useState, useEffect, useRef } from 'react';

const DateInput = (props) => {

  const [card, setCard] = useState();
  const inputDate = useRef();

  const handleChange = () => {
    const cardValue = inputDate.current.value
      .replace(/\D/g, '')
      .match(/(\d{0,2})(\d{0,2})/);
    inputDate.current.value = !cardValue[2]
      ? cardValue[1]
      : `${cardValue[1]}/${cardValue[2]}`;
    const numbers = inputDate.current.value.replace(/(\D)/g, '');
    setCard(numbers);
    props.getValue(numbers);
  };

  useEffect(() => {
    handleChange();
  }, []);

  return (
    <>
    <input {...props.input} ref={inputDate} onChange={handleChange} />
    <label htmlFor = {props.input.id}>{props.label}</label>
    </>
      
  );
};

export default DateInput;