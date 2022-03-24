import axios from "axios";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import FormValues from "../sharedtypes/RegisterFormValues";

const endpoint = import.meta.env.VITE_ADD_USER_ENDPOINT || "";

function postUser(values: FormValues) {
  return axios.put(endpoint, values);
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
