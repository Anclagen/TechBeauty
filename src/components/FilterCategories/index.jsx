export default function FilterCategoryOptions({ isLoading, isError, data }) {
  if (isLoading || isError) {
    return "";
  }
  const categories = [...new Set(data.flatMap((product) => product.tags))];
  return (
    <>
      {categories.map((category, i) => (
        <option key={i} value={category}>
          {category}
        </option>
      ))}
    </>
  );
}
