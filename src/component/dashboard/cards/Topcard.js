import React from "react";
import style from "./Topcards.module.css";
function Topcard({ item }) {
  return (
    <div className={style.topcardDiv}>
      <div className={style.iconDiv}>
        <div
          className={style.iconConatiner}
          style={{ background: `${item.bg}` }}
        >
          {item?.svg}
        </div>
      </div>
      <div className={style.cardsecDiv}>
        <span>{item.title}</span>
        <div className={style.revenueContainer}>
          <b>{item.amount}</b>
          <p className={style.revenuePercentage}>+2.5%</p>
        </div>
      </div>
    </div>
  );
}

export default Topcard;
