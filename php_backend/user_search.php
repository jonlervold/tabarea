<?php

require_once('consts.php');
include 'util/generate_where_clause.php';
include 'util/query_db.php';
include 'database.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

$postReqData = json_decode(file_get_contents('php://input'));

$folderColumns = "COALESCE(foldersOwnedCount.foldersOwnedCount, 0) AS foldersOwnedCount,";
$tabColumns = "totalTabs.totalTabs, totalRatings.totalRatings, totalDownloads.totalDownloads, newestTab.newestTab, oldestTab.oldestTab, ratingAverage.ratingAverage, totalSize.totalSize,";
$userColumns = "user.id AS userId, user.username, user.dateJoined";

$select = "SELECT $folderColumns $tabColumns $userColumns";

$from = "FROM `user`";

$tabsSubmittedJoin = "LEFT JOIN ( SELECT userId, COUNT(userId) AS totalTabs FROM tab GROUP BY userId ) AS totalTabs ON user.id = totalTabs.userId";
$totalRatingsJoin = "LEFT JOIN ( SELECT userId, SUM(legacyRatingCount) AS totalRatings FROM tab GROUP BY userId ) AS totalRatings ON user.id = totalRatings.userId";
$totalDownloadsJoin = "LEFT JOIN ( SELECT userId, SUM(downloads) AS totalDownloads FROM tab GROUP BY userId ) AS totalDownloads ON user.id = totalDownloads.userId";
$totalSizeJoin = "LEFT JOIN ( SELECT userId, SUM(size) AS totalSize FROM tab GROUP BY userId ) AS totalSize ON user.id = totalSize.userId";
$newestTabJoin = "LEFT JOIN ( SELECT userId, MAX(dateUploaded) AS newestTab FROM tab GROUP BY userId ) AS newestTab ON user.id = newestTab.userId";
$oldestTabJoin = "LEFT JOIN ( SELECT userId, MIN(dateUploaded) AS oldestTab FROM tab GROUP BY userId ) AS oldestTab ON user.id = oldestTab.userId";
$tabsSubmittedJoin = "LEFT JOIN ( SELECT userId, COUNT(userId) AS totalTabs FROM tab GROUP BY userId ) AS totalTabs ON user.id = totalTabs.userId";
$ratingAverageJoin = "LEFT JOIN ( SELECT userId, ROUND(AVG(legacyRatingAverage), 2) AS ratingAverage FROM tab WHERE legacyRatingAverage != 0.00 GROUP BY userId ) AS ratingAverage ON user.id = ratingAverage.userId";
$foldersOwnedJoin = "LEFT JOIN ( SELECT userId, COUNT(id) AS foldersOwnedCount FROM folder GROUP BY userId ) AS foldersOwnedCount ON user.id = foldersOwnedCount.userId";

$joins = "$tabsSubmittedJoin $totalRatingsJoin $totalDownloadsJoin $totalSizeJoin $foldersOwnedJoin $newestTabJoin $oldestTabJoin $ratingAverageJoin";

$where = generateWhereClause($postReqData, $dbConn);

$order = "ORDER BY user.username";

if ($where === null) {
    echo json_encode('no-valid-params');
} else {
    $results = queryDb($dbConn, $select, $from, $joins, $where, $order);
    echo json_encode(["searchType" => "user", "results" => $results], JSON_UNESCAPED_UNICODE);
}

$dbConn->close();
