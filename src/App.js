import { BrowserRouter, Switch, Route } from "react-router-dom";
import AuthProvider from "./components/AuthProvider/AuthProvider";
import DashBoard from "./pages/DashBoard/DashBoard/DashBoard";
import Home from "./pages/Home/Home/Home";
import Login from "./pages/Login/Login/Login";
import PrivateRoute from "./pages/Login/PrivateRoute/PrivateRoute";
import Register from "./pages/Login/Register/Register";
import Purchase from "./pages/Purchase/Purchase/Purchase";
import Scooters from "./pages/Scooters/Scooters/Scooters";

function App() {
  return (
    <div className="">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/scooters">
              <Scooters></Scooters>
            </PrivateRoute>
            <PrivateRoute path="/purchase">
              <Purchase></Purchase>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <DashBoard></DashBoard>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
