/**
 * Takes an array of data and creates drop down options for the tags.
 * @param {Boolean} isLoading Check for if the data has been fetched
 * @param {Boolean} isError Check for if there was an error with the request
 * @param {Array} data Array of products
 * @returns
 */
export default function FilterCategoryOptions({ isLoading, isError, data = [] }) {
  if (isLoading || isError) {
    return "";
  }
  const categories = [...new Set(data.flatMap((product) => product.tags))];
  return (
    <>
      {categories.map((category, i) => (
        <option key={i} value={category}>
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </option>
      ))}
    </>
  );
}
