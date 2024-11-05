import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  // 1. Load authenticated user
  //   const { user, isLoading } = useUser();
  const { isLoading } = useUser();

  // 2. while loading, show spinner
  if (isLoading) return;
  <FullPage>
    <Spinner />
  </FullPage>;

  // 3. If NO authenticated user, redirect to /login
  // 4. If there IS user, render the app

  return children;
}

export default ProtectedRoute;
