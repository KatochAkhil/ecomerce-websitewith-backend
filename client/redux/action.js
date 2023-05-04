import { loginRoute, registerRoute } from "@/utils/endpoints";
import { LOGIN, REGISTER } from "./constant";
import { createNotification } from "@/components/createNotifications";
import axios from "../utils/axios";

export const userlogin = (user, setLoading, router) => async (dispatch) => {
  setLoading && setLoading(true);
  try {
    const res = await axios.post(loginRoute, user);
    dispatch({ type: LOGIN, payload: res.data });
    router && router.push("/");
    createNotification("success", "Success", "Login Successful");
    console.log(res.data.data);
    localStorage.setItem("user", JSON.stringify(res.data.data));
  } catch (error) {
    createNotification("error", "Error", error?.response?.data);
  }
  setLoading && setLoading(false);
};

export const registerUser = (user, setLoading, router) => async (dispatch) => {
  setLoading && setLoading(true);
  try {
    const res = await axios.post(registerRoute, user);
    dispatch({ type: REGISTER, payload: res.data });
    router && router.push("/login");
    createNotification("success", "Success", "User Registered Successful");
  } catch (error) {
    console.log(error);
  }
  setLoading && setLoading(false);
};
