import { consts } from "../consts";

const handleUrlParamSearch = (state, setState, object, searchValue) => {
  let newState = {
    ...state,
    [object]: {
      ...state[object],
      [consts.ENABLED]: true,
      [consts.VALUE]: searchValue,
    },
  };
  setState(newState);
};
export default handleUrlParamSearch;
