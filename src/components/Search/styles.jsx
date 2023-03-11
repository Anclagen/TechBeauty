import styled from "styled-components";

export const SearchInput = styled.input`
  position: absolute;
  top: 50%; 
  left: 50%; 
  transform: translate(-50%, -50%);
  width: 80%;
  padding: 0.5rem;
  border-radius: 1rem;
  box-shadow: 0 0 20px var(--secondary);
  font-size: 1.25rem;
  ::placeholder {
   text-align: center; 
   
  }

  @media (min-width: 805px) {
    max-width: 800px;
  }
`