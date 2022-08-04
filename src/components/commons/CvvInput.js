import React from 'react';

const CvvInput = React.forwardRef((props, ref) => {

  const cvvRef = ref;

  const handleChange = () => {
    const cardValue = cvvRef.current.value
      .replace(/\D/g, '')
      .match(/(\d{0,3})/);
    cvvRef.current.value = !cardValue[2]
      ? cardValue[1]
      : `${cardValue[1]}/${cardValue[2]}`;
    const numbers = cvvRef.current.value.replace(/(\D)/g, '');
    props.getValue(numbers);
  };

  return (
    <>
    <input {...props.input} ref={ref} onChange={handleChange} />
    <label htmlFor = {props.input.id}>{props.label}</label>
    </>
      
  );
});

export default CvvInput;