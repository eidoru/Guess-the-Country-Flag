import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

function useAuth() {
  const { user, setUser } = useContext(AuthContext);
  return { user, setUser };
}

export { useAuth };
