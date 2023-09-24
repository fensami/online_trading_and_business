"use client"

import CripticItem from "@/components/CripticItem";
import VoteNav from "@/components/VoteNav";
import Image from "next/image";

const Criptic = () => {


    return (
        <>
            <VoteNav></VoteNav>


            <div className="p-4 bg-[#131720]">



                <div className="md:w-11/12 mx-auto px-4 py-2 bg-[#212b39] rounded-xl overflow-hidden shadow-lg md:flex justify-between items-center">




                    <div className="md:flex items-center gap-5">


                        <div className="w-32 mx-auto">
                            <Image alt="Discord" className="mx-auto" width={60} height={60} src="https://criptic.vercel.app/_next/static/media/vote-pool.b7007dec.svg" >
                            </Image>
                        </div>


                        <div className="p-8">
                            <div className="uppercase tracking-wide md:text-3xl text-indigo-500 font-semibold">
                                OU HAVE 100 VOTES
                            </div>
                            <p className="text-gray-500">ou need CRIPTIC tokens to participate in governance.</p>

                        </div>
                    </div>



                    <div className="flex justify-center my-5">

                        <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md mx-auto">
                            Create Proposal
                        </button>
                    </div>
                </div>
            </div>

            <div className="bg-[#131720]">
                <CripticItem></CripticItem>
            </div>



        </>
    );
};

export default Criptic;