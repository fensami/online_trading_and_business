"use client"
import Image from 'next/image';
import { useEffect, useState } from 'react';
import bitcoin from '../../../public/Bitcoin.png'

      
        const WalletTable = () => {
//     const {coin_name, order, available_balance, total_balance, market}= walletedata;
const [wallets, setWallets] = useState([])

        useEffect(()=> {
          const getWallets = async()=> {
            fetch('http://localhost:3000/api/wallets')
            .then((res) => res.json())
            .then((data) => {
                setWallets(data)
            })
          }
          getWallets();
        },[])

        const walletsData = wallets;
        console.log("walletsdasta kaku", walletsData);



        return (
                <>
               {
                wallets.map((wallet, index) => <div key={index}>
                       <tr>
        <td className='flex gap-1 items-center'> 
        <Image className='rounded-full' height={30} width={30} src= {wallet.image} alt=''></Image> {}</td>
        <td>${wallet.order}</td>
        <td>${wallet.available_balance}</td>
        <td>${wallet.total_balance}</td>
        <td className='text-orange-300'>{}</td>
         
      </tr>  
                </div>)
               }
                
      {/* <tr>
        <td className='flex gap-1 items-center'> <Image className='rounded-full' height={30} width={30} src= {bitcoin} alt=''></Image> {}</td>
        <td>${order}</td>
        <td>${available_balance}</td>
        <td>${total_balance}</td>
        <td className='text-orange-300'>{}</td>
         
      </tr>   */}
                </>
        );
};

export default WalletTable;