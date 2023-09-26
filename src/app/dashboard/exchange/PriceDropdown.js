"use client"
import React, { useState } from 'react';

const priceData = [
    "$1500",
    "$1300",
    "$1000",
    // Add more prices...
];

const PriceDropdown = () => {
    const [selectedPrice, setSelectedPrice] = useState('');

    const handlePriceChange = (event) => {
        setSelectedPrice(event.target.value);
    };

    return (
        <div>
            <select
                className='bg-transparent'
                onChange={handlePriceChange}
                value={selectedPrice}>

                {priceData.map((price, index) => (
                    <option style={{ background: 'none', color: "black" }} key={index} value={price}>
                        {price}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default PriceDropdown;
