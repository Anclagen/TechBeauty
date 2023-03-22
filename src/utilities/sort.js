/**
 * Sorts data based on requested sort criteria
 * @param {Array} data an array of products
 * @param {String} value The required sorting state.
 * @returns
 */
export const sortProducts = function (data, value) {
  let filteredData = [...data];
  let sortedData;
  switch (value) {
    case "price-high":
      sortedData = filteredData.sort((a, b) => b.discountedPrice - a.discountedPrice);
      break;
    case "price-low":
      sortedData = filteredData.sort((a, b) => a.discountedPrice - b.discountedPrice);
      break;
    case "rating":
      sortedData = filteredData.sort((a, b) => b.rating - a.rating);
      break;
    case "az":
      sortedData = filteredData.sort((a, b) => a.title > b.title);
      break;
    case "za":
      sortedData = filteredData.sort((a, b) => a.title < b.title);
      break;
    default:
      sortedData = filteredData;
      break;
  }

  return sortedData;
};
