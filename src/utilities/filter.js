export const filterProducts = function (products, filterValue) {
  if (filterValue === "default") {
    return products;
  }

  const filteredProducts = products.filter((product) => product.tags.includes(filterValue));
  return filteredProducts;
};
