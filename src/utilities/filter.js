export const filterProducts = function (products, filterValue) {
  if (filterValue === "All Products") {
    return products;
  }

  const filteredProducts = products.filter((product) => product.tags.includes(filterValue));
  return filteredProducts;
};
