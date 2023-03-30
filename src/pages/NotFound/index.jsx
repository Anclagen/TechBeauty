import { updateHead } from "../../utilities/updateHead";
import { Wrapper, NotFoundLinkButton } from "./styles";

/**
 * Returns the 404 page
 * @returns {JSX.Element} 404 page
 */
function NotFound() {
  updateHead("404 - Page Not Found", "This pages doesn't really exist.....");
  return (
    <Wrapper id="main">
      <h1>Page Not found</h1>
      <NotFoundLinkButton to="/">Return To Store</NotFoundLinkButton>
    </Wrapper>
  );
}
export default NotFound;
