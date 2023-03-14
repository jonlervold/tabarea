import isDefaultDescKey from "./isDefaultDescKey";
import isStringSortKey from "./isStringSortKey";
import { consts } from "../consts";

const generateSortedSearch = (
  searchResults,
  searchType,
  clickedSortKey,
  reverse = false
) => {
  const searchResultsCopy = [...searchResults];
  let newSortSearchResults = [];

  // alphabetize main column first so if clicked column has results with same value, those are sub-alphabetized
  let subAlphabetizeSortKey;
  switch (searchType) {
    case consts.TAB:
      subAlphabetizeSortKey = consts.SORT_KEY_TAB;
      break;
    case consts.FOLDER:
      subAlphabetizeSortKey = consts.SORT_KEY_FOLDER;
      break;
    case consts.USER:
      subAlphabetizeSortKey = consts.SORT_KEY_USER;
      break;
    default:
      break;
  }
  newSortSearchResults = searchResultsCopy.sort((a, b) => {
    return a[subAlphabetizeSortKey].localeCompare(b[subAlphabetizeSortKey]);
  });

  // for keys that should be descending on first click,
  // achieve the result by reversing the reversal prop
  if (isDefaultDescKey(clickedSortKey)) {
    reverse = !reverse;
  }

  // sort by the key the user clicked to get final result
  if (isStringSortKey(clickedSortKey)) {
    newSortSearchResults = newSortSearchResults.sort((a, b) => {
      const aSortKey = a[clickedSortKey];
      const bSortKey = b[clickedSortKey];
      if (aSortKey === null && bSortKey === null) {
        return 0;
      } else if (aSortKey === null) {
        return !reverse ? 1 : -1;
      } else if (bSortKey === null) {
        return !reverse ? -1 : 1;
      } else {
        return !reverse
          ? aSortKey.localeCompare(bSortKey)
          : bSortKey.localeCompare(aSortKey);
      }
    });
  } else {
    newSortSearchResults = searchResultsCopy.sort((a, b) => {
      return !reverse
        ? a[clickedSortKey] - b[clickedSortKey]
        : b[clickedSortKey] - a[clickedSortKey];
    });
  }

  return newSortSearchResults;
};

export default generateSortedSearch;
