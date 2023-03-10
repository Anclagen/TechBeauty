import { Link } from "react-router-dom"
import { updateHead } from "../../utilities/updateHead"

function CartPage(){
  updateHead("Your Cart", "Your cart page, showing all items you have added.")

  return(
    <main>
      <h1>Cart Page</h1>
      <div>
        <Link to="../success">Success Page</Link>
      </div>
    </main>
  )
}

export default CartPage