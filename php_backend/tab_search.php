<?php

require_once('consts.php');
include 'util/generate_where_clause.php';
include 'util/query_db.php';
include 'database.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

$postReqData = json_decode(file_get_contents('php://input'));

$tabColumns = "tab.id AS tabId, tab.name AS tabName, tab.version AS updateCount, tab.dateUploaded AS uploadDate, tab.size, tab.downloads AS downloadCount, NULLIF(tab.legacyRatingAverage, 0.00) AS ratingAverage, tab.legacyRatingCount AS ratingCount,";
$userColumns = "tab.userId AS uploaderId, user.userName AS uploaderUsername,";
$folderColumns = "tab.folderId AS folderId, folder.name AS folderName";
$select = "SELECT $tabColumns $userColumns $folderColumns";

$from = "FROM `tab`";

$ownerNameJoin = "LEFT JOIN user ON userId = user.id";
$folderNameJoin = "LEFT JOIN folder ON folderId = folder.id";

$joins = "$ownerNameJoin $folderNameJoin";

$where = generateWhereClause($postReqData, $dbConn);

$order = "ORDER BY tab.name";

if ($where === null) {
    echo json_encode('no-valid-params');
} else {
    $results = queryDb($dbConn, $select, $from, $joins, $where, $order);
    echo json_encode(["searchType" => "tab", "results" => $results], JSON_UNESCAPED_UNICODE);
}

$dbConn->close();
