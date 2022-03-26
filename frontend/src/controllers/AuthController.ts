import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import jwt_decode from "jwt-decode";
import { useEffect, useMemo, useState } from "react";
import { useQuery } from "react-query";
import UserObj from "../sharedtypes/UserObj";

const endpoint = import.meta.env.VITE_GET_USER_PROFILE_ENDPOINT || "";
if (!endpoint) throw Error("VITE_GET_USER_PROFILE_ENDPOINT is not set");

async function checkAuth() {
  const config: AxiosRequestConfig = {
    method: "get",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    url: endpoint,
  };
  return axios(config);
}

function useAuth() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  const token = useMemo(() => localStorage.getItem("token"), []);

  const { isError, isSuccess, data } = useQuery(
    ["token_check", token],
    checkAuth,
    { enabled: !isLoggedIn && !!token }
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
      login: (loginToken: string) => {
        const decodedUser = jwt_decode<UserObj>(loginToken);
        setIsLoggedIn(true);
        setUser({
          name: decodedUser.name,
          email: decodedUser.email,
        });
        localStorage.setItem("token", loginToken);
      },
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
