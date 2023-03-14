const handleDropdownChange = (state, setState, object, property, newValue) => {
  let newState = {
    ...state,
    [object]: {
      ...state[object],
      [property]: newValue,
    },
  };
  setState(newState);
};
export default handleDropdownChange;
