import styled from "styled-components";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

function Search() {
  return (
    <FormStyle>
      <div>
        <FaSearch />
        <input type="text" />
      </div>
    </FormStyle>
  );
}
const FormStyle = styled.form`
  margin: 0rem 20rem;
    
  div{
    width:100%;
    position: relative;
  }
 
  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    color:white;
    padding:1rem 3rem;
    font-size:1.5rem;
    border:none;
    border-radius:1rem;
    outline:none;
    width:100%;

  svg{
    position:absolute;
    color:white;
    top:50%;
    left:0%;
    transform:translate(100%,-50%);
  }
`;

export default Search;
