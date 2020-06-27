const round = (value, floatDigits) => {
  return (
    Math.round(parseFloat(value) * Math.pow(10, floatDigits)) /
    Math.pow(10, floatDigits)
  );
};

export default round;
