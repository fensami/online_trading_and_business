import React, { useState } from 'react';
import t1 from "../../assets/tab5.1.png"
import t2 from "../../assets/tab1.webp"
import t3 from "../../assets/tab2.png"
import t4 from "../../assets/tab3.jpg"
import t5 from "../../assets/tab4.jpg"
import t6 from "../../assets/t6_copy_1280x640.png"
import Image from 'next/image';

const TAbSection = () => {

    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
    };
    const [activeTab1, setActiveTab1] = useState(1);

    const handleTabClick1 = (tabIndex) => {
        setActiveTab1(tabIndex);
    };
    const [activeTab2, setActiveTab2] = useState(1);

    const handleTabClick2 = (tabIndex) => {
        setActiveTab2(tabIndex);
    };
    const [activeTab3, setActiveTab3] = useState(1);

    const handleTabClick3 = (tabIndex) => {
        setActiveTab3(tabIndex);
    };

    return (

        <div className="max-w-2xl mx-auto p-4 mt-24">
            <h1 className='md:text-4xl text-2xl font-semibold md:font-bold mb-20 text-center'>Live Market Gainers and Losers Tracking</h1>
            <div className="bg-[#171f2a] shadow-md rounded-md">
                {/* Tabs */}
                <div className="flex space-x-4">
                    <button
                        className={`px-4 py-3 ${activeTab === 1 ? 'bg-[#212b39] text-white' : 'text-gray-600'
                            }`}
                        onClick={() => handleTabClick(1)}
                    >
                        Active
                    </button>
                    <button
                        className={`px-4 py-3 ${activeTab === 2 ? 'bg-[#212b39] text-white' : 'text-gray-600'
                            }`}
                        onClick={() => handleTabClick(2)}
                    >
                        Gainers
                    </button>
                    <button
                        className={`px-4 py-3 ${activeTab === 3 ? 'bg-[#212b39] text-white' : 'text-gray-600'
                            }`}
                        onClick={() => handleTabClick(3)}
                    >
                        Loser
                    </button>
                    {/* Add more tabs if needed */}
                </div>

                {/* Content */}
                <div className="p-4">
                    {activeTab === 1 && (
                        <div className="">
                            {/* Content */}
                            <div className="p-4">
                                {activeTab1 === 1 && (
                                    <div>
                                        {/* Content for Tab 1 */}
                                        <Image src={t1} alt=''></Image>
                                    </div>
                                )}
                                {activeTab1 === 2 && (
                                    <div>
                                        {/* Content for Tab 2 */}
                                        <Image src={t2} alt=''></Image>
                                    </div>
                                )}
                                {activeTab1 === 3 && (
                                    <div>
                                        {/* Content for Tab 2 */}
                                        <Image src={t3} alt=''></Image>
                                    </div>
                                )}
                                {activeTab1 === 4 && (
                                    <div>
                                        {/* Content for Tab 2 */}
                                        <Image src={t4} alt=''></Image>
                                    </div>
                                )}
                                {activeTab1 === 5 && (
                                    <div>
                                        {/* Content for Tab 2 */}
                                        <Image src={t5} alt=''></Image>
                                    </div>
                                )}
                                {activeTab1 === 6 && (
                                    <div>
                                        {/* Content for Tab 2 */}
                                        <Image src={t6} alt=''></Image>
                                    </div>
                                )}

                            </div>
                            {/* Tabs */}
                            <div className="md:flex md:space-x-4 grid grid-cols-4">
                                {/* <Image src={t1} alt=''></Image> */}
                                <button
                                    className={`px-4 py-2 ${activeTab1 === 1 ? 'bg-[#212b39] text-white' : 'text-gray-600'
                                        }`}
                                    onClick={() => handleTabClick1(1)}
                                >
                                    1D
                                </button>

                                <button
                                    className={`px-4 py-2 ${activeTab1 === 2 ? 'bg-[#212b39] text-white' : 'text-gray-600'
                                        }`}
                                    onClick={() => handleTabClick1(2)}
                                >
                                    1M
                                </button>
                                <button
                                    className={`px-4 py-2 ${activeTab1 === 3 ? 'bg-[#212b39] text-white' : 'text-gray-600'
                                        }`}
                                    onClick={() => handleTabClick1(3)}
                                >
                                    3M
                                </button>
                                <button
                                    className={`px-4 py-2 ${activeTab1 === 4 ? 'bg-[#212b39] text-white' : 'text-gray-600'
                                        }`}
                                    onClick={() => handleTabClick1(4)}
                                >
                                    1Y
                                </button>
                                <button
                                    className={`px-4 py-2 ${activeTab1 === 5 ? 'bg-[#212b39] text-white' : 'text-gray-600'
                                        }`}
                                    onClick={() => handleTabClick1(5)}
                                >
                                    5Y
                                </button>
                                <button
                                    className={`px-4 py-2 ${activeTab1 === 6 ? 'bg-[#212b39] text-white' : 'text-gray-600'
                                        }`}
                                    onClick={() => handleTabClick1(6)}
                                >
                                    All
                                </button>
                                {/* Add more tabs if needed */}
                            </div>
                            <table className="table">

                                <tbody>
                                    {/* row 1 */}
                                    <tr className='flex justify-between'>
                                        <td className="grid">
                                            <span>TSLA<sup className="text-orange-400">D_</sup></span>
                                            <span><small>Tesla, Inc.</small></span>
                                        </td>
                                        <td className="grid justify-items-end">
                                            <span>256.49</span>
                                            <span className='flex gap-2'>
                                                <small className="text-green-600">+11.48</small>
                                                <small className="text-green-600">+4.69%</small>
                                            </span>
                                        </td>
                                    </tr>
                                    {/* row 2 */}
                                    <tr className='flex justify-between'>
                                        <td className="grid">
                                            <span>VERB<sup className="text-orange-400">D_</sup></span>
                                            <span><small>Verb Technology Company, Inc.</small></span>
                                        </td>
                                        <td className="grid justify-items-end">
                                            <span>3.20</span>
                                            <span className='flex gap-2'>
                                                <small className="text-green-600">+2.48</small>
                                                <small className="text-green-600">+347.24%</small>
                                            </span>
                                        </td>
                                    </tr>
                                    {/* row 3 */}
                                    <tr className='flex justify-between'>
                                        <td className="grid">
                                            <span>TLRY<sup className="text-orange-400">D_</sup></span>
                                            <span><small>Tilray Brands, Inc.</small></span>
                                        </td>
                                        <td className="grid justify-items-end">
                                            <span>3.09</span>
                                            <span className='flex gap-2'>
                                                <small className="text-green-600">+0.10</small>
                                                <small className="text-green-600">+3.34%</small>
                                            </span>
                                        </td>
                                    </tr>
                                    {/* row 4 */}
                                    <tr className='flex justify-between'>
                                        <td className="grid">
                                            <span>AMD<sup className="text-orange-400">D_</sup></span>
                                            <span><small>Advanced Micro Devices Inc</small></span>
                                        </td>
                                        <td className="grid justify-items-end">
                                            <span>110.78</span>
                                            <span className='flex gap-2'>
                                                <small className="text-green-600">+1.33</small>
                                                <small className="text-green-600">+1.22%</small>
                                            </span>
                                        </td>
                                    </tr>
                                    {/* row 5 */}
                                    <tr className='flex justify-between'>
                                        <td className="grid">
                                            <span>BAC<sup className="text-orange-400">D_</sup></span>
                                            <span><small>Bank of America Corporation</small></span>
                                        </td>
                                        <td className="grid justify-items-end">
                                            <span>28.65</span>
                                            <span className='flex gap-2'>
                                                <small className="text-red-500">−0.33</small>
                                                <small className="text-red-500">−1.14%</small>
                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )}
                    {activeTab === 2 && (
                        <div className="">
                            <div className="p-4">
                                {activeTab2 === 1 && (
                                    <div>
                                        {/* Content for Tab 1 */}
                                        <Image src={t3} alt=''></Image>
                                    </div>
                                )}
                                {activeTab2 === 2 && (
                                    <div>
                                        {/* Content for Tab 2 */}
                                        <Image width={300} height={300} src={t6} alt=''></Image>
                                    </div>
                                )}
                                {activeTab2 === 3 && (
                                    <div>
                                        {/* Content for Tab 2 */}
                                        <Image src={t5} alt=''></Image>
                                    </div>
                                )}
                                {activeTab2 === 4 && (
                                    <div>
                                        {/* Content for Tab 2 */}
                                        <Image src={t2} alt=''></Image>
                                    </div>
                                )}
                                {activeTab2 === 5 && (
                                    <div>
                                        {/* Content for Tab 2 */}
                                        <Image src={t1} alt=''></Image>
                                    </div>
                                )}
                                {activeTab2 === 6 && (
                                    <div>
                                        {/* Content for Tab 2 */}
                                        <Image src={t4} alt=''></Image>
                                    </div>
                                )}

                            </div>
                            <div className="flex space-x-4">
                                <button
                                    className={`px-4 py-2 ${activeTab2 === 1 ? 'bg-[#212b39] text-white' : 'text-gray-600'
                                        }`}
                                    onClick={() => handleTabClick2(1)}
                                >
                                    1D
                                </button>
                                <button
                                    className={`px-4 py-2 ${activeTab2 === 2 ? 'bg-[#212b39] text-white' : 'text-gray-600'
                                        }`}
                                    onClick={() => handleTabClick2(2)}
                                >
                                    1M
                                </button>
                                <button
                                    className={`px-4 py-2 ${activeTab2 === 3 ? 'bg-[#212b39] text-white' : 'text-gray-600'
                                        }`}
                                    onClick={() => handleTabClick2(3)}
                                >
                                    3M
                                </button>
                                <button
                                    className={`px-4 py-2 ${activeTab2 === 4 ? 'bg-[#212b39] text-white' : 'text-gray-600'
                                        }`}
                                    onClick={() => handleTabClick2(4)}
                                >
                                    1Y
                                </button>
                                <button
                                    className={`px-4 py-2 ${activeTab2 === 5 ? 'bg-[#212b39] text-white' : 'text-gray-600'
                                        }`}
                                    onClick={() => handleTabClick2(5)}
                                >
                                    5Y
                                </button>
                                <button
                                    className={`px-4 py-2 ${activeTab2 === 6 ? 'bg-[#212b39] text-white' : 'text-gray-600'
                                        }`}
                                    onClick={() => handleTabClick2(6)}
                                >
                                    All
                                </button>
                                {/* Add more tabs if needed */}
                            </div>
                            <table className="table">

                                <tbody>
                                    {/* row 1 */}
                                    <tr className='flex justify-between'>
                                        <td className="grid">
                                            <span>VERB<sup className="text-orange-400">D_</sup></span>
                                            <span><small>Verb Technology Company, Inc.</small></span>
                                        </td>
                                        <td className="grid justify-items-end">
                                            <span>3.20</span>
                                            <span className='flex gap-2'>
                                                <small className="text-green-600">+2.48</small>
                                                <small className="text-green-600">+347.24%</small>
                                            </span>
                                        </td>
                                    </tr>
                                    {/* row 2 */}
                                    <tr className='flex justify-between'>
                                        <td className="grid">
                                            <span>GDC<sup className="text-orange-400">D_</sup></span>
                                            <span><small>GD Culture Group Limited</small></span>
                                        </td>
                                        <td className="grid justify-items-end">
                                            <span>4.95</span>
                                            <span className='flex gap-2'>
                                                <small className="text-green-600">+1.15</small>
                                                <small className="text-green-600">+30.26%</small>
                                            </span>
                                        </td>
                                    </tr>
                                    {/* row 3 */}
                                    <tr className='flex justify-between'>
                                        <td className="grid">
                                            <span>ARTL<sup className="text-orange-400">D_</sup></span>
                                            <span><small>Artelo Biosciences, Inc.</small></span>
                                        </td>
                                        <td className="grid justify-items-end">
                                            <span>2.35</span>
                                            <span className='flex gap-2'>
                                                <small className="text-green-600">+0.50</small>
                                                <small className="text-green-600">+27.03%</small>
                                            </span>
                                        </td>
                                    </tr>
                                    {/* row 4 */}
                                    <tr className='flex justify-between'>
                                        <td className="grid">
                                            <span>HHRS<sup className="text-orange-400">D_</sup></span>
                                            <span><small>Hammerhead Energy Inc.</small></span>
                                        </td>
                                        <td className="grid justify-items-end">
                                            <span>13.15</span>
                                            <span className='flex gap-2'>
                                                <small className="text-green-600">+2.34</small>
                                                <small className="text-green-600">+21.65%</small>
                                            </span>
                                        </td>
                                    </tr>
                                    {/* row 5 */}
                                    <tr className='flex justify-between'>
                                        <td className="grid">
                                            <span>AVAV<sup className="text-orange-400">D_</sup></span>
                                            <span><small>AeroVironment, Inc.</small></span>
                                        </td>
                                        <td className="grid justify-items-end">
                                            <span>115.05</span>
                                            <span className='flex gap-2'>
                                                <small className="text-green-600">+19.76</small>
                                                <small className="text-green-600">+4.69%</small>
                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )}
                    {activeTab === 3 && (
                        <div className="">
                            <div className="p-4">
                                {activeTab3 === 1 && (
                                    <div>
                                        {/* Content for Tab 1 */}
                                        <Image src={t5} alt=''></Image>
                                    </div>
                                )}
                                {activeTab3 === 2 && (
                                    <div>
                                        {/* Content for Tab 2 */}
                                        <Image src={t3} alt=''></Image>
                                    </div>
                                )}
                                {activeTab3 === 3 && (
                                    <div>
                                        {/* Content for Tab 2 */}
                                        <Image src={t4} alt=''></Image>
                                    </div>
                                )}
                                {activeTab3 === 4 && (
                                    <div>
                                        {/* Content for Tab 2 */}
                                        <Image src={t1} alt=''></Image>
                                    </div>
                                )}
                                {activeTab3 === 5 && (
                                    <div>
                                        {/* Content for Tab 2 */}
                                        <Image src={t6} alt=''></Image>
                                    </div>
                                )}
                                {activeTab3 === 6 && (
                                    <div>
                                        {/* Content for Tab 2 */}
                                        <Image src={t2} alt=''></Image>
                                    </div>
                                )}

                            </div>
                            <div className="flex space-x-4">
                                <button
                                    className={`px-4 py-2 ${activeTab3 === 1 ? 'bg-[#212b39] text-white' : 'text-gray-600'
                                        }`}
                                    onClick={() => handleTabClick3(1)}
                                >
                                    1D
                                </button>
                                <button
                                    className={`px-4 py-2 ${activeTab3 === 2 ? 'bg-[#212b39] text-white' : 'text-gray-600'
                                        }`}
                                    onClick={() => handleTabClick3(2)}
                                >
                                    1M
                                </button>
                                <button
                                    className={`px-4 py-2 ${activeTab3 === 3 ? 'bg-[#212b39] text-white' : 'text-gray-600'
                                        }`}
                                    onClick={() => handleTabClick3(3)}
                                >
                                    3M
                                </button>
                                <button
                                    className={`px-4 py-2 ${activeTab3 === 4 ? 'bg-[#212b39] text-white' : 'text-gray-600'
                                        }`}
                                    onClick={() => handleTabClick3(4)}
                                >
                                    1Y
                                </button>
                                <button
                                    className={`px-4 py-2 ${activeTab3 === 5 ? 'bg-[#212b39] text-white' : 'text-gray-600'
                                        }`}
                                    onClick={() => handleTabClick3(5)}
                                >
                                    5Y
                                </button>
                                <button
                                    className={`px-4 py-2 ${activeTab3 === 6 ? 'bg-[#212b39] text-white' : 'text-gray-600'
                                        }`}
                                    onClick={() => handleTabClick3(6)}
                                >
                                    All
                                </button>
                                {/* Add more tabs if needed */}
                            </div>
                            <table className="table">

                                <tbody>
                                    {/* row 1 */}
                                    <tr className='flex justify-between'>
                                        <td className="grid">
                                            <span>HKIT<sup className="text-orange-400">D_</sup></span>
                                            <span><small>Hitek Global Inc.</small></span>
                                        </td>
                                        <td className="grid justify-items-end">
                                            <span>3.60</span>
                                            <span className='flex gap-2'>
                                                <small className="text-red-500">−23.76</small>
                                                <small className="text-red-500">−86.84%</small>
                                            </span>
                                        </td>
                                    </tr>
                                    {/* row 2 */}
                                    <tr className='flex justify-between'>
                                        <td className="grid">
                                            <span>AMC<sup className="text-orange-400">D_</sup></span>
                                            <span><small>AMC Entertainment Holdings, Inc.</small></span>
                                        </td>
                                        <td className="grid justify-items-end">
                                            <span>8.62</span>
                                            <span className='flex gap-2'>
                                                <small className="text-red-500">−5.02</small>
                                                <small className="text-red-500">−36.80%</small>
                                            </span>
                                        </td>
                                    </tr>
                                    {/* row 3 */}
                                    <tr className='flex justify-between'>
                                        <td className="grid">
                                            <span>HLGN<sup className="text-orange-400">D_</sup></span>
                                            <span><small>Heliogen, Inc.</small></span>
                                        </td>
                                        <td className="grid justify-items-end">
                                            <span>6.22</span>
                                            <span className='flex gap-2'>
                                                <small className="text-red-500">−2.25</small>
                                                <small className="text-red-500">−26.56%</small>
                                            </span>
                                        </td>
                                    </tr>
                                    {/* row 4 */}
                                    <tr className='flex justify-between'>
                                        <td className="grid">
                                            <span>OSTK<sup className="text-orange-400">D_</sup></span>
                                            <span><small>Overstock.com, Inc.</small></span>
                                        </td>
                                        <td className="grid justify-items-end">
                                            <span>20.99</span>
                                            <span className='flex gap-2'>
                                                <small className="text-red-500">−6.44</small>
                                                <small className="text-red-500">−23.48%</small>
                                            </span>
                                        </td>
                                    </tr>
                                    {/* row 5 */}
                                    <tr className='flex justify-between'>
                                        <td className="grid">
                                            <span>CLBR<sup className="text-orange-400">D_</sup></span>
                                            <span><small>Clever Leaves Holdings Inc.</small></span>
                                        </td>
                                        <td className="grid justify-items-end">
                                            <span>3.21</span>
                                            <span className='flex gap-2'>
                                                <small className="text-red-500">-11.48</small>
                                                <small className="text-red-500">-4.69%</small>
                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )}
                    {/* Add more tab content if needed */}
                </div>
            </div>
        </div>

    );
};

export default TAbSection;