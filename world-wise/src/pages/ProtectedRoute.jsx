import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
  const { isAuntenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isAuntenticated) navigate("/");
    },
    [isAuntenticated, navigate]
  );

  return children;
}

export default ProtectedRoute;
