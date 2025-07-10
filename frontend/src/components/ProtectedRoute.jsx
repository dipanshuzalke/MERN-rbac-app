import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, allowedRoles }) {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  // Not logged in → redirect to login
  if (!token) return <Navigate to="/" />;

  // If role restriction is provided and current role is not allowed
  if (allowedRoles && !allowedRoles.includes(role)) {
    return <Navigate to="/dashboard" />;
  }

  // Authorized → render children
  return children;
}

export default ProtectedRoute;
