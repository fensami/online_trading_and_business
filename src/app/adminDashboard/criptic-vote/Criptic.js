"use client"

import CripticItem from "@/components/CripticItem";
import VoteNav from "@/components/VoteNav";
import Image from "next/image";

const Criptic = () => {


    return (
        <>
            <VoteNav></VoteNav>
            <div className="p-4">
                <div className="w-full container mx-auto px-4 py-2 bg-[#212b39] rounded-xl overflow-hidden shadow-lg md:flex justify-between items-center">
                    <div className="flex items-center gap-5 px-4">
                        <div className="w-32 p-8 bg-slate-300 rounded-full">
                            <Image className="" alt="Discord" loading="lazy" width="56" height="56" decoding="async" data-nimg="1" src="https://criptic.vercel.app/_next/static/media/vote-pool.b7007dec.svg" >
                            </Image>
                        </div>
                        <div className="p-8">
                            <div className="uppercase tracking-wide text-3xl text-indigo-500 font-semibold">
                                OU HAVE 100 VOTES
                            </div>
                            <p className="text-gray-500">ou need CRIPTIC tokens to participate in governance.</p>

                        </div>
                    </div>
                    <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md">
                        Create Proposal
                    </button>
                </div>
            </div>

            <div className="bg-[#131720] min-h-screen">
                <CripticItem></CripticItem>
            </div>



        </>
    );
};

export default Criptic;