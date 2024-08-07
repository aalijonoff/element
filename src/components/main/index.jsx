import React from "react";
import "./index.css";
import Store from "../../store/stores";
import LeftSidebar from "../header";
import Body from "../body";
import RightSideBar from "../footer";
import UserProfile from "../userProfile";
import { BrowserRouter } from "react-router-dom";
const Main = () => {
  return (
    <BrowserRouter>
    <Store>
      <div className="mainContainer">
        <LeftSidebar />
        {/* <UserProfile/> */}
        <Body />
        <RightSideBar/>
      </div>
    </Store>
    </BrowserRouter>
  );
};

export default Main;
