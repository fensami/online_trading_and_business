import React from 'react';
import Marquee from 'react-fast-marquee';
import coin from '../../../public/Bitcoin.png'
import Image from 'next/image';

const MarqueeCard = () => {
        return (

                <div className='w-[90%] mx-auto'>
                        <Marquee className=' bg-[#171f2a] my-12 border border-slate-700 h-28' pauseOnHover={true}>
                                <div className='ml-2 hover:bg-slate-800 p-5 border-r-2 border-slate-700'>
                                        <div className='flex items-center justify-evenly mb-3'>
                                                <Image className='h-6 w-6' src={coin} alt=''></Image>
                                                <h1>Bitcoin</h1>
                                        </div>
                                        <p>4543.0799</p>
                                        <p className='text-orange-500'>+0947.0087(-887%)</p>
                                </div>
                                <div className='ml-2 hover:bg-slate-800 p-5 border-r-2 border-slate-700'>
                                        <div className='flex items-center justify-evenly mb-3'>
                                                <Image className='h-6 w-6' src={coin} alt=''></Image>
                                                <h1>Bitcoin</h1>
                                        </div>
                                        <p>4543.0799</p>
                                        <p className='text-orange-500'>+0947.0087(-887%)</p>
                                </div>
                                <div className='ml-2 hover:bg-slate-800 p-5 border-r-2 border-slate-700'>
                                        <div className='flex items-center justify-evenly mb-3'>
                                                <Image className='h-6 w-6' src={coin} alt=''></Image>
                                                <h1>Bitcoin</h1>
                                        </div>
                                        <p>4543.0799</p>
                                        <p className='text-orange-500'>+0947.0087(-887%)</p>
                                </div>
                                <div className='ml-2 hover:bg-slate-800 p-5 border-r-2 border-slate-700'>
                                        <div className='flex items-center justify-evenly mb-3'>
                                                <Image className='h-6 w-6' src={coin} alt=''></Image>
                                                <h1>Bitcoin</h1>
                                        </div>
                                        <p>4543.0799</p>
                                        <p className='text-orange-500'>+0947.0087(-887%)</p>
                                </div>
                                <div className='ml-2 hover:bg-slate-800 p-5 border-r-2 border-slate-700'>
                                        <div className='flex items-center justify-evenly mb-3'>
                                                <Image className='h-6 w-6' src={coin} alt=''></Image>
                                                <h1>Bitcoin</h1>
                                        </div>
                                        <p>4543.0799</p>
                                        <p className='text-orange-500'>+0947.0087(-887%)</p>
                                </div>
                                <div className='ml-2 hover:bg-slate-800 p-5 border-r-2 border-slate-700'>
                                        <div className='flex items-center justify-evenly mb-3'>
                                                <Image className='h-6 w-6' src={coin} alt=''></Image>
                                                <h1>Bitcoin</h1>
                                        </div>
                                        <p>4543.0799</p>
                                        <p className='text-orange-500'>+0947.0087(-887%)</p>
                                </div>
                                <div className='ml-2 hover:bg-slate-800 p-5 border-r-2 border-slate-700'>
                                        <div className='flex items-center justify-evenly mb-3'>
                                                <Image className='h-6 w-6' src={coin} alt=''></Image>
                                                <h1>Bitcoin</h1>
                                        </div>
                                        <p>4543.0799</p>
                                        <p className='text-orange-500'>+0947.0087(-887%)</p>
                                </div>
                                <div className='ml-2 hover:bg-slate-800 p-5 border-r-2 border-slate-700'>
                                        <div className='flex items-center justify-evenly mb-3'>
                                                <Image className='h-6 w-6' src={coin} alt=''></Image>
                                                <h1>Bitcoin</h1>
                                        </div>
                                        <p>4543.0799</p>
                                        <p className='text-orange-500'>+0947.0087(-887%)</p>
                                </div>
                                <div className='ml-2 hover:bg-slate-800 p-5 border-r-2 border-slate-700'>
                                        <div className='flex items-center justify-evenly mb-3'>
                                                <Image className='h-6 w-6' src={coin} alt=''></Image>
                                                <h1>Bitcoin</h1>
                                        </div>
                                        <p>4543.0799</p>
                                        <p className='text-orange-500'>+0947.0087(-887%)</p>
                                </div>
                                <div className='ml-2 hover:bg-slate-800 p-5 border-r-2 border-slate-700'>
                                        <div className='flex items-center justify-evenly mb-3'>
                                                <Image className='h-6 w-6' src={coin} alt=''></Image>
                                                <h1>Bitcoin</h1>
                                        </div>
                                        <p>4543.0799</p>
                                        <p className='text-orange-500'>+0947.0087(-887%)</p>
                                </div>
                                <div className='ml-2 hover:bg-slate-800 p-5 border-r-2 border-slate-700'>
                                        <div className='flex items-center justify-evenly mb-3'>
                                                <Image className='h-6 w-6' src={coin} alt=''></Image>
                                                <h1>Bitcoin</h1>
                                        </div>
                                        <p>4543.0799</p>
                                        <p className='text-orange-500'>+0947.0087(-887%)</p>
                                </div>
                                <div className='ml-2 hover:bg-slate-800 p-5 border-r-2 border-slate-700'>
                                        <div className='flex items-center justify-evenly mb-3'>
                                                <Image className='h-6 w-6' src={coin} alt=''></Image>
                                                <h1>Bitcoin</h1>
                                        </div>
                                        <p>4543.0799</p>
                                        <p className='text-orange-500'>+0947.0087(-887%)</p>
                                </div>

                        </Marquee>
                </div>
        );
};

export default MarqueeCard;