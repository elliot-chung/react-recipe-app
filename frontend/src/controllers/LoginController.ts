import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import axios, { AxiosResponse } from "axios";
import { useMutation, UseMutationResult } from "react-query";
import LoginContext from "../contexts/LoginContext";
import FormValues from "../sharedtypes/LoginFormValues";
import UserObj from "../sharedtypes/UserObj";

function useLogin(): UseMutationResult<
  AxiosResponse,
  Error,
  FormValues,
  unknown
> {
  const userStates = useContext(LoginContext);
  const { login, setUser } = userStates;
  const navigate = useNavigate();

  const storeUserToken = (response: AxiosResponse) => {
    const { token } = response.data;
    localStorage.setItem("token", token);
    const user = jwt_decode<UserObj>(token);
    setUser({
      name: user.name,
      email: user.email,
    });
    login();
    navigate("/");
  };

  const loginUser = async (values: FormValues): Promise<AxiosResponse> =>
    axios.post("http://localhost:5000/users/loginUser", values);

  return useMutation(loginUser, {
    onSuccess: storeUserToken,
  });
}

export default useLogin;
