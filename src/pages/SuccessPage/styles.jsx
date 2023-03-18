import { Link } from "react-router-dom";
import styled from "styled-components";
import { StandardButtonLink } from "../../components/styles/Button.styles";

export const SuccessPageWrapper = styled.main`
  box-sizing: border-box;
  padding: 1rem;
  width: 100%;
  max-width: 900px;
  margin: 70px auto;
`;

export const OrderNumber = styled(Link)`
  color: ${({ theme }) => theme.color.secondary};
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  th {
    text-align: start;
    padding: 0.5rem;
    padding-left: 0;
    border-bottom: 1px solid ${({ theme }) => theme.color.secondary};
  }

  td {
    padding-top: 0.75rem;
  }

  tfoot {
    font-weight: 600;
    border-top: 1px solid ${({ theme }) => theme.color.secondary};
  }
`;

export const OrderSummaryLink = styled(Link)`
  color: black;
  text-decoration: none;
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;

export const ReturnButton = styled(StandardButtonLink)`
  margin: 0 auto;
  display: block;
  font-size: 1.125rem;
  text-align: center;
  margin-top: 2rem;
`;
