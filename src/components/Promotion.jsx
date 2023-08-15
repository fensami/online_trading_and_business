import getpromotiondata from '@/utils/getpromotiondata';
import PromotionCard from './PromotionCard';
  
 
const PromotionPage = async () => {
        const promotions = await getpromotiondata(); 
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