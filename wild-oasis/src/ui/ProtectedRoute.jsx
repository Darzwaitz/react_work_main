import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";

function ProtectedRoute({ children }) {
  // 1. Load authenticated user
  //   const { user, isLoading } = useUser();
  const { isLoading } = useUser();

  // 2. while loading, show spinner
  if (isLoading) return <Spinner />;

  // 3. If NO authenticated user, redirect to /login
  // 4. If there IS user, render the app

  return children;
}

export default ProtectedRoute;
