/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Image from "next/image";
import img from "../assets/e2.jpg"

const NotFound = () => {
    return (
        <div>
            <Image className='align-middle text-center' height={400} width={400} src={img} alt=''></Image>
        </div>
    );
};

export default NotFound