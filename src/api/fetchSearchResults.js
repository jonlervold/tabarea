import axios from "axios";
import getApiUrl from "../util/getApiUrl";
import { consts } from "../consts";

const fetchSearchResults = async (searchObject) => {
  const apiUrl = getApiUrl();
  try {
    const resultJson = await axios.post(
      `${apiUrl}/${searchObject[consts.SEARCH_TYPE]}_search.php`,
      searchObject,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return resultJson;
  } catch (error) {
    return error;
  }
};

export default fetchSearchResults;
