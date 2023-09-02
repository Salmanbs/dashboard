"use client";
import React from "react";
import style from "./sidebar.module.css";
import {
  dashboardicon,
  schedulesicon,
  settingsicon,
  transactionicon,
  usericon,
} from "src/Assets/commonsvg";
function Sidebar() {
  return (
    <div className={style.sidebarDiv}>
      <h1>Board.</h1>

      <div className={style.SidebarbtmSec}>
        <ul className={style.Dashboardicon}>
          <li>{dashboardicon} &nbsp; Dashboard</li>
          <li> {transactionicon} &nbsp; Transaction</li>
          <li>{schedulesicon} &nbsp; Schedules</li>
          <li>{usericon} &nbsp; Users</li>
          <li>{settingsicon} &nbsp; Settings</li>
        </ul>

        <ul className={style.Sidebarbtm}>
          <li>Help</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
