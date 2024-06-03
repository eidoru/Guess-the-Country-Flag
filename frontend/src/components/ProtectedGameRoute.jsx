import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import PropTypes from "prop-types";

function ProtectedGameRoute({ children }) {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state === null) {
      navigate("/", { replace: true });
    }
  }, [location.state, navigate]);

  return children;
}

ProtectedGameRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedGameRoute;
