import React from 'react';
import { BiCoin } from 'react-icons/bi';
import { LiaEthereum } from 'react-icons/lia';
import { SiDogecoin, SiBinance } from 'react-icons/si';
// import { SiBinance } from 'react-icons/si';
import style from './dashboardUser.module.css'

const DashboardCard = () => {
  return (
      <div className={style.container}>

          <article className={style.cards}>
                  
                 <div >
                 <h1 >Bitcoin</h1>
                  <p >$1200.00</p>
                 </div>
                  
                   <BiCoin className='text-5xl'></BiCoin>
                 </article>
          <article className={style.cards}>
                  <div>
          <h1 >Ethereum</h1>
                  <p >$100.00</p>
                   </div>
                   <LiaEthereum className='text-5xl'></LiaEthereum>
                 </article>
          <article className={style.cards}>
                  <div>
          <h1 >Dogecoin</h1>
          <p >$2500.00</p>
                   </div>
                   <SiDogecoin className='text-5xl'></SiDogecoin>
                 </article>
          <article className={style.cards}>
                  <div>
          <h1 >Binance</h1>
          <p >$3200.00</p>
                   </div>
                   <SiBinance className='text-5xl'></SiBinance>
                 </article>

      </div>

  );
};

export default DashboardCard;