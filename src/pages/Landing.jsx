import { useContext } from "react";
import Header from "../sections/Header";
import { Redirect } from "react-router-dom";
import { UserContext } from "../hooks/UserContext";

export default function Landing() {
  const { user } = useContext(UserContext);

  if (user) {
    <Redirect to="/home" />;
  }
  return (
    <div className="page">
      <Header />
      <h3>Esta es la landing page pública</h3>
    </div>
  );
}
