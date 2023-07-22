// yearList.js
/*In this code, the generateYearList() function uses a for loop to iterate from the start year (2021) up to the current year (currentYear). During each iteration, it pushes the year into the yearList array. Finally, the function returns the complete array containing the years from 2021 to the current year.

When you run the example usage code, it will output an array containing the years from 2021 to the current year, e.g., [2021, 2022, 2023] if the current year is 2023. */
  
function generateYearList() {
    const currentYear = new Date().getFullYear();
    const startYear = 2021;
    const yearList = [];
  
    for (let year = startYear; year <= currentYear; year++) {
      yearList.push(year);
    }
  
    return yearList;
  }
  
  module.exports = generateYearList();
  