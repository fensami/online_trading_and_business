import Image from 'next/image';
import React from 'react';
import img1 from '../../assets/Bitcoin.webp'
import img2 from "../../assets/images.jpg";
import img3 from "../../assets/Crypto.png"
import img4 from "../../assets/pic.webp"

const OtherSection = () => {
    return (
        <div className='mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-4 container mx-auto mb-24 p-4'>
            <div className="card md:w-72 w-full bg-base-100 shadow-xl image-full">
                <figure><Image width={300} height={300} src="https://i.ibb.co/YQT8Lyx/Bitcoin.webp" alt="" /></figure>
                <div className="card-body hover:bg-[#171f2a]">
                    <h2 className="card-title text-3xl font-bold">Wide Product Range</h2>
                    <p className='font-bold bg-gray-500 rounded-lg p-2'>Diverse crypto offerings enable extensive trading options and investment opportunities.</p>
                    {/* <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div> */}
                </div>
            </div>
            <div className="card md:w-72 w-full bg-base-100 shadow-xl image-full">
                <figure><Image width={300} height={300} src="https://i.ibb.co/ssPs8cL/images.jpg" alt="" /></figure>
                <div className="card-body hover:bg-[#171f2a]">
                    <h2 className="card-title text-3xl font-bold">Transparent Pricing</h2>
                    <p className='font-bold bg-gray-500 rounded-lg p-2'>Visible crypto values ensure fairness, honesty, and well-informed trading choices.</p>
                    {/* <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div> */}
                </div>
            </div>
            <div className="card md:w-72 w-full bg-base-100 shadow-xl image-full">
                <figure><Image width={300} height={300} src="https://i.ibb.co/tmHVk4Z/Crypto.png" alt="" /></figure>
                <div className="card-body hover:bg-[#171f2a]">
                    <h2 className="card-title text-3xl font-bold">Innovactive Tools</h2>
                    <p className='font-bold bg-gray-500 rounded-lg p-2'>Tech aids like AI analysis, algorithmic trading enhance cryptocurrency market participation.</p>
                    {/* <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div> */}
                </div>
            </div>
            <div className="card md:w-72 w-full bg-base-100 shadow-xl image-full">
                <figure><Image width={300} height={300} src="https://i.ibb.co/vdyMYkw/pic.webp" alt="" /></figure>
                <div className="card-body hover:bg-[#171f2a]">
                    <h2 className="card-title text-3xl font-bold">Dedicated Support</h2>
                    <p className='font-bold bg-gray-500 rounded-lg p-2'>Expert assistance ensures smooth transactions and issue resolution in cryptocurrency trading.</p>
                    {/* <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default OtherSection;