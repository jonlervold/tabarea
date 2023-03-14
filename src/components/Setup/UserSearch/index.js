import UserSearchCheckboxes from "./UserSearchCheckboxes";
import UserSearchParameters from "./UserSearchParameters";

const UserSearch = ({ userSearchState, setUserSearchState }) => {
  return (
    <div className={"search-method-wrapper"}>
      <UserSearchCheckboxes
        userSearchState={userSearchState}
        setUserSearchState={setUserSearchState}
      />
      <UserSearchParameters
        userSearchState={userSearchState}
        setUserSearchState={setUserSearchState}
      />
    </div>
  );
};

export default UserSearch;
