"use client";
import React from "react";
import style from "./Chart.module.css";
import { downarrow } from "src/Assets/commonsvg";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

function Chart() {
  const data = [
    {
      name: "Week 1",
      Guest: 4000,
      User: 2400,
      amt: 2400,
    },
    {
      name: "Week 2",
      Guest: 3000,
      User: 1398,
      amt: 2210,
    },
    {
      name: "Week 3",
      Guest: 2000,
      User: 9800,
      amt: 2290,
    },
    {
      name: "Week 4",
      Guest: 2780,
      User: 3908,
      amt: 2000,
    },
  ];

  return (
    <div className={style.chartmainDiv}>
      <div className={style.Charttopsec}>
        <div className={style.rightsideDiv}>
          <b>Activities</b> <br />
          <span>May - June 2021 {downarrow}</span>
        </div>
        <div className={style.chartdatatypes}>
          <div>
            <div className={style.guestusercolor}></div>
            <span>Guest</span>
          </div>
          <div>
            <div className={style.usercolor}></div>
            <span>User</span>
          </div>
        </div>
      </div>

      <div className={style.chartsDiv}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            {/* <Line type="monotone" dataKey="Guest" stroke="#E9A0A0" />
            <Line type="monotone" dataKey="User" stroke="#9BDD7C" /> */}
            <Bar dataKey="Guest" fill="#E9A0A0" maxBarSize={38} />
            <Bar dataKey="User" fill="#9BDD7C" maxBarSize={38} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Chart;
