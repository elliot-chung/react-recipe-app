import { createContext } from "react";
import UserObj from "../sharedtypes/UserObj";

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
    name: "",
    email: "",
  },
  setUser: () => {},
});

export default LoginContext;
