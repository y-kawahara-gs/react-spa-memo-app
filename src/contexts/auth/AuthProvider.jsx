import { useState } from "react";
import { LoginContext } from "../LoginContext.jsx";

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const toggleLogin = () => setIsAuthenticated((prev) => !prev);

  return (
    <LoginContext.Provider value={{ isAuthenticated, toggleLogin }}>
      {children}
    </LoginContext.Provider>
  );
};
