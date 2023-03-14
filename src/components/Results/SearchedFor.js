import getParameterText from "../../util/getParameterText";
import { consts } from "../../consts";

const SearchedFor = ({ searchParameters }) => {
  let translatedParameters = [];
  for (const parameter in searchParameters) {
    if (searchParameters[parameter].enabled) {
      // text type
      if (
        searchParameters[parameter].type === consts.TEXT_TYPE &&
        searchParameters[parameter].value
      ) {
        translatedParameters.push(
          `${getParameterText(parameter)} "${
            searchParameters[parameter].value
          }"`
        );
      }

      // number range type
      if (searchParameters[parameter].type === consts.NUMBER_RANGE_TYPE) {
        if (
          searchParameters[parameter].operator !== consts.RANGE &&
          searchParameters[parameter].primaryValue
        ) {
          translatedParameters.push(
            `${getParameterText(parameter)}
            ${searchParameters[parameter].operator} 
            ${Number(
              searchParameters[parameter].primaryValue
            ).toLocaleString()}`
          );
        } else if (
          searchParameters[parameter].operator === consts.RANGE &&
          searchParameters[parameter].primaryValue &&
          searchParameters[parameter].secondaryValue
        ) {
          translatedParameters.push(
            `${getParameterText(parameter)}
                Between
                ${Number(
                  searchParameters[parameter].primaryValue
                ).toLocaleString()}
                &
                ${Number(
                  searchParameters[parameter].secondaryValue
                ).toLocaleString()}`
          );
        }
      }

      // date range type
      if (searchParameters[parameter].type === consts.DATE_RANGE_TYPE) {
        if (searchParameters[parameter].operator !== consts.RANGE) {
          translatedParameters.push(
            `${getParameterText(parameter)}
            ${searchParameters[parameter].operator} 
            ${searchParameters[parameter].primaryValue.year}-${
              searchParameters[parameter].primaryValue.month
            }-${searchParameters[parameter].primaryValue.day}`
          );
        } else {
          translatedParameters.push(
            `${getParameterText(parameter)}
                Between
                ${searchParameters[parameter].primaryValue.year}-${
              searchParameters[parameter].primaryValue.month
            }-${searchParameters[parameter].primaryValue.day}
                &
                ${searchParameters[parameter].secondaryValue.year}-${
              searchParameters[parameter].secondaryValue.month
            }-${searchParameters[parameter].secondaryValue.day}`
          );
        }
      }

      // null type
      if (searchParameters[parameter].type === consts.NULL_TYPE) {
        translatedParameters.push(getParameterText(parameter));
      }

      // within sections type
      if (searchParameters[parameter].type === consts.SECTIONS_TYPE) {
        let sections = [];
        if (searchParameters.withinCategories.popular) {
          sections.push(consts.POPULAR_TEXT);
        }
        if (searchParameters.withinCategories.originals) {
          sections.push(consts.ORIGINALS_TEXT);
        }
        if (searchParameters.withinCategories.unclassified) {
          sections.push(consts.UNCLASSIFIED_TEXT);
        }
        if (searchParameters.withinCategories.themes) {
          sections.push(consts.THEMES_TEXT);
        }
        if (searchParameters.withinCategories.classical) {
          sections.push(consts.CLASSICAL_TEXT);
        }
        if (searchParameters.withinCategories.misc) {
          sections.push(consts.MISC_TEXT);
        }
        if (sections.length > 0) {
          translatedParameters.push(
            `${getParameterText(parameter)} ${sections.join(", ")}`
          );
        }
      }
    }
  }

  return (
    <div>
      <div>
        Searched for <strong>{searchParameters.searchType}s</strong>:
      </div>
      {/* <div>{JSON.stringify(searchParameters)}</div> */}
      <div>
        {translatedParameters.map((param, index) => (
          <div key={index} className="searched-for-param">
            - {param}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchedFor;
