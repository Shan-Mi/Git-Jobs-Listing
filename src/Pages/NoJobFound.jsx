import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { BtnSmall } from "../Styles/ButtonWrapper";

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  p {
    text-align: center;
    font-size: 2rem;
  }

  button {
    width: max-content;
    padding: 1rem;
    font-size: 1rem;
  }
`;

const NoJobFound = () => {
  const history = useHistory();

  return (
    <ContentWrapper>
      <p>No job found</p>
      <BtnSmall onClick={() => history.push("/")}>
        Go back to search page
      </BtnSmall>
    </ContentWrapper>
  );
};

export default NoJobFound;
