import styled from "styled-components"
import { Link } from "react-router-dom"

export const CartIcon = styled.div`
    position: absolute;
    padding: 0.5rem;
    top: 10px;
    right: 70px;

    @media (min-width: 805px) {
      position: relative;    
      top: unset;
      right: unset;
      margin-right: 1rem;
    }

    
`
export const CartLink= styled(Link)`
    position: relative;
    font-size: var(--nav-text-size);
    color: white;
    text-decoration: none;
    list-style-type: none;
    display: flex;
    justify-content: center;
    align-items: center;
    
    :after{
      content: '${props => props.total}';
      font-size: 1.1rem;
      font-weight: 600;
      color: var(--secondary);
      display: flex;
      text-align: center;
      justify-content: center;
      align-content: center;
      flex-direction: column;
      border-radius: 50%;
      position: absolute;
      top: 40%;
      left: 15%;
      width: 30px;
      height: 30px;
      background-color: var(--primary);
      border: 1px solid var(--secondary);
    }
`

export const CartImage = styled.img`
  width: 60px;
`

export const CartItemsList = styled.div`
overflow-y: scroll;
color: black;
position: absolute;
top: 90%;
right: 0%;
  display: none;
    ${CartIcon}:hover & {
    display: block;
  }
  background-color: var(--light);
  width: 250px;
  max-width: 350px;
  max-height: 60vh;
  border: 2px solid var(--secondary);
  @media (min-width: 805px) {
    width: 450px;
    }
`

export const CartItemListImage = styled.img`
  width: 60px;
  height: 40px;
  object-fit: cover;
`
