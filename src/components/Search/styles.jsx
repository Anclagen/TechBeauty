import styled from "styled-components";
import bannerImage from "../../assets/banner.jpg";

export const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  background-color: lightgrey;
  background-image: url(${bannerImage});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  height: 250px;
  background-size: cover;
`;

export const Banner = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  object-position: 50% 20%;
  display: block;
  margin: 0 auto;
`;
export const SearchInput = styled.input`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  max-width: 800px;
  padding: 0.5rem;
  border-radius: 1rem;
  box-shadow: 0 0 20px ${({ theme }) => theme.color.secondary};
  font-size: 1.25rem;
  ::placeholder {
    text-align: center;
  }
  z-index: 2;
`;

export const HiddenLabel = styled.label`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;

export const AutoComplete = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
  width: 80%;
  max-width: 800px;
  background-color: ${({ theme }) => theme.color.light};
  border-radius: 1rem;
  box-shadow: 0 0 20px ${({ theme }) => theme.color.secondary};
  overflow: auto;
  max-height: 300px;
  z-index: 1;
  opacity: 0;
  transition: 0.5s;
  pointer-events: none;

  :hover,
  &:focus-within,
  :focus {
    opacity: 1;
    pointer-events: all;
  }

  ${SearchInput}:focus ~ & {
    opacity: 1;
    pointer-events: all;
  }
`;

export const ResultContainer = styled.div`
  padding: 2rem 0 1rem 0;
`;

export const NoResult = styled.p`
  padding: 2rem 0 0 1rem;
`;
