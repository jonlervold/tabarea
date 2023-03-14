const generateDropdownDateValues = () => {
  let possibleYears = [];
  for (let i = 1996; i <= 2019; i++) {
    possibleYears.push(i);
  }
  let possibleMonths = [];
  for (let i = 1; i <= 12; i++) {
    possibleMonths.push(i);
  }
  let possibleDays = [];
  for (let i = 1; i <= 31; i++) {
    possibleDays.push(i);
  }
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return { possibleYears, possibleMonths, possibleDays, monthNames };
};

export default generateDropdownDateValues;
