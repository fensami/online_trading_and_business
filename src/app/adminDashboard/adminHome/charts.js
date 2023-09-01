import React from 'react';
// import Chart_1 from '/charts/chart_1'
import Chart_1 from "@/app/adminDashboard/adminHome/charts/chart_1";
import Chart_2 from "@/app/adminDashboard/adminHome/charts/chart_2";

const Charts = () => {
    return (
        <div className='grid gap-5 px-5 grid-cols-2 '>
            <article className='bg-[#171f2a] h-[450px] px-5'>
                <p className='text-xl font-bold my-3'>LIQUIDITY 530.5M June 6, 2021</p>
                <Chart_1></Chart_1>
            </article>

            <article className='bg-[#171f2a] h-[450px]'>
                <p className='text-xl font-bold my-3'>VOLUME 24H 582.6M June 3, 2021</p>
                 <Chart_2></Chart_2>
            </article>
        </div>
    );
};

export default Charts;