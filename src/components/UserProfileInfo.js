'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BiLogoLinkedin } from "react-icons/bi";
import useAuth from "@/hooks/useAuth";
import Link from "next/link";
// import img from "../../public/Bitcoin.png";

const UserProfileInfo = () => {
    const [updateData, setUpdateData] = useState(null);
    const { user } = useAuth();
    const [loading, setLoading] = useState(true);

    console.log(updateData)

    const fetchData = async () => {
        try {
            const response = await fetch(`https://online-trading-and-business-five.vercel.app/api/allUsers/${user.email}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            if (data.length > 0) {
                const userData = data[0];
                setUpdateData(userData);
            } else {
                setUpdateData(null);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
            console.error('Data loading timeout');
        }, 5000);

        if (user) {
            if (updateData) {
                setLoading(false);
            } else {
                fetchData();
            }
        }

        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <div className="md:w-4/12 w-auto h-fit bg-[#171f2a] p-8 rounded-md">
            {loading ? (
                <p className="text-3xl font-bold">Loading...</p>
            ) : (
                <>
                    <div className="text-center mx-auto mb-4">
                        <div className="avatar">
                            <div className="w-40 rounded-full">
                                <Image width={30} height={30} alt="" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn1vKaWhtVyD5P7_-1CATcpNU79Ssf2LBxuQ&usqp=CAU' />
                            </div>
                        </div>

                        <h1 className="md:text-2xl text-1xl font-semibold my-2">
                            Fen Sami
                        </h1>
                        <h1 className="md:text-2xl text-1xl font-semibold my-2">
                            {user.email}
                        </h1>
                        {/* <h3 className="text-1xl  text-gray-300">
                            {updateData && updateData.City ? updateData.City : "Amet minim Developer"}
                        </h3> */}
                    </div>
                    <div className="text-gray-300">
                        <h2 className="font-semibold">Bio</h2>
                        <p className="mb-4">
                            {updateData && updateData.Description ? updateData.Description : "This is fen sami frontend Developer"}
                        </p>
                        <h4 className="border-t border-gray-700 pt-4 font-semibold">
                            Social media
                        </h4>
                        <div className="flex gap-4 my-4 ">
                            <Link href='/'>
                                <FaFacebookF className="user-icon" />
                            </Link>
                            <Link href='/'>
                                <FaTwitter className="user-icon" />
                            </Link>
                            <Link href='/'>
                                <BsInstagram className="user-icon" />
                            </Link>
                            <Link href='/'>
                                <BiLogoLinkedin className="user-icon" />
                            </Link>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default UserProfileInfo;
