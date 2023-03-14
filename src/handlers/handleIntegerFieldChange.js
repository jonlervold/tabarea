const handleIntegerFieldChange = (
  state,
  setState,
  object,
  property,
  newValue
) => {
  let newState = {
    ...state,
    [object]: {
      ...state[object],
      [property]: newValue.replace(/[^0-9]/g, ""),
    },
  };
  setState(newState);
};
export default handleIntegerFieldChange;
