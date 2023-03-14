const zeroPadSingleDigits = (i) => {
  let stringInt = String(i);
  if (stringInt.length === 1) {
    stringInt = `0${stringInt}`;
  }
  return stringInt;
};

export default zeroPadSingleDigits;
