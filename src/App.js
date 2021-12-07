import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import { UserContext } from "./hooks/UserContext";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import PrivateRoute from "./pages/PrivateRoute";
import useFindUser from "./hooks/useFindUser";

function App() {
  const { user, setUser, isLoading } = useFindUser();

  return (
    <Router>
      <UserContext.Provider value={{ user, setUser, isLoading }}>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/home" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
