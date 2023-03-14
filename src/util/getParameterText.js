import { consts } from "../consts";

const getParameterText = (parameter) => {
  let textVersion;
  for (const constKey in consts) {
    if (consts[constKey] === parameter) {
      textVersion = `${constKey}_TEXT`;
      return consts[textVersion];
    }
  }
};

export default getParameterText;
