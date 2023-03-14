import RatingStarImg from "./RatingStarImg";
import { consts } from "../../consts";

const TabResults = ({ searchResults, sortSearch, page }) => {
  const firstResultOnPage = (page - 1) * 100;
  const lastResultOnPage = page * 100;
  return (
    <table className="results-table">
      <tbody>
        <tr className="results-table-header">
          <td
            className="left"
            onClick={() => sortSearch("folderName", consts.TAB)}
          >
            Folder Name
          </td>
          <td
            className="left"
            onClick={() => sortSearch("tabName", consts.TAB)}
          >
            Tab Name
          </td>
          <td
            className="left"
            onClick={() => sortSearch("uploaderUsername", consts.TAB)}
          >
            Uploader
          </td>
          <td
            className="center"
            onClick={() => sortSearch("uploadDate", consts.TAB)}
          >
            Date Uploaded
          </td>
          <td
            className="right"
            onClick={() => sortSearch("downloadCount", consts.TAB)}
          >
            Downloads
          </td>
          <td className="right" onClick={() => sortSearch("size", consts.TAB)}>
            Size
          </td>
          <td
            className="right"
            onClick={() => sortSearch("updateCount", consts.TAB)}
          >
            Update Count
          </td>
          <td
            className="right"
            onClick={() => sortSearch("ratingCount", consts.TAB)}
          >
            Rating Count
          </td>
          <td
            colSpan={2}
            className="center"
            onClick={() => sortSearch("ratingAverage", consts.TAB)}
          >
            Rating Average
          </td>
        </tr>
        {searchResults.slice(firstResultOnPage, lastResultOnPage).map((tab) => (
          <tr key={tab.tabId}>
            <td className="left">
              {
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={`https://tabarea.net/tabs/list.php@f=${tab.folderId}.html`}
                >
                  {tab.folderName}
                </a>
              }
            </td>
            <td className="left">
              <a
                href={`https://tabarea.net/tabs/get.php/${tab.tabId}/${tab.updateCount}/${tab.tabName}.tbt`}
              >
                {tab.tabName}
              </a>
            </td>
            <td className="left">
              {tab.uploaderUsername ? (
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={`https://tabarea.net/tabs/user.php@u=${tab.uploaderId}.html`}
                >
                  {tab.uploaderUsername}
                </a>
              ) : (
                "-"
              )}
            </td>
            <td className="center">{tab.uploadDate}</td>
            <td className="right">
              {Number(tab.downloadCount).toLocaleString()}
            </td>
            <td className="right">{Number(tab.size).toLocaleString()}</td>
            <td className="right">
              {Number(tab.updateCount).toLocaleString()}
            </td>
            <td className="right">
              {Number(tab.ratingCount).toLocaleString()}
            </td>
            <td className="center">
              {tab.ratingAverage ? (
                <div className="results-table-rating-average">
                  ({tab.ratingAverage})
                </div>
              ) : (
                "-"
              )}
            </td>
            <td className="center">
              {tab.ratingAverage ? (
                <div>{<RatingStarImg ratingAverage={tab.ratingAverage} />}</div>
              ) : (
                "-"
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TabResults;
