"use client"
import Image from 'next/image';


const WalletTable = ({ wallete }) => {
  // console.log(wallete)
  console.log(wallete)
  const { coin_name, order, available_balance, total_balance
    , market, id } = wallete;

  return (
    <>


      <tr>
        <td className='flex gap-1 items-center'> <Image className='rounded-full' height={30} width={30} src="https://i.ibb.co/wwvDH9X/Bitcoin.png" alt=''></Image> {coin_name}</td>
        <td>${order}</td>
        <td>${available_balance}</td>
        <td>${total_balance}</td>
        <td className='text-orange-300'>{market}</td>

      </tr>
    </>
  );
};

export default WalletTable;