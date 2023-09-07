import React, { useState } from 'react';
import t1 from "../../assets/tab5.png"
import t2 from "../../assets/tab1.webp"
import t3 from "../../assets/tab2.png"
import t4 from "../../assets/tab3.jpg"
import t5 from "../../assets/tab4.jpg"
import Image from 'next/image';

const TabSection1 = () => {

    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
    }

    return (
        <div className="max-w-3xl mx-auto p-4">
            <div className="bg-white shadow-md rounded-md">
                {/* Tabs */}
                <div className="flex space-x-4">
                    <button
                        className={`px-4 py-2 ${activeTab === 1 ? 'bg-[#212b39] text-white' : 'text-gray-600'
                            }`}
                        onClick={() => handleTabClick(1)}
                    >
                        Active
                    </button>
                    <button
                        className={`px-4 py-2 ${activeTab === 2 ? 'bg-[#212b39] text-white' : 'text-gray-600'
                            }`}
                        onClick={() => handleTabClick(2)}
                    >
                        Gainers
                    </button>
                    <button
                        className={`px-4 py-2 ${activeTab === 3 ? 'bg-[#212b39] text-white' : 'text-gray-600'
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
                        <div>
                            {/* Content for Tab 1 */}
                            <p>Tab 1 Content Goes Here</p>
                        </div>
                    )}
                    {activeTab === 2 && (
                        <div>
                            {/* Content for Tab 2 */}
                            <p>Tab 2 Content Goes Here</p>
                        </div>
                    )}
                    {activeTab === 3 && (
                        <div>
                            {/* Content for Tab 2 */}
                            <p>Tab 3 Content Goes Here</p>
                        </div>
                    )}
                    {/* Add more tab content if needed */}
                </div>
            </div>
        </div>
    );
};

export default TabSection1;