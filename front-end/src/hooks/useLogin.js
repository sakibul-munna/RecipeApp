import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  const signin = async (email, password) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post("http://localhost:3030/api/auth", {
        email: email,
        password: password,
      });

      if (response.status === 200) {
        console.log(response.headers);
        let token = response.headers["x-auth-token"];
        let user = response.data;
        console.log("Token:", token);
        console.log("User:", user);

        localStorage.setItem(
          "user",
          JSON.stringify({
            token: token,
            name: user.name,
            email: user.email,
          })
        );

        dispatch({ type: "LOGIN", payload: user });

        setIsLoading(false);
        navigate("/");
      } else {
        setError(response.data);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      setError(error.response.data);
      setIsLoading(false);
    }
  };

  return { signin, isLoading, error };
};
