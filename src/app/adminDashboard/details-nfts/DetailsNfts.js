import React from 'react';
import down from '../../../../public/hand.png'
import Image from 'next/image';

const DetailsNfts = () => {
        return (
                <div className='md:flex mt-12'>
                        <article className='md:w-2/5 mt-20 px-12'>
                                <Image height={400} width={400} src={down} alt=''></Image>
                        </article>



                        <article className='w-3/5'>



                                <div className='md:flex md:justify-between items-center px-5 md:my-5 my-0'>
                                        <div className='flex-1'>
                                                <h1 className='md:text-2xl font-semibold md:font-bold w-full'>Flow Punk Gallery #303</h1>

                                                <p className='my-2'>Minted on Jan 26, 2022</p>
                                        </div>

                                        <div>
                                                {/* The button to open modal */}
                                                <label htmlFor="my_modal_6" className="btn bg-slate-700">...</label>

                                                {/* Put this part before </body> tag */}
                                                <input type="checkbox" id="my_modal_6" className="modal-toggle" />
                                                <div className="modal">
                                                        <div className="modal-box">
                                                                <p className='  hover:bg-slate-600 p-2 w-52 rounded-lg cursor-pointer'>PLEASE FLOR<span className='px-3 py-1 bg-green-800 rounded-md'>NEW</span></p>
                                                                <p className='  hover:bg-slate-600 p-2 w-52 rounded-lg cursor-pointer'>REPORT</p>
                                                                <hr />
                                                                <p className='  hover:bg-slate-600 p-2 w-52 rounded-lg cursor-pointer'>NEW BID</p>
                                                                <p className='  hover:bg-slate-600 p-2 w-52 rounded-lg cursor-pointer'>REFRESH METADATA</p>
                                                                <p className='  hover:bg-slate-600 p-2 w-52 rounded-lg cursor-pointer'>OPEN ORIGINAL</p>
                                                                <div className="modal-action">
                                                                        <label htmlFor="my_modal_6" className="btn">Close!</label>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                </div>








                                <div className='md:flex items-center justify-between md:px-5 grid-cols-1 grid'>
                                        <div>
                                                <p className='my-1'>CREATE BY</p>

                                                <div className='flex bg-slate-800 px-5 py-3 rounded-3xl items-center gap-2 w-full'>
                                                        <Image width={24} height={24} className='rounded-full' src="https://i.ibb.co/sVdVFpQ/person.jpg" alt=''></Image>
                                                        <p className=''>@Cameronwilliams</p>
                                                </div>
                                        </div>
                                        <div>
                                                <p className='my-1'>COLLECTION</p>
                                                <div className='flex bg-slate-800 px-5 py-3 rounded-3xl items-center gap-2'>
                                                        <Image className='rounded-full' width={24} height={24} src="https://i.ibb.co/sVdVFpQ/person.jpg" alt=''></Image>
                                                        <p className=''>@Cameronwilliams</p>
                                                </div>
                                        </div>

                                </div>



                                <h1 className='my-5'>DETAILS:</h1>
                                <p>Descriptions</p>
                                <p className='w-full px-5 '>Fisherian Runaways, Child of #48 Bat Veil & #42 Screw Nose. This mushroom is the result of the cross-breeding of two original one of a kind generative mushrooms donated back to the Fisherian Runaways project their generous owner.</p>
                                <h1 className='mt-5'>OWNER</h1>
                                <div className='flex bg-slate-800 px-4 py-1 w-64 rounded-xl items-center gap-2'>
                                        <Image className='h-6 rounded-full w-6' width={24} height={24} src="https://i.ibb.co/sVdVFpQ/person.jpg" alt=''></Image>
                                        <p className=''>@Cameronwilliams</p>
                                </div>
                                <h1 className='mt-5'>BLOCK CHAIN</h1>
                                <div className='flex bg-slate-800 px-4 py-1 w-44 rounded-xl items-center gap-2'>
                                        <Image className='h-6 rounded-full w-6' width={24} height={24} src="https://i.ibb.co/wwvDH9X/Bitcoin.png" alt=''></Image>
                                        <p className=''>Bitcoin</p>
                                </div>
                                <div className='flex mt-2 bg-slate-800 px-4 py-1 w-44 rounded-xl items-center gap-2'>
                                        <Image className='h-6 rounded-full w-6' width={24} height={24} src="https://i.ibb.co/q7ZN979/binance.png" alt=''></Image>
                                        <p className=''>Ethereum</p>
                                </div>
                                <hr className='my-5' />
                                <div className=' grid md:grid-cols-2 gap-4'>
                                        <div>
                                                <p>CURRENT BID</p>
                                                <h1 className='text-3xl font-semibold'>1.01 ETH</h1>
                                                <div className='flex bg-slate-800 px-4 py-1 w-64 rounded-xl items-center gap-2'>
                                                        <Image className='h-6 rounded-full w-6' width={24} height={24} src="https://i.ibb.co/sVdVFpQ/person.jpg" alt=''></Image>
                                                        <p className=''>@Cameronwilliams</p>
                                                </div>
                                        </div>
                                        <div>
                                                <h1>AUCTION ENDS IN</h1>
                                                <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
                                                        <div className="flex flex-col">
                                                                <span className="countdown font-mono text-5xl">
                                                                        <span style={{ "--value": 15 }}></span>
                                                                </span>
                                                                days
                                                        </div>
                                                        <div className="flex flex-col">
                                                                <span className="countdown font-mono text-5xl">
                                                                        <span style={{ "--value": 10 }}></span>
                                                                </span>
                                                                hours
                                                        </div>
                                                        <div className="flex flex-col">
                                                                <span className="countdown font-mono text-5xl">
                                                                        <span style={{ "--value": 24 }}></span>
                                                                </span>
                                                                min
                                                        </div>
                                                        <div className="flex flex-col">
                                                                <span className="countdown font-mono text-5xl">
                                                                        <span style={{ "--value": 44 }}></span>
                                                                </span>
                                                                sec
                                                        </div>
                                                </div>

                                        </div>
                                </div>
                                <div className='md:grid-cols-2 grid mt-6 mb-32 items-center justify-center gap-8'>
                                        <button className="btn w-44 btn-secondary">PLACE A BID</button>
                                        <button className="btn w-44 btn-secondary">SHARE</button>
                                </div>

                        </article>
                </div>
        );
};

export default DetailsNfts;