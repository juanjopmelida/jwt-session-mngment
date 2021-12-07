import { useHistory } from "react-router-dom";
import axios from "axios";
import useFindUser from "./useFindUser";

export default function useLogout() {
  const VOT_API_URL = process.env.REACT_APP_VOT_API_URL;
  const history = useHistory();
  const { user } = useFindUser();

  const logoutUser = async () => {
    try {
      await axios({
        method: "GET",
        headers: {
          Authorization: `Basic ${user}`,
        },
        url: `${VOT_API_URL}security/authentication/logout`,
      }).then((res) => {
        console.log(`%cLOGOUT:${res}`, "color:orangered");
        history.push("/");
      });
    } catch (err) {
      console.log(`%cERROR EN LOGOUT:${err}`, "color:red");
    }
  };

  return { logoutUser };
}
