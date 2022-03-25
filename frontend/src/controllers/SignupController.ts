import axios, { AxiosRequestConfig } from "axios";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import FormValues from "../sharedtypes/RegisterFormValues";

const endpoint = import.meta.env.VITE_ADD_USER_ENDPOINT || "";
if (!endpoint)
  throw Error("No Endpoint for adding users provided in .env file");

async function postUser(values: FormValues) {
  const config: AxiosRequestConfig = {
    method: "PUT",
    url: endpoint,
    data: values,
  };
  return axios(config);
}

function useSignup() {
  const navigate = useNavigate();
  const { mutate, isLoading, isError, error } = useMutation(
    (values: FormValues) => postUser(values),
    {
      onSuccess: () => {
        navigate("/login");
      },
    }
  );

  const onSubmit = (values: FormValues): void => {
    mutate(values);
  };

  return { onSubmit, isLoading, isError, error };
}

export default useSignup;
