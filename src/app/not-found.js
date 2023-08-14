/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Image from "next/image";
import img from "../../public/e2.jpg"

const NotFound = () => {
    return (
        <div>
            <Image className='align-middle text-center' src={img} alt=''></Image>
        </div>
    );
};

export default NotFound