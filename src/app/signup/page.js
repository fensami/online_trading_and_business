import Image from "next/image";
import CartImg from '@/assets/CartImg.png'
import SocialLogin from "../components/SocialLogin";
import SignUpForm from "./SignUpForm";
// import Link from "next/link";

const SingUpPage = () => {

    return (
        <div className=" md:flex gap-4 md:px-52 items-center container mx-auto  bg-[#131720]  p-4 shadow-lg ">
            {/* svg image section */}
            <div className="md:w-1/2 p-6 md:p-7 bg-gradient-to-tr bg-[#171f2a] rounded-lg text-white ">
                <p href="/" className="text-2xl font-semibold ">Logo</p>
                <h2 className="text-3xl font-bold my-4 ">Welcome</h2>
                <p>Already Have An Account? Sign In</p>
                <div className="mt-4">
                    <a href='/login' className="bg-green-400 text-black py-2 px-6 rounded-lg no-underline focus:outline-none shadow-md  opacity-75">Sign in</a>
                </div>
                <Image className="h-96 opacity-95" src={CartImg} alt="" />
            </div>
            {/* login form*/}
            <div className="md:w-7/12 bg-[#171f2a] my-4 rounded-lg">
                <div className="text-center text-white">
                    <h2 className="text-3xl font-semibold  my-4">Sign Up</h2>
                    <SocialLogin />
                </div>
                <div className=" mt-4 text-white flex gap-3 mx-8 items-center">
                    <div className=" w-full h-[1px] bg-gray-500"></div>
                    <div className=" text-white">OR</div>
                    <div className=" w-full h-[1px]  bg-gray-500"></div>
                </div>
                <SignUpForm />

            </div>
        </div>
    );
};

export default SingUpPage;