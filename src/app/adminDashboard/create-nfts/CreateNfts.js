"use client"
import Image from 'next/image';
import React from 'react';
import nftp from '../../../../public/nfts image.jpg'
import person from '../../../../public/person.jpg'
import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import { FaHourglass, FaInfinity, FaTag } from 'react-icons/fa';
// import { FiAlertTriangle } from 'react-icons/fi';





const CreateNfts = () => {
        return (
                <div className='mb-20'>
                        <div className='md:flex md:items-center md:justify-evenly'>
                                <div className='text-2xl font-bold text-center'>CREATE NEW ITEM</div>
                                <div>
                                        {/* The button to open modal */}
                                        <p className="btn bg-slate-800 text-white w-32 mx-auto mt-5 flex justify-center">PREVIEW</p>

                                        {/* Put this part before </body> tag */}
                                        <input type="checkbox" id="my_modal_6" className="modal-toggle" />
                                        <div className="modal bg-[#171f2a]">
                                                <div className="modal-box bg-[#171f2a]">
                                                        <div className="card card-compact shadow-xl">
                                                                <div className='flex items-center py-2 justify-center'>
                                                                        <Image className='h-8 w-8 rounded-full' src={person} alt=''></Image>
                                                                        <p>@Cameronwilliamson</p>
                                                                </div>
                                                                <figure> <Image className='w-full' src={nftp} alt=''></Image> </figure>
                                                                <div className="card-body">
                                                                        <p className='card-title'>Pulses Of Imagination #214</p>

                                                                        <p className='text-2xl font-semibold'>0.40 ETH</p>
                                                                </div>
                                                        </div>
                                                        <div className="modal-action">
                                                                <label htmlFor="my_modal_6" className="btn">Close!</label>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>

                        {/* update preview section */}

                        <section>
                                <div className='md:flex items-center mt-12'>
                                        <div className='md:w-[70%] border-r-2'>
                                                <div className='card bg-[#171f2a] border border-slate-600 w-[80%] mx-auto '>
                                                        <div className=' w-4/5 md:p-16 py-5 text-center m-10 border mx-auto border-slate-600 rounded '>
                                                                <p className='w-32 mx-auto'>PNG, GIF, WEBP, MP4 or MP3. Max 100mb.</p>
                                                                <input className='text-xl mt-4 w-32 mx-auto font-semibold ' type="file" id="file" />
                                                        </div>

                                                </div>
                                                <div className='md:w-[80%] mx-auto '>
                                                        <Accordion className="mt-6">
                                                                <AccordionItem className='text-center' header='CLICK ME'>
                                                                        <div className='grid md:grid-cols-3 gap-3 mt-5'>
                                                                                <div className='bg-[#171f2a] text-center rounded p-10'>
                                                                                        <p className='flex justify-center'><FaTag></FaTag></p>
                                                                                        <p>FIXED PRICE</p>
                                                                                </div>
                                                                                <div className='bg-[#171f2a] text-center rounded p-10'>
                                                                                        <p className='flex justify-center'><FaInfinity></FaInfinity></p>
                                                                                        <p>OPEN BIDS</p>
                                                                                </div>
                                                                                <div className='bg-[#171f2a] text-center rounded p-10'>
                                                                                        <p className='flex justify-center'><FaHourglass ></FaHourglass></p>
                                                                                        <p>AUCTION</p>
                                                                                </div>

                                                                        </div>
                                                                </AccordionItem>

                                                        </Accordion>
                                                </div>
                                        </div>
                                        <div className='md:w-4/12 w-full mr-4'>
                                                {/* <h1 className=' text-center font-semibold'>PREVIEW</h1> */}
                                                <div className="card bg-[#171f2a] card-compact shadow-xl">
                                                        <div className='flex items-center py-2 justify-center'>
                                                                <Image className='h-8 w-8 rounded-full' src={person} alt=''></Image>
                                                                <p>@Cameronwilliamson</p>
                                                        </div>
                                                        <figure> <Image className='w-full' src={nftp} alt=''></Image> </figure>
                                                        <div className="card-body">
                                                                <p className='card-title'>Pulses Of Imagination #214</p>

                                                                <p className='text-2xl font-semibold'>0.40 ETH</p>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </section>


                        <div className='mt-8 md:w-10/12 mx-auto'>
                                <p>PRICE *</p>
                                <input className='bg-[#171f2a] rounded-xl md:w-full w-72 mx-auto border border-slate-700 shadow-lg p-5 text-white' type="number" placeholder='Enter Your Price' name="" id="" />
                        </div>
                        <div className='mt-8 md:w-10/12 mx-auto'>
                                <p>NAME *</p>
                                <input className='bg-[#171f2a] rounded-xl border border-slate-700 shadow-lg md:w-full w-72 p-5 text-white' type="text" placeholder='Item Name' name="" id="" />
                        </div>



                        <div className='mt-8 md:w-10/12 w-32 md:mx-auto'>
                                <p>EXTRERNAL LINK *</p>
                                <p className=''>We will include a link to this URL on this items detail page, so that users can click to learn more about it.</p>


                                {/* <input className='bg-[#171f2a] rounded-xl border border-slate-700 shadow-lg md:w-full w-72 p-5 text-white' type="text" placeholder='https://criptic.vercel.app/create-nft' name="" id="" /> */}


                        </div>



                        {/* <div className='mt-8 md:w-10/12 mx-auto'>
                                <p>DESCRIPTION *</p>
                                <p>The description will be included on the item s detail page underneath its image.</p>
                                <textarea className='bg-[#171f2a] rounded-xl border border-slate-700 shadow-lg w-full p-5 text-white' name="area" id="" cols="20" rows="5" placeholder='Privide a detailed description of your Item'></textarea>

                                <div className='border mt-8 bg-[#171f2a] border-slate-700 p-3 rounded-xl'>
                                        <details>

                                                <summary className='cursor-pointer flex items-center justify-between'> <p className='flex items-center gap-2'><FaUnlockAlt></FaUnlockAlt> UNLOCKABLE CONTENT <br /> Include unlockable content that can only be revealed by the owner of the item.
                                                </p> <FaChevronCircleDown /></summary>

                                                <ul className="p-2 text-right">
                                                        <textarea className='bg-[#171f2a] rounded-xl border border-slate-700 shadow-lg w-full p-5 text-white' name="area" id="" cols="20" rows="5" placeholder='Enter content (access key, code to redeem, link to a file, etc.)'></textarea>


                                                </ul>
                                        </details>
                                </div>

                                <div className='border mt-5 bg-[#171f2a] border-slate-700 p-3 rounded-xl'>
                                        <details>

                                                <summary className='cursor-pointer flex items-center justify-between'> <p className='flex items-center gap-2'><FiAlertTriangle></FiAlertTriangle> EXPLICIT & SENSITIVE CONTENT <br /> Set this item as explicit and sensitive content
                                                </p> <FaChevronCircleDown /></summary>
                                        </details>
                                </div>
                                <div className='mt-8 md:w-[100%] mx-auto'>
                                        <p>SUPPLY *</p>
                                        <p>The number of items that can be minted.</p>
                                        <input className='bg-[#171f2a] rounded-xl border border-slate-700 shadow-lg w-full p-5 text-white' type="text" defaultValue={1} disabled name="" id="" />
                                </div>

                                <div className='mt-8'>
                                        <p>BLOCKCHAIN *</p>
                                        <select className="select w-full border border-slate-700 bg-[#171f2a]">
                                                <option disabled selected> Ethereum </option>
                                                <option> Ethereum </option>
                                                <option> Flow </option>

                                        </select>
                                </div>
                                <button className=" px-8 py-3 my-10 shadow-2xl rounded text-white font-bold border border-slate-700 bg-[#171f2a]">CREATE</button>
                        </div> */}

                </div>
        );
};

export default CreateNfts;