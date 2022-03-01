import { createContext } from "react";
import UserObj from "../types/UserObj";

type LoginContextType = {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
  user: UserObj;
  setUser: (user: UserObj) => void;
};

const LoginContext = createContext<LoginContextType>({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
  user: {
    id: 0,
    name: "",
    email: "",
    password: "",
  },
  setUser: () => {},
});

export default LoginContext;
