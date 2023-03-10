import { Link } from "react-router-dom"
import { updateHead } from "../../utilities/updateHead"

function SuccessPage(){
  updateHead("Checkout Success", "Your order has been successfully placed")

  return(
    <main>
      <h1>Success Page</h1>
      <div>
        <Link path="/">Success Page</Link>
      </div>
    </main>
  )
}

export default SuccessPage