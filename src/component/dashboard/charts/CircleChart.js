"use client";
import React from "react";
import style from "./Chart.module.css";
import { downarrow } from "src/Assets/commonsvg";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

function Circlechart() {
  const datatypes = [
    {
      color: "#98D89E",
      title: "Basic Tees",
      pert: "55%",
    },
    {
      color: "#F6DC7D;",
      title: "Custom Short Pants",
      pert: "14%",
    },
    {
      color: "#EE8484;",
      title: "Super Hoodies",
      pert: "31%",
    },
  ];

  const data = [
    { name: "Tees", value: 550 },
    { name: "Custom short pants", value: 310 },
    { name: "Super Hoodies", value: 140 },
  ];

  const COLORS = ["#9BDD7C", "#E9A0A0", "#F7DC7D"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className={style.circlechartmainDiv}>
      <div className={style.topsecDiv}>
        <b>Top products</b>
        <span>May - June 2021 {downarrow}</span>
      </div>
      <div className={style.circlechartDiv}>
        <div className={style.cir_chartDiv}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={175} height={400}>
              {/* <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              > */}
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={0}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className={style.cir_charttype}>
          {datatypes?.map((item, id) => {
            return (
              <div className={style.typescolrDiv} key={id}>
                <div
                  className={style.colorsdiv}
                  style={{ background: `${item?.color}` }}
                ></div>
                <div className={style.colortextsec}>
                  <b>{item?.title}</b>
                  <span>{item?.pert}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Circlechart;
