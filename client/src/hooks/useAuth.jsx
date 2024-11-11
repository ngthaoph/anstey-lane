import { useContext, useDebugValue } from "react";
import AuthContext from "../contexts/AuthContext";

function useAuth() {
  const { user } = useContext(AuthContext);
  useDebugValue(user, (user) => (user?.id ? "Log in" : "Log out")); //fix this
  return useContext(AuthContext);
}

export default useAuth;
