export const search = function (data, query) {
  //const alt = data.filter((item) => item.title.toLowerCase().startsWith(query.toLowerCase()));
  return data.filter((item) => item.title.toLowerCase().includes(query.toLowerCase()));
};
