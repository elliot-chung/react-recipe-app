import { useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { useMutation } from "react-query";
import LoginContext from "../contexts/LoginContext";
import FormValues from "../sharedtypes/LoginFormValues";
import UserObj from "../sharedtypes/UserObj";

async function loginUser(values: FormValues): Promise<AxiosResponse> {
  const config: AxiosRequestConfig = {
    method: "post",
    url: "http://localhost:5000/users/loginUser",
    data: values,
  };

  return axios(config);
}

function useLogin() {
  const { login, setUser } = useContext(LoginContext);
  const navigate = useNavigate();

  const storeUserToken = useCallback(
    (response: AxiosResponse) => {
      const { token } = response.data;
      localStorage.setItem("token", token);
      const user = jwt_decode<UserObj>(token);
      setUser({
        name: user.name,
        email: user.email,
      });
      login();
      navigate("/");
    },
    [login, navigate, setUser]
  );

  const { isLoading, isError, isSuccess, error, mutate } = useMutation(
    loginUser,
    {
      onSuccess: storeUserToken,
    }
  );

  const onSubmit = (values: FormValues): void => {
    mutate(values);
  };

  return { isLoading, isError, isSuccess, error, onSubmit };
}

export default useLogin;
