import React from 'react';
import { LiaEthereum } from 'react-icons/lia';
import { SiDogecoin, SiBinance } from 'react-icons/si';
import style from '../../dashboard/dashboardUser.module.css'
import { FaBitcoin } from 'react-icons/fa';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { BsGraphDownArrow, BsGraphUpArrow } from 'react-icons/bs';

const LivePriceCard = () => {
    return (
        <div className="w-3/4 ml-10 mb-6">
            <div className='overflow-x-auto w-3/4 flex gap-4'>
                <article className={style.cards}>

                    <div className='flex justify-between' >
                        <div>
                            <span className='flex gap-2'><FaBitcoin style={{ fontSize: "1.4rem" }} className='text-yellow-500'></FaBitcoin><h1>Bitcoin</h1></span>
                            <h3 className='text-xl'>0.2231345 BTC </h3>
                            <span className='flex justify-center gap-4'>
                                <small>11,023.24USD</small>
                                <small className='flex ml-4'>
                                    <AiOutlineArrowUp className='text-green-500'></AiOutlineArrowUp> <h3 className='text-green-500'>+12.5</h3>
                                </small>
                            </span>
                        </div>
                        <div>
                            <BsGraphUpArrow style={{fontSize:"2.5rem"}} className='text-green-500'></BsGraphUpArrow>
                        </div>
                    </div>
                </article>

                <article className={style.cards}>
                    <div className='flex justify-between'>
                        <div>
                            <span className='flex gap-2'><LiaEthereum style={{ fontSize: "1.4rem" }} className='text-green-500'></LiaEthereum><h1>Ethereum</h1></span>
                            <h3 className='text-xl'>1.21345 USDT </h3>
                            <span className='flex justify-center gap-4'>
                                <small>10,032.24USD</small>
                                <small className='flex ml-4'>
                                    <AiOutlineArrowUp className='text-red-500'></AiOutlineArrowUp> <h3 className='text-red-500'>-2.5</h3>
                                </small>
                            </span>
                        </div>
                        <div>
                        <BsGraphDownArrow style={{fontSize:"2.5rem"}} className='text-red-500'></BsGraphDownArrow>
                        </div>
                    </div>
                </article>

                <article className={style.cards}>
                    <div className='flex justify-between'>
                        <div>
                            <span className='flex gap-2'><SiDogecoin style={{ fontSize: "1.4rem" }} className='text-yellow-600'></SiDogecoin><h1>Dogecoin</h1></span>
                            <h3 className='text-xl'>1.22415 ADA </h3>
                            <span className='flex justify-center gap-4'>
                                <small>532.94USD</small>
                                <small className='flex ml-4'>
                                    <AiOutlineArrowUp className='text-green-500'></AiOutlineArrowUp> <h3 className='text-green-500'>+12.5</h3>
                                </small>
                            </span>
                        </div>
                        <div>
                            <BsGraphUpArrow style={{fontSize:"2.5rem"}} className='text-green-500'></BsGraphUpArrow>
                        </div>
                    </div>
                </article>

                <article className={style.cards}>
                    <div className='flex justify-between'>
                        <div>
                            <span className='flex gap-2'><SiBinance style={{ fontSize: "1.4rem" }} className='text-green-700'></SiBinance><h1 >Binance</h1></span>
                            <h3 className='text-xl'>240.345 BUSD </h3>
                            <span className='flex justify-center gap-4'>
                                <small>340.24USD</small>
                                <small className='flex ml-4'>
                                    <AiOutlineArrowUp className='text-red-500'></AiOutlineArrowUp> <h3 className='text-red-500'>-1.5</h3>
                                </small>
                            </span>
                        </div>
                        <div>
                            <BsGraphDownArrow style={{fontSize:"2.5rem"}} className='text-red-500'></BsGraphDownArrow>
                        </div>
                    </div>
                </article>
                <article className={style.cards}>

                    <div className='flex justify-between'>
                        <div>
                            <span className='flex gap-2'><FaBitcoin style={{ fontSize: "1.4rem" }} className='text-yellow-500'></FaBitcoin><h1>Bitcoin</h1></span>
                            <h3 className='text-xl'>0.2231345 BTC </h3>
                            <span className='flex justify-center gap-4'>
                                <small>11,032.24USD</small>
                                <small className='flex ml-4'>
                                    <AiOutlineArrowUp className='text-red-500'></AiOutlineArrowUp> <h3 className='text-red-500'>-5.5</h3>
                                </small>
                            </span>
                        </div>
                        <div>
                        <BsGraphDownArrow style={{fontSize:"2.5rem"}} className='text-red-500'></BsGraphDownArrow>
                        </div>
                    </div>
                </article>

                <article className={style.cards}>
                    <div className='flex justify-between'>
                        <div>
                            <span className='flex gap-2'><LiaEthereum style={{ fontSize: "1.4rem" }} className='text-green-500'></LiaEthereum><h1>Ethereum</h1></span>
                            <h3 className='text-xl'>1.21345 USDT </h3>
                            <span className='flex justify-center gap-4'>
                                <small>10,032,24USD</small>
                                <small className='flex ml-4'>
                                    <AiOutlineArrowUp className='text-green-500'></AiOutlineArrowUp> <h3 className='text-green-500'>+12.5</h3>
                                </small>
                            </span>
                        </div>
                        <div>
                            <BsGraphUpArrow style={{fontSize:"2.5rem"}} className='text-green-500'></BsGraphUpArrow>
                        </div>
                    </div>
                </article>

                <article className={style.cards}>
                    <div className='flex justify-between'>
                        <div>
                            <span className='flex gap-2'><SiDogecoin style={{ fontSize: "1.4rem" }} className='text-yellow-600'></SiDogecoin><h1>Dogecoin</h1></span>
                            <h3>1.22415 ADA </h3>
                            <span className='flex justify-center gap-4'>
                                <small>532.94USD</small>
                                <small className='flex ml-4'>
                                    <AiOutlineArrowUp className='text-green-500'></AiOutlineArrowUp> <h3 className='text-green-500'>+12.5</h3>
                                </small>
                            </span>
                        </div>
                        <div>
                            <BsGraphUpArrow style={{fontSize:"2.5rem"}} className='text-green-500'></BsGraphUpArrow>
                        </div>
                    </div>
                </article>

                <article className={style.cards}>
                    <div className='flex justify-between'>
                        <div>
                            <span className='flex gap-2'><SiBinance style={{ fontSize: "1.4rem" }} className='text-green-700'></SiBinance><h1 >Binance</h1></span>
                            <h3>240.345 BUSD </h3>
                            <span className='flex justify-center gap-4'>
                                <small>340.24USD</small>
                                <small className='flex ml-4'>
                                    <AiOutlineArrowUp className='text-red-500'></AiOutlineArrowUp> <h3 className='text-red-500'>-10.5</h3>
                                </small>
                            </span>
                        </div>
                        <div>
                        <BsGraphDownArrow style={{fontSize:"2.5rem"}} className='text-red-500'></BsGraphDownArrow>
                        </div>
                    </div>
                </article>

            </div>
        </div>
    );
};

export default LivePriceCard;