import { Helmet, HelmetProvider } from "react-helmet-async";

/**
 * Update index.html meta tags
 * @param {String} title Current pages title
 * @param {String} description  Description of pages content
 * @example
 *  <Head title="Home" description="Welcome to TechBeauty"/>
 */

const Head = function ({ title, description }) {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{"TechBeauty | " + title}</title>
        <meta name="description" content={description} />
      </Helmet>
    </HelmetProvider>
  );
};

export default Head;
