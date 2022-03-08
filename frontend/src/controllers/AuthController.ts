import axios, { AxiosResponse } from "axios";
import { useEffect, useMemo, useState } from "react";
import { useQuery } from "react-query";

function useAuth() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  const token = localStorage.getItem("token");

  const { isError, isSuccess, data } = useQuery(
    ["token_check", token],
    () => {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
      return axios.get("http://localhost:5000/auth/check");
    },
    { enabled: !!token }
  );

  useEffect(() => {
    if (isSuccess) {
      setIsLoggedIn(true);
      setUser({
        name: (data as AxiosResponse)?.data?.name,
        email: (data as AxiosResponse)?.data?.email,
      });
    } else if (isError) {
      localStorage.removeItem("token");
    }
  }, [isSuccess, isError, data]);

  const loginObj = useMemo(
    () => ({
      isLoggedIn,
      login: () => setIsLoggedIn(true),
      logout: () => {
        setIsLoggedIn(false);
        localStorage.removeItem("token");
      },
      user,
      setUser,
    }),
    [isLoggedIn, setIsLoggedIn, user, setUser]
  );

  return loginObj;
}

export default useAuth;
