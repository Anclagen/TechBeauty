/**
 * Update index.html meta tags
 * @param {String} title Current pages title
 * @param {String} description  Description of pages content
 * @example
 *  updateHead("Home", "TechBeauty an e-commerce website, selling a range of items from beauty and fashion product to audio and computer equipment.")

 */
export const updateHead = function (title, description) {
  document.title = "TechBeauty | " + title;
  document.querySelector('meta[name="description"]').content = description;
};
