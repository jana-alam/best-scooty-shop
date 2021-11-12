import React, { useState } from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import AddProduct from "../AddProduct/AddProduct";
import DashBoardHeader from "../DashBoardHeader/DashBoardHeader";
import DashBoardSideBar from "../DashBoardSideBar/DashBoardSideBar";
import DashBoardHome from "../DashBoradHome/DashBoardHome";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManageProducts from "../ManageProducts/ManageProducts";
import MyOrders from "../MyOrders/MyOrders";
import Payment from "../Payment/Payment";
import ManageOrders from "./ManageOrders/ManageOrders";
import UserReview from "./UserReview/UserReview";

const DashBoard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  let { path, url } = useRouteMatch();

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <DashBoardSideBar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        url={url}
      />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <DashBoardHeader
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
        {/* Main content area */}
        <main>
          {/* Nested Route */}
          <Switch>
            <Route exact path={path}>
              <DashBoardHome></DashBoardHome>
            </Route>
            <Route path={`${path}/payment`}>
              <Payment></Payment>
            </Route>
            <Route path={`${path}/my-orders`}>
              <MyOrders></MyOrders>
            </Route>
            <Route path={`${path}/review`}>
              <UserReview></UserReview>
            </Route>
            <Route path={`${path}/add-product`}>
              <AddProduct></AddProduct>
            </Route>
            <Route path={`${path}/manage-products`}>
              <ManageProducts></ManageProducts>
            </Route>
            <Route path={`${path}/manage-orders`}>
              <ManageOrders></ManageOrders>
            </Route>
            <Route path={`${path}/make-admin`}>
              <MakeAdmin></MakeAdmin>
            </Route>
          </Switch>
        </main>
      </div>
    </div>
  );
};

export default DashBoard;
