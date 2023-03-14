import FolderSearchCheckboxes from "./FolderSearchCheckboxes";
import FolderSearchParameters from "./FolderSearchParameters";

const FolderSearch = ({ folderSearchState, setFolderSearchState }) => {
  return (
    <div className={"search-method-wrapper"}>
      <FolderSearchCheckboxes
        folderSearchState={folderSearchState}
        setFolderSearchState={setFolderSearchState}
      />
      <FolderSearchParameters
        folderSearchState={folderSearchState}
        setFolderSearchState={setFolderSearchState}
      />
    </div>
  );
};

export default FolderSearch;
