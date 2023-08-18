import React from 'react';
import { FaPiggyBank } from 'react-icons/fa';
import { FcRight } from 'react-icons/fc';
import { SiCommerzbank, SiSoundcharts } from 'react-icons/si';
// import { HiMiniReceiptRefund } from 'react-icons/hi';


const OfferService = () => {
    return (
        <div className='text-center container mx-auto flex-1 w-'>
            <p className='text-red-400 mt-12'>OUR SERVICE PLANE</p>
            <h1 className='text-4xl font-bold mt-4'>The Best service We Offer</h1>
            <p className='mt-4'>Join us in embracing the digital revolution and explore a world of endless possibilities with<br/>our all-encompassing cryptocurrency service offer.</p>
            <article className='flex justify-center gap-4 mt-12 p-2'>
                <div className='grid justify-items-center border-2 shadow-md shadow-red-50 hover:bg-red-600 rounded-lg p-4'>
                    <FaPiggyBank style={{fontSize:"2.5rem"}}></FaPiggyBank>
                    <h4 className='text-2xl font-semibold'>Investing</h4>
                    <p>Maximize wealth potential informed cryptocurrency investment decisions today.</p>
                    <FcRight style={{fontSize:"2rem"}}></FcRight>
                </div>

                <div className='grid justify-items-center border-2 shadow-md shadow-red-50 hover:bg-red-600 rounded-lg p-4'>
                    <SiSoundcharts style={{fontSize:"2.5rem"}}></SiSoundcharts>
                    <h4 className='text-2xl font-semibold'>Trading</h4>
                    <p>Navigate crypto markets wisely; trade digital assets confidently for potential gains.</p>
                    <FcRight style={{fontSize:"2rem"}}></FcRight>
                </div>

                <div className='grid justify-items-center border-2 shadow-md shadow-red-50 hover:bg-red-600 rounded-lg p-4'>
                    {/* <HiMiniReceiptRefund></HiMiniReceiptRefund> */}
                    <SiCommerzbank style={{fontSize:"2.5rem"}}></SiCommerzbank>
                    <h4 className='text-2xl font-semibold'>Mutual Fund</h4>
                    <p>Diversify crypto holdings through a managed mutual fund for balanced growth.</p>
                    <FcRight style={{fontSize:"2rem"}}></FcRight>
                </div>
            </article>
        </div>
    );
};

export default OfferService;