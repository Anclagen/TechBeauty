/**
 * Filters through products based on a search query.
 * @param {Array} data array of products to search
 * @param {String} query search parameters
 * @returns {Array} filtered array of products
 */
export const search = function (data, query) {
  return data.filter((item) => item.title.toLowerCase().includes(query.toLowerCase()));
};
