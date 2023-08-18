import getpromotiondata from '@/utils/getpromotiondata';
import PromotionCard from './PromotionCard';
  
 
const PromotionPage = async () => {
        // const promotions = await getpromotiondata(); 

        const promotions =   [
                {
                  "name": "Bitcoin",
                  "description": "A platform for trading Bitcoin and other",
                  "image": "https://plus.unsplash.com/premium_photo-1675083923190-387d05e8fe12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=327&q=80"
                },
                {
                  "name": "Bitcoin Wallet",
                  "description": "A digital wallet for storing Bitcoin.",
                  "image": "https://images.unsplash.com/photo-1658225282648-b199eb2a4830?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=838&q=80"
                },
                {
                  "name": "Bitcoin Mining",
                  "description": "The process of validating transactions on the Bitcoin network.",
                  "image": "https://images.unsplash.com/photo-1657525641283-76b45d0534ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=753&q=80"
                },
                {
                  "name": "Bitcoin Exchange",
                  "description": "A platform for trading Bitcoin and other cryptocurrencies.",
                  "image": "https://images.unsplash.com/photo-1651054558996-03455fe2702f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80"
                },
                {
                  "name": "Bitcoin Transaction",
                  "description": "A record of the transfer of Bitcoin from one address to another.",
                  "image": "https://plus.unsplash.com/premium_photo-1671997600458-00d572868c4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80"
                },
                {
                  "name": "Bitcoin Halving",
                  "description": "An event that reduces the rate at which new Bitcoins are created.",
                  "image": "https://images.unsplash.com/photo-1666816943145-bac390ca866c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80"
                },
                {
                  "name": "Bitcoin Halving",
                  "description": "An event that reduces the rate at which new Bitcoins are created.",
                  "image": "https://plus.unsplash.com/premium_photo-1675018587778-67888c112bd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80"
                },
                {
                  "name": "Bitcoin Halving",
                  "description": "A platform for trading Bitcoin and other cryptocurrencies.",
                  "image": "https://images.unsplash.com/photo-1666034948846-ab8bd8f71d04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80"
                },
                {
                  "name": "Bitcoin Halving",
                  "description": "An event that reduces the rate at which ",
                  "image": "https://images.unsplash.com/photo-1672911640817-d2902754be5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80"
                }
              ]


        return (
                <div className='bg-zinc-800'>
                   <h1 className='text-2xl text-center font-bold text-rose-400 py-5 '>Latest Promoions:</h1> 
                   <div  className='grid md:grid-cols-4 gap-4 px-10'>
                   {
                        promotions.map((promotion , i )=> 
                                <PromotionCard key={i}
                                promotion = {promotion}
                                ></PromotionCard>
                                )
                   }    
                   </div>
                </div>
        );
};

export default PromotionPage;