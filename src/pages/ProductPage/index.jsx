import { useEffect } from "react";
import {useParams } from "react-router-dom"
import { baseURL } from "../../utilities/constants";
import { useAPI } from "../../hooks/API";
import { updateHead } from "../../utilities/updateHead";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, decreaseQuantity, clearCart } from "../../context/cartSlice";

function ProductSpecific(){
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const params = useParams();
  const {data, isLoading, isError} = useAPI((baseURL+ params.id));

  useEffect(() => {
    console.log(cart);
  }, [cart]);
  if(isLoading){
    return (
      <div>Loading</div>
    )
  } 

  if (isError) {
    return <div>An Error Occurred Fetching The Data.</div>;
  }

  console.log(data)
  updateHead(data.title, data.description)
  return(
    <>
      <h1>{data.title}</h1>
      <img src={data.imageUrl} alt={data.title} />
      <p>{data.description}</p>
      <p>Price: {data.discountedPrice < data.price ? `kr ${data.discountedPrice}, Save kr ${data.price-data.discountedPrice}`: "kr "+ data.discountedPrice}</p>
      <button onClick={() => dispatch(addToCart({quantity:1, product:data}))}>Add To Cart</button>
      <button onClick={() => dispatch(removeFromCart({product:data}))}>remove</button>
      <button onClick={() => dispatch(decreaseQuantity({quantity:1, product:data}))}>decrease</button>
      <button onClick={() => dispatch(clearCart())}>clear</button>
      <p>Categories: {data.tags ? data.tags.join(', ') : 'None'}</p>
      <h2>Reviews</h2>
      <p>Rating: {data.rating}</p>
      <div>
        {data.reviews ? data.reviews.map((review) => <div key={review.id}>
          <h3>{review.username}</h3>
          <p>{review.description}</p>
          <p>Rating: {review.rating}</p>
        </div>) : <p>No Reviews Yet.</p>}
      </div>
    </>
  )
}

function ProductPage(){
  return(
    <main>
      <ProductSpecific />
    </main>
  )
}

export default ProductPage