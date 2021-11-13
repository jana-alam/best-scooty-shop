import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../../../hooks/useAuth";
import Spinner from "../../SharedComponents/Spinner/Spinner";

const AdminRoute = ({ children, ...rest }) => {
  const { user, admin } = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user?.email && admin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/dashboard",
            }}
          />
        )
      }
    ></Route>
  );
};

export default AdminRoute;
