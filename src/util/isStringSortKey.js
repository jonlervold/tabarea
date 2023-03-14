const isStringSortKey = (sortKey) => {
  const stringSortKeys = [
    "folderDateCreated",
    "uploaderUsername",
    "ownerUsername",
    "description",
    "folderName",
    "uploadDate",
    "parentName",
    "dateJoined",
    "newestTab",
    "oldestTab",
    "username",
    "tabName",
  ];
  return stringSortKeys.includes(sortKey);
};

export default isStringSortKey;
