import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // 1. Load authenticated user
  //   const { user, isLoading } = useUser();
  const { isFetching, isAuthenticated } = useUser();

  // 2. If NO authenticated user, redirect to /login
  useEffect(
    function () {
      if (!isAuthenticated && !isFetching) navigate("/login");
    },
    [isAuthenticated, isFetching, navigate]
  );

  // 3. while loading, show spinner
  if (isFetching) return;
  <FullPage>
    <Spinner />
  </FullPage>;

  // 4. If there IS user, render the app
  if (isAuthenticated) return children;

  return children;
}

export default ProtectedRoute;
