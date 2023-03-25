import styled from "styled-components";
import bannerImage from "../../assets/product_banner_display1.jpg";
import productImage from "../../assets/product_banner_display2.jpg";

export const AboutMain = styled.main``;

export const AboutContentWrapper = styled.div`
  max-width: 700px;
  padding: 2rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.color.tertiary};
  margin: 1rem 2rem 2rem 2rem;

  div {
    background-image: url(${productImage});
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 300px;
  }

  @media (min-width: 700px) {
    margin: 1rem auto 2rem auto;
  }
`;

export const AboutHeader = styled.div`
  position: relative;
  margin: 0;
  overflow: hidden;
  min-height: 65dvh;

  h1 {
    font-size: 1.5rem;

    padding: 0.5rem;
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.shadow.popup};
    text-align: center;
    white-space: nowrap;
    position: absolute;
    background-color: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.secondary};
    margin: 2rem;
    z-index: 10;
    left: 49%;
    top: 50%;
    transform: translate(-50%, -50%);
    @media (min-width: 700px) {
      font-size: 2.5rem;
    }
  }

  background-image: url(${bannerImage});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
