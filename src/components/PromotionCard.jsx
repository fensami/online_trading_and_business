/* eslint-disable jsx-a11y/alt-text */
 
import React from 'react';
import Image from "next/image";
import { FaArrowRight } from 'react-icons/fa';

const PromotionCard = ({promotion}) => {
        const {name, description, image} = promotion;
        return (
                <div>
                   <div className="card bg-slate-500 card-compact h-[450px]   shadow-xl">
  <figure> <Image width={600} height={400} src={image}></Image> </figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <button className="bg-green-400 px-6 py-2 flex items-center hover:bg-blue-400 rounded-md ">Deposite Bitcoin <FaArrowRight/> </button>
      
    </div>
  </div>
</div>
                </div>
        );
};

export default PromotionCard;