import RatingStarImg from "./RatingStarImg";
import { consts } from "../../consts";

const UserResults = ({ searchResults, sortSearch, page }) => {
  const firstResultOnPage = (page - 1) * 100;
  const lastResultOnPage = page * 100;
  return (
    <table className="results-table">
      <tbody>
        <tr className="results-table-header">
          <td
            className="left"
            onClick={() => sortSearch("username", consts.USER)}
          >
            Username
          </td>
          <td
            className="center"
            onClick={() => sortSearch("dateJoined", consts.USER)}
          >
            Date Joined
          </td>
          <td
            className="center"
            onClick={() => sortSearch("oldestTab", consts.USER)}
          >
            Oldest Tab Date
          </td>
          <td
            className="center"
            onClick={() => sortSearch("newestTab", consts.USER)}
          >
            Newest Tab Date
          </td>
          <td
            className="right"
            onClick={() => sortSearch("totalTabs", consts.USER)}
          >
            Tabs Submitted
          </td>
          <td
            className="right"
            onClick={() => sortSearch("foldersOwnedCount", consts.USER)}
          >
            Folders Owned
          </td>
          <td
            className="right"
            onClick={() => sortSearch("totalDownloads", consts.USER)}
          >
            Total Downloads
          </td>
          <td
            className="right"
            onClick={() => sortSearch("totalSize", consts.USER)}
          >
            Total Size
          </td>
          <td
            className="right"
            onClick={() => sortSearch("totalRatings", consts.USER)}
          >
            Total Ratings
          </td>
          <td
            colSpan={2}
            className="center"
            onClick={() => sortSearch("ratingAverage", consts.USER)}
          >
            Rating Average
          </td>
        </tr>
        {searchResults
          .slice(firstResultOnPage, lastResultOnPage)
          .map((user) => (
            <tr key={user.userId}>
              <td>
                <a
                  href={`https://tabarea.net/tabs/user.php@u=${user.userId}.html`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {user.username}
                </a>
              </td>
              <td className="center">{user.dateJoined}</td>
              <td className="center">
                {user.oldestTab ? user.oldestTab : "-"}
              </td>
              <td className="center">
                {user.newestTab ? user.newestTab : "-"}
              </td>
              <td className="right">
                {Number(user.totalTabs).toLocaleString()}
              </td>
              <td className="right">
                {Number(user.foldersOwnedCount).toLocaleString()}
              </td>
              <td className="right">
                {Number(user.totalDownloads).toLocaleString()}
              </td>
              <td className="right">
                {Number(user.totalSize).toLocaleString()}
              </td>
              <td className="right">
                {Number(user.totalRatings).toLocaleString()}
              </td>
              <td className="center">
                {user.ratingAverage ? (
                  <div className="results-table-rating-average">
                    ({user.ratingAverage})
                  </div>
                ) : (
                  "-"
                )}
              </td>
              <td className="center">
                {user.ratingAverage ? (
                  <div>
                    {<RatingStarImg ratingAverage={user.ratingAverage} />}
                  </div>
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

export default UserResults;
