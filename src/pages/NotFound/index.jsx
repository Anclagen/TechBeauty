import { updateHead } from "../../utilities/updateHead";
import { Wrapper } from "./styles";

function NotFound(){
  updateHead("404 - Page Not Found", "This pages doesn't really exist.....")
  return(
    <Wrapper>
      <p>Notfound</p>
    </Wrapper>
  )
}
export default NotFound