import styled from "styled-components";

export const ButtonWrapper = styled.button`
  padding: 1rem;
  border-radius: 5px;
  border: 1px #00000030 solid;
  font-size: 1rem;

  &:hover {
    color: #fff6e1;
    background-color: #2591ff;
  }
`;

export const BtnSmall = styled.button`
  padding: 3px 10px;
  border-radius: 2px;
  border: none;
  font-family: "PT Sans Narrow", sans-serif;
  &:hover {
    color: white;
  }
`;
