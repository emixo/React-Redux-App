import React from "react";
import styled from "styled-components"

const Title = styled.header`
    background-color: #333;
    box-shadow: inset 0 0 10px 10px gray;
    padding: 1rem;
    color: lightgray;
    text-shadow: 0 0 10px goldenrod;
`


const Header = () => {
  return (
    <Title>
      <h1>League of Legends Champions</h1>
    </Title>
  );
};

export default Header;