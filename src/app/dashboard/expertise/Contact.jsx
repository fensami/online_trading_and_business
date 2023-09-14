import React from 'react';
import Link from "next/link";
import expert from "../../../assets/sabbir.jpg"
import expert2 from "../../../assets/rubel.jpg"
import expert3 from "../../../assets/hk.jpg"
import expert4 from "../../../assets/110084857.png"
import expert1 from "../../../assets/377124378_326021693284891_5072274285400806362_n.jpg"
import Image from 'next/image';
import { FaFacebook, FaFacebookMessenger } from 'react-icons/fa';
import { MdContactMail } from 'react-icons/md';
import { BsLinkedin } from 'react-icons/bs';

const Contact = () => {
    return (
        <div>
            <div className='p-4 md:flex grid gap-4'>
                <div className="card md:w-1/2 w-96 h-72 card-side bg-base-100 shadow-xl p-3">
                    <figure><Image className='rounded-lg' width={300} height={300} src={expert} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-black">Asadur Jaman Nur</h2>
                        <Link className='text-blue-700 flex items-center gap-2' href="https://www.facebook.com/profile.php?id=100081583921609"> <FaFacebook></FaFacebook> Facebook </Link>
                        <Link className='text-purple-800 flex items-center gap-2' href=""> <FaFacebookMessenger></FaFacebookMessenger> Messenger </Link>
                        <Link className='text-yellow-600 flex items-center gap-2' href="mailto:asadurjamannursabbir@gmail.com" target='_blank'> <MdContactMail></MdContactMail> Email </Link>
                        <Link className='text-blue-800 flex items-center gap-2' href=""> <BsLinkedin></BsLinkedin> Linkedin </Link>
                        {/* <div className="card-actions justify-end">
                            <button className="btn btn-primary">Watch</button>
                        </div> */}
                    </div>
                </div>

                <div className="card md:w-1/2 w-96 h-72 card-side bg-base-100 shadow-xl p-3">
                    <figure><Image className='rounded-lg' width={300} height={300} src={expert1} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-black">Mahmud Preyom</h2>
                        <Link className='text-blue-700 flex items-center gap-2' href="https://www.facebook.com/mahmud.preyom"> <FaFacebook></FaFacebook> Facebook </Link>
                        <Link className='text-purple-800 flex items-center gap-2' href="https://m.me/mahmud.preyom"> <FaFacebookMessenger></FaFacebookMessenger> Messenger </Link>
                        <Link className='text-yellow-600 flex items-center gap-2' href="mailto:preyom5076@gmail.com" target='_blank'> <MdContactMail></MdContactMail> Email </Link>
                        <Link className='text-blue-800 flex items-center gap-2' href="https://www.linkedin.com/in/mahmud-preyom-71152b280"> <BsLinkedin></BsLinkedin> Linkedin </Link>

                    </div>
                </div>
            </div>
            <div className='p-4 md:flex grid gap-4 -mt-3'>
                <div className="card md:w-1/2 w-96 h-72 card-side bg-base-100 shadow-xl p-3">
                    <figure><Image className='rounded-lg' width={300} height={300} src={expert2} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-black">Md Rubel Masud</h2>
                        <Link className='text-blue-700 flex items-center gap-2' href="https://www.facebook.com/mdrubel.masud.7"> <FaFacebook></FaFacebook> Facebook </Link>
                        <Link className='text-purple-800 flex items-center gap-2' href="https://m.me/mdrubel.masud.7"> <FaFacebookMessenger></FaFacebookMessenger> Messenger </Link>
                        <Link className='text-yellow-600 flex items-center gap-2' href="mailto:inforubel251@gmail.com" target='_blank'> <MdContactMail></MdContactMail> Email </Link>
                        <Link className='text-blue-800 flex items-center gap-2' href=""> <BsLinkedin></BsLinkedin> Linkedin </Link>
                        {/* <div className="card-actions justify-end">
                            <button className="btn btn-primary">Watch</button>
                        </div> */}
                    </div>
                </div>

                <div className="card md:w-1/2 w-96 h-72 card-side bg-base-100 shadow-xl p-3">
                    <figure><Image className='rounded-lg' width={300} height={300} src={expert3} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-black">Humaion Kobir</h2>
                        <Link className='text-blue-700 flex items-center gap-2' href="https://www.facebook.com/humaionkobir.humaionkobir"> <FaFacebook></FaFacebook> Facebook </Link>
                        <Link className='text-purple-800 flex items-center gap-2' href="https://m.me/humaionkobir.humaionkobir"> <FaFacebookMessenger></FaFacebookMessenger> Messenger </Link>
                        <Link className='text-yellow-600 flex items-center gap-2' href="mailto:humaionkobir341@gmail.com" target='_blank'> <MdContactMail></MdContactMail> Email </Link>
                        <Link className='text-blue-800 flex items-center gap-2' href=""> <BsLinkedin></BsLinkedin> Linkedin </Link>

                    </div>
                </div>
            </div>
            <div className='p-4 md:flex grid gap-4 -mt-3'>
                <div className="card md:w-1/2 w-96 h-72 card-side bg-base-100 shadow-xl p-3">
                    <figure><Image className='rounded-lg' width={300} height={300} src={expert4} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-black">Abu Sayed</h2>
                        <Link className='text-blue-700 flex items-center gap-2' href="https://www.facebook.com/profile.php?id=100007603728596"> <FaFacebook></FaFacebook> Facebook </Link>
                        <Link className='text-purple-800 flex items-center gap-2' href=""> <FaFacebookMessenger></FaFacebookMessenger> Messenger </Link>
                        <Link className='text-yellow-600 flex items-center gap-2' href="mailto:abusayednalita1234@gmail.com" target='_blank'> <MdContactMail></MdContactMail> Email </Link>
                        <Link className='text-blue-800 flex items-center gap-2' href=""> <BsLinkedin></BsLinkedin> Linkedin </Link>
                        {/* <div className="card-actions justify-end">
                            <button className="btn btn-primary">Watch</button>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;