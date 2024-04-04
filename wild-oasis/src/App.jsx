import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { Button } from "./Button";
import Button from "./ui/Button";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: yellow;
`;

const Input = styled.input`
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  padding: 0.8rem 1.2rem;
  box-shadow: var(--shadow-sm);
`;

const StyledApp = styled.main`
  background-color: blue;
  padding: 20px;
`;
function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <H1>Header title</H1>
        <Button onClick={() => alert("tesht")}>Check In</Button>

        <Input type="number" placeholder="Number of guests" />
      </StyledApp>
    </>
  );
}

export default App;
