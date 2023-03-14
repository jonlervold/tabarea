const handleTextInputChange = (state, setState, object, property, newValue) => {
  let newState = {
    ...state,
    [object]: {
      ...state[object],
      [property]: newValue,
    },
  };
  setState(newState);
};
export default handleTextInputChange;
