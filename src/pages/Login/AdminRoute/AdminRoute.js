import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../../../hooks/useAuth";
import Spinner from "../../SharedComponents/Spinner/Spinner";

const AdminRoute = ({ children, ...rest }) => {
  const { user, loading, admin } = useAuth();
  if (loading) {
    return <Spinner></Spinner>;
  }
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
