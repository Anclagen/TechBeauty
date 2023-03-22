/**
 * Filters products based on a tag value
 * @param {Array} products array of products to filter
 * @param {String} filterValue the tag to filter by.
 */
export const filterProducts = function (products, filterValue) {
  if (filterValue === "All Products") {
    return products;
  }

  const filteredProducts = products.filter((product) => product.tags.includes(filterValue));
  return filteredProducts;
};
