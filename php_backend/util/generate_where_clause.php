<?php

require_once('consts.php');

function generateWhereClause($searchObject, $dbConn)
{
    $parameters = [];
    foreach ($searchObject as $searchParameter => $settings) {
        // search type setting does not have "enabled" property, all others do
        if (isset($settings->enabled) && $settings->enabled) {
            $translatedSearchParameter = translateSearchParameter($searchParameter, $searchObject->searchType);

            if ($translatedSearchParameter) {

                // text type parameters
                if ($settings->type === TEXT_TYPE && $settings->value) {
                    $sanitizedValue = $dbConn->real_escape_string($settings->value);
                    $parameters[] = "{$translatedSearchParameter} LIKE '%{$sanitizedValue}%'";
                }

                // null type parameters
                if ($settings->type === NULL_TYPE) {
                    $parameters[] = "{$translatedSearchParameter} IS NULL";
                }

                // number range type
                if ($settings->type === NUMBER_RANGE_TYPE) {
                    $validatedPrimaryValue = validateNumber($settings->primaryValue);
                    $validatedSecondaryValue = validateNumber($settings->secondaryValue);
                    $validatedOperator = validateOperator($settings->operator);

                    if ($settings->operator === RANGE && $validatedPrimaryValue && $validatedSecondaryValue) {
                        if ($validatedPrimaryValue === $validatedSecondaryValue) {
                            $parameters[] = "{$translatedSearchParameter} = {$validatedPrimaryValue}";
                        } else {
                            if ($validatedPrimaryValue > $validatedSecondaryValue) {
                                $largerValue = $validatedPrimaryValue;
                                $smallerValue = $validatedSecondaryValue;
                            } else {
                                $largerValue = $validatedSecondaryValue;
                                $smallerValue = $validatedPrimaryValue;
                            }
                            $parameters[] = "{$translatedSearchParameter} > {$smallerValue} AND {$translatedSearchParameter} < {$largerValue}";
                        }
                    } elseif ($settings->operator !== RANGE && ($validatedPrimaryValue || $validatedPrimaryValue === '0')) {
                        $parameters[] = "{$translatedSearchParameter} {$validatedOperator} {$validatedPrimaryValue}";
                    }
                }

                // date range type
                if ($settings->type === DATE_RANGE_TYPE) {
                    $validatedPrimaryYear = validateNumber($settings->primaryValue->year);
                    $validatedPrimaryMonth = validateNumber($settings->primaryValue->month);
                    $validatedPrimaryDay = validateNumber($settings->primaryValue->day);
                    $validatedSecondaryYear = validateNumber($settings->secondaryValue->year);
                    $validatedSecondaryMonth = validateNumber($settings->secondaryValue->month);
                    $validatedSecondaryDay = validateNumber($settings->secondaryValue->day);
                    $validatedOperator = validateOperator($settings->operator);

                    $firstDate = "{$validatedPrimaryYear}-{$validatedPrimaryMonth}-{$validatedPrimaryDay}";
                    $secondDate = "{$validatedSecondaryYear}-{$validatedSecondaryMonth}-{$validatedSecondaryDay}";
                    if ($settings->operator === RANGE) {
                        if ($firstDate === $secondDate) {
                            $parameters[] = "{$translatedSearchParameter} = '{$firstDate}'";
                        } else {
                            if ($firstDate > $secondDate) {
                                $largerValue = $firstDate;
                                $smallerValue = $secondDate;
                            } else {
                                $largerValue = $secondDate;
                                $smallerValue = $firstDate;
                            }
                            $parameters[] = "{$translatedSearchParameter} > '{$smallerValue}' AND {$translatedSearchParameter} < '{$largerValue}'";
                        }
                    } elseif ($settings->operator !== RANGE) {
                        $parameters[] = "{$translatedSearchParameter} {$validatedOperator} '{$firstDate}'";
                    }
                }

                // sections type
                if ($settings->type === SECTIONS_TYPE) {
                    $folderIds = [];
                    if ($settings->popular) {
                        $folderIds = array_merge($folderIds, [1]);
                    }
                    if ($settings->classical) {
                        $folderIds = array_merge($folderIds, [2]);
                    }
                    if ($settings->misc) {
                        $folderIds = array_merge($folderIds, [3, 742, 3672]);
                    }
                    if ($settings->themes) {
                        $folderIds = array_merge($folderIds, [4, 399, 743, 3032, 3033, 3034, 6582]);
                    }
                    if ($settings->originals) {
                        $folderIds = array_merge($folderIds, [5]);
                    }
                    if ($settings->unclassified) {
                        $folderIds = array_merge($folderIds, [6]);
                    }
                    if (count($folderIds) > 0) {
                        $folderIdsStr = implode(',', $folderIds);
                        $parameters[] = "{$translatedSearchParameter} IN ($folderIdsStr)";
                    }
                }
            }
        }
    }
    if (count($parameters) === 0) {
        return null;
    }
    $whereClause = 'WHERE ';
    $i = 0;
    foreach ($parameters as $parameter) {
        if ($i === 0) {
            $whereClause .= "{$parameter} ";
        } else {
            $whereClause .= "AND {$parameter} ";
        }
        $i++;
    }


    return $whereClause;
}

