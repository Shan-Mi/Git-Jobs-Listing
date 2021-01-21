import React from "react";
import { useHistory } from "react-router-dom";
import { BtnSmall } from "../Styles/ButtonWrapper";

import styled from "styled-components";

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

const Page404 = () => {
  const history = useHistory();

  return (
    <ContentWrapper>
      <p>Page does not exist!</p>
      <BtnSmall onClick={() => history.push("/")}>
        Go back to search page
      </BtnSmall>
    </ContentWrapper>
  );
};

export default Page404;
