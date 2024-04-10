// import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

const StyledApp = styled.main`
  /* background-color: blue; */
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row>
          <Row type="horizontal">
            <Heading as="h1">Header title</Heading>
            <div>
              <Heading as="h2">Check in - Check out</Heading>
              <Button variation onClick={() => alert("tesht")}>
                Check In
              </Button>
              <Button onClick={() => alert("tesht")}>Check Out</Button>
            </div>
          </Row>
          <Row>
            <Heading as="h3">Form</Heading>
            <form action="">
              <Input type="number" placeholder="Number of guests" />
              <Input type="number" placeholder="Number of guests" />
            </form>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
