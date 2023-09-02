import React from "react";
import style from "./dashboardheader.module.css";
import { searchicon } from "src/Assets/commonsvg";
import { notificationicon } from "src/Assets/commonsvg";

function Dashboardheader() {
  return (
    <div className={style.Dashboardheader}>
      <div className={style.Dashboard}>
        {" "}
        <h4>Dashboard</h4>
      </div>
      <div>
        <ul className={style.Dashboardside}>
          <li>
            <div className={style.searchboxDiv}>
              <input placeholder="search..." />
              {searchicon}
            </div>
          </li>
          <li>&nbsp;&nbsp;&nbsp;{notificationicon}</li>
          <li>
            <img
              src="https://media.licdn.com/dms/image/C5603AQGIYT25qdyUmQ/profile-displayphoto-shrink_800_800/0/1637938260330?e=2147483647&v=beta&t=bga--I_pyA8FUDbHvJb92QCuuhiPJnYViXPt4Kmp2Zk"
              className={style.Dashboardimage}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboardheader;
