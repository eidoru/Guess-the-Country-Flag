import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

import PropTypes from "prop-types";

function ProtectedRoute({ children }) {
  const { user } = useAuth();

  if (user === null) {
    console.log("ProtectedRoute: Redirecting to /signin");
    return <Navigate to="/signin" replace />;
  }

  return children;
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
