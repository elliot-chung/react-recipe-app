import { useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { useMutation } from "react-query";
import LoginContext from "../contexts/LoginContext";
import FormValues from "../sharedtypes/LoginFormValues";

const endpoint = import.meta.env.VITE_LOGIN_USER_ENDPOINT || "";
if (!endpoint) throw Error("No Endpoint for logging in provided in .env file");

async function loginUser(values: FormValues): Promise<AxiosResponse> {
  const config: AxiosRequestConfig = {
    method: "post",
    url: endpoint,
    data: values,
  };

  return axios(config);
}

function useLogin() {
  const { login } = useContext(LoginContext);
  const navigate = useNavigate();

  const onSuccess = useCallback(
    (response: AxiosResponse) => {
      const { token } = response.data;
      login(token);
      navigate("/");
    },
    [login, navigate]
  );

  const { isLoading, isError, isSuccess, error, mutate } = useMutation(
    loginUser,
    {
      onSuccess,
    }
  );

  const onSubmit = useCallback(
    (values: FormValues): void => {
      mutate(values);
    },
    [mutate]
  );

  return { isLoading, isError, isSuccess, error, onSubmit };
}

export default useLogin;
