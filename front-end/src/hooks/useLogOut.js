import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";

export const useLogOut = () => {
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");

    dispatch({ type: "LOGOUT" });

    navigate("/");
  };

  return { logout };
};
