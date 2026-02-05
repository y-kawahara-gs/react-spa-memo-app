import { useContext } from "react";
import { LoginContext } from "../LoginContext.jsx";

export const useAuth = () => useContext(LoginContext);
