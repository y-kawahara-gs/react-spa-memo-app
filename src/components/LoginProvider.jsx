import { useState } from "react";
import { LoginContext } from "../contexts/LoginContext.jsx";

export const LoginProvider = ({ children }) => {
  const [isLogin, setLogin] = useState(false);
  const toggleLogin = () => setLogin((prev) => !prev);

  return (
    <LoginContext.Provider value={{ isLogin, toggleLogin }}>
      {children}
    </LoginContext.Provider>
  );
};
