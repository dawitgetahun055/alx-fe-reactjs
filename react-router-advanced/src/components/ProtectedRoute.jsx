// src/components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, isAuthenticated }) => {
  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
