import { useLocation, Navigate } from "react-router-dom";

import PropTypes from "prop-types";

function ProtectedGameRoute({ children }) {
  const location = useLocation();

  if (location.state === null) {
    console.log("ProtectedGameRoute: Redirecting to /");
    return <Navigate to="/" replace />;
  }

  return children;
}

ProtectedGameRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedGameRoute;