function translateSearchParameter($parameter, $searchType)
{
    switch ($parameter) {
        case AVERAGE_RATING_RANGE:
            if ($searchType === TAB) {
                return "tab.legacyRatingAverage";
            } else return "ratingAverage.ratingAverage";
        case DOWNLOAD_COUNT_RANGE:
            if ($searchType === TAB) {
                return "tab.downloads";
            } else return "totalDownloads.totalDownloads";
        case RATING_COUNT_RANGE:
            if ($searchType === TAB) {
                return "tab.legacyRatingCount";
            } else return "totalRatings.totalRatings";
        case UPLOADER_USERNAME_INCLUDES:
        case OWNER_USERNAME_INCLUDES:
        case USERNAME_INCLUDES:
        case UNKNOWN_UPLOADER:
        case HAS_NO_OWNER:
            return "user.userName";
        case DESCRIPTION_INCLUDES:
        case HAS_NO_DESCRIPTION:
            return "folder.description";
        case TAB_NAME_INCLUDES:
            return "tab.name";
        case FOLDER_NAME_INCLUDES:
            return "folder.name";
        case WITHIN_CATEGORIES:
            return "folder.parentId";
        case NEWEST_TAB_DATE_RANGE:
            return "newestTab.newestTab";
        case OLDEST_TAB_DATE_RANGE:
            return "oldestTab.oldestTab";
        case UPLOAD_COUNT_RANGE:
            return "totalTabs.totalTabs";
        case TOTAL_SIZE_RANGE:
            return "totalSize.totalSize";
        case DATE_UPLOADED_RANGE:
            return "tab.dateUploaded";
        case UPDATE_COUNT_RANGE:
            return "tab.version";
        case SIZE_RANGE:
            return "tab.size";
        case USERS_UPLOADED_COUNT_RANGE:
            return "totalUsersUploaded.totalUsersUploaded";
        case FOLDER_NAME_INCLUDES:
            return "folder.name";
        case DESCRIPTION_INCLUDES:
            return "folder.description";
        case CREATION_DATE_RANGE:
            return "folder.dateCreated";
        case FOLDERS_OWNED_COUNT_RANGE:
            return "COALESCE(foldersOwnedCount.foldersOwnedCount, 0)";
        case DATE_JOINED_RANGE:
            return "user.dateJoined";
        default:
            return "";
    }
}

function validateNumber($number)
{
    if (preg_match('/^[0-9\.]+$/', $number)) {
        return $number;
    } else {
        return '';
    }
}

function validateOperator($operator)
{
    switch ($operator) {
        case GREATER_THAN_OR_EQUAL_TO:
        case LESS_THAN_OR_EQUAL_TO:
        case GREATER_THAN:
        case LESS_THAN:
        case EQUAL_TO:
        case RANGE:
            return $operator;
        default:
            return "=";
    }
}
