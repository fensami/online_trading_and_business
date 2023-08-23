/* eslint-disable jsx-a11y/alt-text */
'use client' 
import React from 'react';
 
import Image from "next/image";
import { FaArrowRight } from 'react-icons/fa';

const PromotionCard = ({cardpromoton}) => { 
        const {name,description,image} = cardpromoton;
        return (
             <div> 
                <div className='my-5'>
                   <div className="card h-80 bg-[#171f2a] card-compact shadow-xl">
  <figure className='h-40'> <Image width={500} height={400} src={image}></Image> </figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <button className="bg-gray-600 px-6 py-2 flex items-center hover:bg-blue-600 rounded-md ">Deposite Bitcoin <FaArrowRight/> </button>
      
    </div>
  </div>
</div>
                </div>
          </div>
        );
};

export default PromotionCard;