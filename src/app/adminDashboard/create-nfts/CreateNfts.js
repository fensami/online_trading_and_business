'use client'
import React, { useState } from 'react'; // Import React and useState
import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import { FaHourglass, FaInfinity, FaTag, FaUnlockAlt, FaChevronCircleDown } from 'react-icons/fa';
import { FiAlertTriangle } from 'react-icons/fi';
import Image from 'next/image'; // Import Image from 'next/image'
import nftsImage from '../../../../public/nftsImage.jpg'; // Import your image correctly
import personImage from '../../../../public/person.jpg'; // Import your image correctly

const CreateNfts = () => {
        const [file, setFile] = useState(null); // State for file input

        // Handle file input change
        const handleFileChange = (e) => {
                const selectedFile = e.target.files[0];
                if (selectedFile) {
                        setFile(selectedFile);
                }
        };

        return (
                <div className="mb-20">
                        <div className="md:flex md:items-center md:justify-evenly">
                                <div className="text-2xl font-bold text-center">CREATE NEW ITEM</div>
                                <div>
                                        {/* The button to open modal */}
                                        <p className="btn bg-slate-800 text-white w-32 mx-auto mt-5 flex justify-center">PREVIEW</p>

                                        {/* Put this part before </body> tag */}
                                        <input type="checkbox" id="my_modal_6" className="modal-toggle" />
                                        <div className="modal bg-[#171f2a]">
                                                <div className="modal-box bg-[#171f2a]">
                                                        <div className="card card-compact shadow-xl">
                                                                <div className="flex items-center py-2 justify-center">
                                                                        <Image width={100} height={100} src={personImage} alt="" />
                                                                        <p>@Cameronwilliamson</p>
                                                                </div>
                                                                <figure>
                                                                        <Image width={100} height={100} src={nftsImage} alt="" />
                                                                </figure>
                                                                <div className="card-body">
                                                                        <p className="card-title">Pulses Of Imagination #214</p>
                                                                        <p className="text-2xl font-semibold">0.40 ETH</p>
                                                                </div>
                                                        </div>
                                                        <div className="modal-action">
                                                                <label htmlFor="my_modal_6" className="btn">
                                                                        Close!
                                                                </label>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>

                        {/* update preview section */}
                        <section>
                                <div className="md:flex items-center mt-12">
                                        <div className="md:w-[70%] border-r-2">
                                                <div className="card bg-[#171f2a] border border-slate-600 w-[80%] mx-auto ">
                                                        <div className="w-4/5 md:p-16 py-5 text-center m-10 border mx-auto border-slate-600 rounded ">
                                                                <p className="w-32 mx-auto">PNG, GIF, WEBP, MP4 or MP3. Max 100mb.</p>
                                                                <input className="text-xl mt-4 w-32 mx-auto font-semibold" type="file" id="file" onChange={handleFileChange} />
                                                        </div>
                                                </div>
                                                <div className="md:w-[80%] mx-auto ">
                                                        <Accordion className="mt-6">
                                                                <AccordionItem className="text-center" header="CLICK ME">
                                                                        <div className="grid md:grid-cols-3 gap-3 mt-5">
                                                                                <div className="bg-[#171f2a] text-center rounded p-10">
                                                                                        <p className="flex justify-center">
                                                                                                <FaTag />
                                                                                        </p>
                                                                                        <p>FIXED PRICE</p>
                                                                                </div>
                                                                                <div className="bg-[#171f2a] text-center rounded p-10">
                                                                                        <p className="flex justify-center">
                                                                                                <FaInfinity />
                                                                                        </p>
                                                                                        <p>OPEN BIDS</p>
                                                                                </div>
                                                                                <div className="bg-[#171f2a] text-center rounded p-10">
                                                                                        <p className="flex justify-center">
                                                                                                <FaHourglass />
                                                                                        </p>
                                                                                        <p>AUCTION</p>
                                                                                </div>
                                                                        </div>
                                                                </AccordionItem>
                                                        </Accordion>
                                                </div>
                                        </div>
                                        <div className="md:w-4/12 w-full mr-4">
                                                {/* <h1 className=' text-center font-semibold'>PREVIEW</h1> */}
                                                <div className="card bg-[#171f2a] card-compact shadow-xl">
                                                        <div className="flex items-center py-2 justify-center">
                                                                {/* <Image width={100} height={100} src={personImage} alt="" /> */}
                                                                <p className='my-2'>@Cameronwilliamson</p>
                                                        </div>
                                                        <figure>
                                                                <Image width={300} height={300} src={nftsImage} alt="" />
                                                        </figure>
                                                        <div className="card-body">
                                                                <p className="card-title">Pulses Of Imagination #214</p>
                                                                <p className="text-2xl font-semibold">0.40 ETH</p>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </section>

                        <div className="mt-8 md:w-10/12 mx-auto">
                                <p className='py-1'>PRICE *</p>
                                <input
                                        className="bg-[#171f2a] rounded-xl md:w-full w-72 mx-auto border border-slate-700 shadow-lg p-5 text-white"
                                        type="number"
                                        placeholder="Enter Your Price"
                                        name=""
                                        id=""
                                />
                        </div>
                        {/* Rest of your form fields */}
                </div>
        );
};

export default CreateNfts;
