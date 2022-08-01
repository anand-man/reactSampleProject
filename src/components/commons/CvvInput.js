import React, { useState, useEffect, useRef } from 'react';

const CvvInput = (props) => {

  const [card, setCard] = useState();
  const cvvRef = useRef();

  const handleChange = () => {
    const cardValue = cvvRef.current.value
      .replace(/\D/g, '')
      .match(/(\d{0,3})/);
    cvvRef.current.value = !cardValue[2]
      ? cardValue[1]
      : `${cardValue[1]}/${cardValue[2]}`;
    const numbers = cvvRef.current.value.replace(/(\D)/g, '');
    setCard(numbers);
    props.getValue(numbers);
  };

  useEffect(() => {
    handleChange();
  }, []);

  return (
    <>
    <input {...props.input} ref={cvvRef} onChange={handleChange} />
    <label htmlFor = {props.input.id}>{props.label}</label>
    </>
      
  );
};

export default CvvInput;