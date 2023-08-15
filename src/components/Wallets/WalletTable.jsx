import Image from 'next/image';
import React from 'react';
import bitcoin from '../../../public/Bitcoin.png'

      
        const WalletTable = ({walletedata}) => {
    const {coin_name, order, available_balance, total_balance, market}= walletedata;
        return (
                <>
                
      <tr>
        <td className='flex gap-1 items-center'> <Image className='rounded-full' height={30} width={30} src= {bitcoin} alt=''></Image> {coin_name}</td>
        <td>${order}</td>
        <td>${available_balance}</td>
        <td>${total_balance}</td>
        <td className='text-orange-300'>{market}</td>
         
      </tr>  
                </>
        );
};

export default WalletTable;