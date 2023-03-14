import { consts } from "../consts";

const getApiUrl = () => {
  const currentUrl = new URL(window.location.href);
  return currentUrl.origin.includes(consts.PROD_BASE_URL)
    ? consts.PROD_SEARCH_URL
    : consts.DEV_SEARCH_URL;
};

export default getApiUrl;
