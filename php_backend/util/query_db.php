<?php

function queryDb($dbConn, $select, $from, $joins, $where, $order)
{

    $pageDataQuery = "$select $from $joins $where $order";
    $pageDataResult = mysqli_query($dbConn, $pageDataQuery);
    $result = mysqli_fetch_all($pageDataResult, MYSQLI_ASSOC);

    return $result;
}
