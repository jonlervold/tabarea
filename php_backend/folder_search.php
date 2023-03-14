<?php

require_once('consts.php');
include 'util/generate_where_clause.php';
include 'util/query_db.php';
include 'database.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

$postReqData = json_decode(file_get_contents('php://input'));

$folderColumns = "folder.name AS folderName, folder.id AS folderId, folder.parentId, folder.description, folder.dateCreated AS folderDateCreated, folder.userId AS ownerId, (SELECT name FROM folder parent WHERE parent.id = folder.parentId) AS parentName,";
$otherDataColumns = "user.userName AS ownerUsername, newestTab.newestTab, oldestTab.oldestTab,";
$tabTotalsColumns = "totalTabs.totalTabs, totalUsersUploaded.totalUsersUploaded, totalDownloads.totalDownloads, totalRatings.totalRatings, ratingAverage.ratingAverage, totalSize.totalSize";
$select = "SELECT $folderColumns $otherDataColumns $tabTotalsColumns";

$from = "FROM `folder`";

$ownerNameJoin = "LEFT JOIN user ON folder.userId = user.id";
$newestTabJoin = "LEFT JOIN ( SELECT folderId, MAX(dateUploaded) AS newestTab FROM tab GROUP BY folderId ) AS newestTab ON folder.id = newestTab.folderId";
$oldestTabJoin = "LEFT JOIN ( SELECT folderId, MIN(dateUploaded) AS oldestTab FROM tab GROUP BY folderId ) AS oldestTab ON folder.id = oldestTab.folderId";
$totalTabsJoin = "LEFT JOIN ( SELECT folderId, COUNT(name) AS totalTabs FROM tab GROUP BY folderId ) AS totalTabs ON folder.id = totalTabs.folderId";
$totalUsersUploaded = "LEFT JOIN ( SELECT folderId, COUNT(DISTINCT userId) AS totalUsersUploaded FROM tab GROUP BY folderId ) AS totalUsersUploaded ON folder.id = totalUsersUploaded.folderId";
$totalDownloadsJoin = "LEFT JOIN ( SELECT folderId, SUM(downloads) AS totalDownloads FROM tab GROUP BY folderId ) AS totalDownloads ON folder.id = totalDownloads.folderId";
$totalSizeJoin = "LEFT JOIN ( SELECT folderId, SUM(size) AS totalSize FROM tab GROUP BY folderId ) AS totalSize ON folder.id = totalSize.folderId";
$totalRatingsJoin = "LEFT JOIN ( SELECT folderId, SUM(legacyRatingCount) AS totalRatings FROM tab GROUP BY folderId ) AS totalRatings ON folder.id = totalRatings.folderId";
$averageRatingJoin = "LEFT JOIN ( SELECT folderId, ROUND(AVG(legacyRatingAverage), 2) AS ratingAverage FROM tab WHERE legacyRatingAverage != 0.00 GROUP BY folderId ) AS ratingAverage ON folder.id = ratingAverage.folderId";

$joins = "$ownerNameJoin $newestTabJoin $oldestTabJoin $totalTabsJoin $totalUsersUploaded $totalDownloadsJoin $totalRatingsJoin $totalSizeJoin $averageRatingJoin";

$where = generateWhereClause($postReqData, $dbConn);

$order = "ORDER BY folder.name";

if ($where === null) {
    echo json_encode('no-valid-params');
} else {
    $results = queryDb($dbConn, $select, $from, $joins, $where, $order);
    echo json_encode(["searchType" => "folder", "results" => $results], JSON_UNESCAPED_UNICODE);
}

$dbConn->close();
