const isDefaultDescKey = (sortKey) => {
  const defaultDescKeys = [
    "totalUsersUploaded",
    "folderDateCreated",
    "foldersOwnedCount",
    "totalDownloads",
    "downloadCount",
    "ratingAverage",
    "totalRatings",
    "ratingCount",
    "updateCount",
    "dateJoined",
    "uploadDate",
    "newestTab",
    "oldestTab",
    "totalTabs",
    "totalSize",
    "size",
  ];
  return defaultDescKeys.includes(sortKey);
};

export default isDefaultDescKey;
