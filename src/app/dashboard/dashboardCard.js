import React from "react";
import { BiCoin } from "react-icons/bi";
import { LiaEthereum } from "react-icons/lia";
import { SiDogecoin, SiBinance } from "react-icons/si";
import style from "./dashboardUser.module.css";

const DashboardCard = () => {
  return (
    <div className={style.container}>
      <article className={style.cards}>
        <div>
          <h1>Bitcoin</h1>
          <p>$1200</p>
        </div>
        <BiCoin className="text-7xl"></BiCoin>
      </article>
      <article className={style.cards}>
        <div>
          <h1>Bitcoin</h1>
          <p>$1200</p>
        </div>
        <LiaEthereum className="text-7xl"></LiaEthereum>
      </article>
      <article className={style.cards}>
        <div>
          <h1>Bitcoin</h1>
          <p>$1200</p>
        </div>
        <SiDogecoin className="text-7xl"></SiDogecoin>
      </article>
      <article className={style.cards}>
        <div>
          <h1>Bitcoin</h1>
          <p>$1200</p>
        </div>
        <SiBinance className="text-7xl"></SiBinance>
      </article>
    </div>
  );
};

export default DashboardCard;
