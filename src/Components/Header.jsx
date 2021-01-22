import React from "react";
import styled from "styled-components";

const TitleWrapper = styled.div`
  text-align: center;
  padding-top: 5rem;
`;

const Header = () => {
  return (
    <TitleWrapper>
      <h1>Welcome to GitHub Job Listing!</h1>
    </TitleWrapper>
  );
};

export default Header;
