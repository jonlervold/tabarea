<?php

require_once(__DIR__ . '/../../../tab_db_env.php');

$dbConn = new mysqli(HOST, USERNAME, PASSWORD, DATABASE);
if ($dbConn->connect_error) {
    return die('Connection failed: ' . $dbConn->connect_error);
}
mysqli_set_charset($dbConn, "utf8");
