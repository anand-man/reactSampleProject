import React from "react";

const CardInput = React.forwardRef((props, ref) => {

  const inputCard = ref;

  const handleChange = () => {
    const cardValue = inputCard.current.value
      .replace(/\D/g, '')
      .match(/(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})/);
    inputCard.current.value = !cardValue[2]? cardValue[1]: `${cardValue[1]} ${cardValue[2]}${`${cardValue[3] ? ` ${cardValue[3]}` : ''}`}${`${cardValue[4] ? ` ${cardValue[4]}` : ''}`}`;
    const numbers = inputCard.current.value.replace(/(\D)/g, '');
    props.getValue(numbers);
  };

  return (
    <>
      <input {...props.input} ref={ref} onChange={handleChange} />
      <label htmlFor = {props.input.id}>{props.label}</label>
    </>
  );
});

export default CardInput;