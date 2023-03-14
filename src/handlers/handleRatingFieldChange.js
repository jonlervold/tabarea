const handleRatingFieldChange = (
  state,
  setState,
  object,
  property,
  newValue
) => {
  // strip anything but integers and "."
  const newValueStripped = newValue.replace(/[^0-9.]/g, "");
  // only allow values between 1.00 and 4.00 with two decimal places
  const isValueValid = /^([1-3](\.\d{0,2})?|4(\.0{0,2})?)$/;
  if (isValueValid.test(newValueStripped) || newValueStripped === "") {
    let newState = {
      ...state,
      [object]: {
        ...state[object],
        [property]: newValueStripped,
      },
    };
    setState(newState);
  }
};
export default handleRatingFieldChange;
