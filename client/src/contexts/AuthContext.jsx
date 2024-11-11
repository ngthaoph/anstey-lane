import { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

//CREATE THE authcontext
const AuthContext = createContext();

//Create an access to provider values

//Creates the App Provider
export function AuthProvier({ children }) {
  //LOGIC FUNCTION
  //what we want to pass
  const [user, setUser] = useState(null);
  let navigate = useNavigate();
  useEffect(() => {
    //either store login user or nothing (logout)
    const userData = getCurrentUser();
    setUser(userData);
  }, []);

  //login function ()asaves to local storage

  const loginSaveUser = async (data) => {
    const { token } = data; //token is as a string "token": "string"
    console.log(data);
    localStorage.setItem("token", JSON.stringify(user));
    setUser(jwtDecode(token));
  };

  //logout function (wipes from localStorage)
  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("./login");
    getCurrentUser;
  };
  //Checker fnction ()achecks localStorage for user)
  function getCurrentUser() {
    try {
      let token = localStorage.getItem("token");
      const savedUser = jwtDecode(token);
      return savedUser;
    } catch (error) {
      return null;
    }
  }

  //any auth-data we want to make global around our app - we put it in a variable
  const value = {
    user,
    loginSaveUser,
    logout,
    getCurrentUser,
  };

  //TEMPLATE SECTION
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContext;
