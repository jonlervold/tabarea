import RatingStarImg from "./RatingStarImg";
import { consts } from "../../consts";

const FolderResults = ({
  searchResults,
  sortSearch,
  page,
  showDescriptions,
}) => {
  const firstResultOnPage = (page - 1) * 100;
  const lastResultOnPage = page * 100;
  return (
    <table className="results-table">
      <tbody>
        <tr className="results-table-header">
          <td
            className="left"
            onClick={() => sortSearch("parentName", consts.FOLDER)}
          >
            Parent Folder Name
          </td>
          <td
            className="left"
            onClick={() => sortSearch("folderName", consts.FOLDER)}
          >
            Folder Name
          </td>
          <td
            className="left"
            onClick={() => sortSearch("ownerUsername", consts.FOLDER)}
          >
            Folder Owner
          </td>
          <td
            className="center"
            onClick={() => sortSearch("folderDateCreated", consts.FOLDER)}
          >
            Date Created
          </td>
          <td
            className="center"
            onClick={() => sortSearch("oldestTab", consts.FOLDER)}
          >
            Oldest Tab Date
          </td>
          <td
            className="center"
            onClick={() => sortSearch("newestTab", consts.FOLDER)}
          >
            Newest Tab Date
          </td>
          <td
            className="right"
            onClick={() => sortSearch("totalTabs", consts.FOLDER)}
          >
            Total Tabs
          </td>
          <td
            className="right"
            onClick={() => sortSearch("totalUsersUploaded", consts.FOLDER)}
          >
            Total Uploaders
          </td>
          <td
            className="right"
            onClick={() => sortSearch("totalDownloads", consts.FOLDER)}
          >
            Total Downloads
          </td>
          <td
            className="right"
            onClick={() => sortSearch("totalSize", consts.FOLDER)}
          >
            Total Size
          </td>
          <td
            className="right"
            onClick={() => sortSearch("totalRatings", consts.FOLDER)}
          >
            Total Ratings
          </td>
          <td
            colSpan={2}
            className="center"
            onClick={() => sortSearch("ratingAverage", consts.FOLDER)}
          >
            Rating Average
          </td>
          {showDescriptions && (
            <td
              className="right description-column"
              onClick={() => sortSearch("description", consts.FOLDER)}
            >
              Folder Description
            </td>
          )}
        </tr>
        {searchResults
          .slice(firstResultOnPage, lastResultOnPage)
          .map((folder) => (
            <tr key={folder.folderId}>
              <td className="left">
                {folder.parentName ? (
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={`https://tabarea.net/tabs/list.php@f=${folder.parentId}.html`}
                  >
                    {folder.parentName}
                  </a>
                ) : (
                  "Root"
                )}
              </td>
              <td className="left">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={`https://tabarea.net/tabs/list.php@f=${folder.folderId}.html`}
                >
                  {folder.folderName}
                </a>
              </td>
              <td className="left">
                {folder.ownerUsername ? (
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={`https://tabarea.net/tabs/user.php@u=${folder.ownerId}.html`}
                  >
                    {folder.ownerUsername}
                  </a>
                ) : (
                  "-"
                )}
              </td>
              <td className="center">{folder.folderDateCreated}</td>
              <td className="center">
                {folder.oldestTab ? folder.oldestTab : "-"}
              </td>
              <td className="center">
                {folder.newestTab ? folder.newestTab : "-"}
              </td>
              <td className="right">
                {Number(folder.totalTabs).toLocaleString()}
              </td>
              <td className="right">
                {Number(folder.totalUsersUploaded).toLocaleString()}
              </td>
              <td className="right">
                {Number(folder.totalDownloads).toLocaleString()}
              </td>
              <td className="right">
                {Number(folder.totalSize).toLocaleString()}
              </td>
              <td className="right">
                {Number(folder.totalRatings).toLocaleString()}
              </td>
              <td className="center">
                {folder.ratingAverage ? (
                  <div className="results-table-rating-average">
                    ({folder.ratingAverage})
                  </div>
                ) : (
                  "-"
                )}
              </td>
              <td className="center">
                {folder.ratingAverage ? (
                  <div>
                    {<RatingStarImg ratingAverage={folder.ratingAverage} />}
                  </div>
                ) : (
                  "-"
                )}
              </td>
              {showDescriptions && (
                <td className="right">
                  {folder.description ? folder.description : "-"}
                </td>
              )}
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default FolderResults;
