"use client";
import React from "react";
import style from "./Schedulecard.module.css";
import { downarrow, leftarrow, whatsapp } from "src/Assets/commonsvg.js";
function Schedulecard() {
  const datas = [
    {
      border: "5px solid #9BDD7C",
      title: "Meeting",
      time: "14.00-15.00",
      address: "at Sunset Road, Kuta, Bali",
    },
    {
      border: "5px solid #6972C4",
      title: "Check ",
      time: "18.00-20.00",
      address: "at Central Jakarta",
    },
  ];
  return (
    <div className={style.chartmainDiv}>
      <div className={style.topsecDiv}>
        <b>John Doe</b>
      </div>

      <div className={style.schedulesDiv}>
        <div className={style.card}>
          <span>Name</span>
        </div>
      </div>
    </div>
  );
}
export default Schedulecard;
