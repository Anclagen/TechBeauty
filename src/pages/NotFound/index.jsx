import Head from "../../components/Head";
import { Wrapper, NotFoundLinkButton } from "./styles";

/**
 * Returns the 404 page
 * @returns {JSX.Element} 404 page
 */
function NotFound() {
  <Head title="Page Not Found" description="Page not found" />;
  return (
    <Wrapper id="main">
      <h1>Page Not found</h1>
      <NotFoundLinkButton to="/">Return To Store</NotFoundLinkButton>
    </Wrapper>
  );
}
export default NotFound;
