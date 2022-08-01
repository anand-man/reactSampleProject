import React, { useState, useEffect, useRef } from 'react';

const CardInput = (props) => {
  const [card, setCard] = useState();
  const inputCard = useRef();

  const handleChange = () => {
    const cardValue = inputCard.current.value
      .replace(/\D/g, '')
      .match(/(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})/);
    inputCard.current.value = !cardValue[2]? cardValue[1]: `${cardValue[1]} ${cardValue[2]}${`${cardValue[3] ? ` ${cardValue[3]}` : ''}`}${`${cardValue[4] ? ` ${cardValue[4]}` : ''}`}`;
    const numbers = inputCard.current.value.replace(/(\D)/g, '');
    setCard(numbers);
    props.getValue(numbers);
  };

  useEffect(() => {
    handleChange();
  }, []);

  return (
    <>
      <input {...props.input} ref={inputCard} onChange={handleChange} />
      <label htmlFor = {props.input.id}>{props.label}</label>
    </>
  );
};

export default CardInput;