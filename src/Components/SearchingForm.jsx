import React from "react";
import styled from "styled-components";
import { ButtonWrapper } from "../Styles/ButtonWrapper";

const FormWrapper = styled.form`
  margin: auto;
  width: max-content;
  padding: 5vh 5vw;
  border-radius: 10px;
  background-color: cadetblue;

  div {
    display: flex;
    margin-top: 1rem;

    input {
      padding: 1rem;
      margin-right: 1rem;
      border-radius: 5px;
      border: none;
    }
  }
`;

const SearchingForm = ({ handleSubmit, descRef }) => (
  <FormWrapper onSubmit={handleSubmit}>
    <label htmlFor="descption">Use SPACE to input multiple keywords</label>
    <br />
    <div>
      <input
        min={1}
        id="descption"
        ref={descRef}
        placeholder="Job description..."
      />
      <ButtonWrapper id="search">Search</ButtonWrapper>
    </div>
  </FormWrapper>
);

export default SearchingForm;
