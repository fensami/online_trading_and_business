"use client"
import VoteNav from "@/components/VoteNav";
import Image from "next/image";
import Link from "next/link";

const ExploreVote = () => {
    return (
        <div>
            <VoteNav></VoteNav>

                <div className="mx-auto w-full max-w-[1160px] text-sm md:pt-14 4xl:pt-24">
                    <div className="grid grid-cols-1 gap-6 xs:grid-cols-2 lg:grid-cols-3">
                        <Link href='/adminDashboard/criptic-vote'  className="flex cursor-pointer flex-col items-center justify-center rounded-lg bg-white p-6 text-center shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 dark:bg-light-dark xs:col-span-2 sm:col-auto sm:row-span-2"> 
                            <div className="h-auto w-full md:w-40">
                                <Image alt="Vote Pool" loading="lazy" width="129" height="128" decoding="async" data-nimg="1" src="https://criptic.vercel.app/_next/static/media/vote-pool.b7007dec.svg"> 
                                </Image>
                                <h3 className="mb-2 mt-6 text-sm font-medium uppercase text-gray-800 dark:text-gray-100 sm:text-base 3xl:text-lg">Vote with Criptic</h3>
                                <p className="leading-loose text-gray-600 dark:text-gray-400">Vote with criptic tokens held <br class="hidden xs:inline-block"></br> in your wallet or delegated <br className="hidden xs:inline-block"></br> to you.</p>
                            </div>
                        </Link>

                        <div className="rounded-lg bg-white p-6 shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 dark:bg-light-dark">
                            <a href="http://www.discord.com" target="_blank" rel="noopener noreferrer">
                                <span className="inline-block h-auto w-12 sm:w-auto">
                                <Image alt="Discord" loading="lazy" width="48" height="56" decoding="async" data-nimg="1" src="https://criptic.vercel.app/_next/static/media/discord.afeef450.svg" >
                                </Image>
                                </span>
                                <h3 className="mt-6 text-sm font-medium uppercase text-purple-600 sm:mt-8 sm:text-base 3xl:mt-11 3xl:text-lg">Chat on Discord</h3>
                            </a>
                        </div>

                        <div  className="rounded-lg bg-white p-6 shadow-card transition-shadow duration-200 hover:shadow-large dark:bg-light-dark" >
                            <span className="inline-block h-auto w-12 sm:w-auto">
                                <Image alt="Discord" loading="lazy" width="48" height="56" decoding="async" data-nimg="1" src="https://criptic.vercel.app/_next/static/media/forum.f35df0de.svg" >
                                </Image>
                            </span>
                            <h3 className="mt-6 text-sm font-medium uppercase text-purple-600 sm:mt-8 sm:text-base 3xl:mt-11 3xl:text-lg">join the forum</h3>
                        </div>

                        <div  className="rounded-lg bg-white p-6 shadow-card transition-shadow duration-200 hover:shadow-large dark:bg-light-dark">
                            <span className="inline-block h-auto w-12 sm:w-auto">
                                <Image alt="Discord" loading="lazy" width="48" height="56" decoding="async" data-nimg="1" src="https://criptic.vercel.app/_next/static/media/bank.4067932b.svg" >
                                </Image>
                            </span>
                            <h3 className="mt-6 text-sm font-medium uppercase text-purple-600 sm:mt-8 sm:text-base 3xl:mt-11 3xl:text-lg">view documentation</h3>
                        </div>

                        <div  className="rounded-lg bg-white p-6 shadow-card transition-shadow duration-200 hover:shadow-large dark:bg-light-dark">
                            <span className="inline-block h-auto w-12 sm:w-auto">
                                <Image alt="Discord" loading="lazy" width="48" height="56" decoding="async" data-nimg="1" src="https://criptic.vercel.app/_next/static/media/mirror.64731dd9.svg" >
                                </Image>
                            </span>
                            <h3 className="mt-6 text-sm font-medium uppercase text-purple-600 sm:mt-8 sm:text-base 3xl:mt-11 3xl:text-lg">Read on mirror</h3>
                        </div>
                    </div>
                </div>
                
        </div>
    );
};

export default ExploreVote;