import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { UserContext } from "./UserContext";

export default function useAuth() {
  let history = useHistory();
  const { setUser } = useContext(UserContext);
  const [error, setError] = useState(null);
  const VOT_API_URL = process.env.REACT_APP_VOT_API_URL;

  const loginUser = async (data) => {
    const { username, password } = data;
    const uri = `${VOT_API_URL}security/authentication/login`;

    return axios
      .post(uri, {
        username,
        password,
      })
      .then((res) => {
        setUser({
          username,
          password,
          token: res.data,
        });
        history.push("/home");
      })
      .catch((err) => {
        console.log(err);
        setError(err.response.data);
      });
  };

  return { loginUser, error };
}
