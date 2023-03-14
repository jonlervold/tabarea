const handleCheckboxChange = (state, setState, object, property) => {
  let newState = {
    ...state,
    [object]: {
      ...state[object],
      [property]: !state[object][property],
    },
  };
  setState(newState);
};
export default handleCheckboxChange;
