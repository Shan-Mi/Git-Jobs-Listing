import React from "react";
import styled from "styled-components";

const TitleWrapper = styled.h1`
  text-align: center;
`;

const Header = () => {
  return (
    <div>
      <TitleWrapper>Welcome to GitHub Job Listing!</TitleWrapper>
    </div>
  );
};

export default Header;
