import Image from 'next/image';
import React from 'react';

const CardSlider = () => {
    return (
        <div>
            <div className='flex flex-row gap-5 py-3  overflow-x-auto'>
                <>

                    <Image className='rounded-lg' width={300} height={300} src='https://cdn.coingape.com/wp-content/uploads/2020/09/14115401/bnb.jpg' alt=''></Image>
                    {/* <p className='absolute top-0 left-0 '>Bitcoin</p> */}


                </>
                <>
                    <Image className='rounded-lg' width={300} height={300} src='https://cdn.coingape.com/wp-content/uploads/2020/09/14115401/bnb.jpg' alt=''></Image>

                </>

                <>
                    <Image className='rounded-lg' width={300} height={300} src='https://cdn.coingape.com/wp-content/uploads/2020/09/14115401/bnb.jpg' alt=''></Image>

                </>


            </div>
        </div>
    );
};

export default CardSlider;