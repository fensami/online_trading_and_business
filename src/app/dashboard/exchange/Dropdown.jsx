"use client"
import React, { useState } from 'react';
import { BiBitcoin } from 'react-icons/bi';
import { SiBinance } from 'react-icons/si';
import { FaEthereum, FaMonero } from 'react-icons/fa';


const DropdownMenu = () => {
    const [selectedItem, setSelectedItem] = useState({});

    const menuItems = [
        { value: 'Bitcoin', label: 'BTC/USDT', method: 'Bitcoin', Icon: <BiBitcoin /> },
        { value: 'Bitcoin', label: 'BNB/USDT', method: 'Bitcoin', Icon: <SiBinance /> },
        { value: 'DigiByte', label: 'DGB/USDT', method: 'DigiByte', Icon: <BiBitcoin /> },
        { value: 'Ethereum', label: 'ETC/USDT', method: 'Ethereum', Icon: <FaEthereum /> },
        { value: 'Monero', label: 'MNC/USDT', method: 'Monero', Icon: <FaMonero /> },
    ];

    const handleMenuItemChange = (event) => {
        const selectedValue = event.target.value;
        const selectedObject = menuItems.find(item => item.value === selectedValue);
        setSelectedItem(selectedObject);
    };

    console.log(selectedItem);

    return (
        <div>
            <select
                style={{ background: 'none', }}
                id="menu"
                onChange={handleMenuItemChange}
                value={selectedItem.value || ''}
            >
                {menuItems.map(item => (
                    <option style={{ background: 'none', color: "black" }} key={item.value} value={item.value}>
                        {item.label}
                        - {item.method}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default DropdownMenu;
