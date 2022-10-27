import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../sharepages/Header";

const Main = () => {
  return (
    <div>
      <Header></Header>

      <Outlet></Outlet>
      <div className="mt-5 text-center  py-3 bg-light fotter">
        <p>Copyright ©2022 All rights reserved</p>
      </div>
    </div>
  );
};

export default Main;
