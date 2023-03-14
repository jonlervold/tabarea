import TabSearchCheckboxes from "./TabSearchCheckboxes";
import TabSearchParameters from "./TabSearchParameters";

const TabSearch = ({ tabSearchState, setTabSearchState }) => {
  return (
    <div className={"search-method-wrapper"}>
      <TabSearchCheckboxes
        tabSearchState={tabSearchState}
        setTabSearchState={setTabSearchState}
      />
      <TabSearchParameters
        tabSearchState={tabSearchState}
        setTabSearchState={setTabSearchState}
      />
    </div>
  );
};

export default TabSearch;
