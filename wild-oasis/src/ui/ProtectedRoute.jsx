function ProtectedRoute({ children }) {
  // 1. Load authenticated user

  // 2. while loading, show spinner
  // 3. If NO authenticated user, redirect to /login
  // 4. If there IS user, render the app

  return children;
}

export default ProtectedRoute;
