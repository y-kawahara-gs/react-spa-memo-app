import { useContext } from "react";
import { LoginContext } from "../contexts/LoginContext.jsx";

export const useLogin = () => useContext(LoginContext);
