import Image from "next/image";
import CartImg from '@/assets/CartImg.png'
import LoginForm from "./LoginForm";
import SocialLogin from "../components/SocialLogin";

const LoginPage = () => {
    return (
        <div className=" md:flex gap-4 items-center container mx-auto  bg-[#131720] py-4 md:px-52  px-4 shadow-lg ">
            {/* svg image section */}
            <div className=" p-6 md:p-7 bg-gradient-to-tr from-green-600 to-green-900 rounded-lg text-white ">
                <p href="/" className="text-2xl font-semibold ">Logo</p>
                <h2 className="text-3xl font-bold my-2 ">Welcome</h2>
                <p>Create an account to enjoy all the services without any ads for free!</p>
                <div className="mt-2">
                    <a href='/signup' className="bg-green-400 hover:bg-green-500 text-black py-2 px-6 rounded-lg no-underline focus:outline-none shadow-md  opacity-75">Sign up</a>
                </div>
                <Image className="h-96 bg-opacity-95" src={CartImg} alt="" />
            </div>
            {/* login form*/}
            <div className="md:w-7/12 border border-gray-600  rounded-lg my-4">
                <div className=" text-white text-center">
                    <h2 className=" text-3xl font-semibold  my-4">Sign In</h2>
                    <SocialLogin />
                </div>
                <div className=" mt-4 text-white flex gap-3 mx-8 items-center">
                    <div className=" w-full h-[1px] bg-gray-500"></div>
                    <div className=" text-white">OR</div>
                    <div className=" w-full h-[1px]  bg-gray-500"></div>
                </div>
                <LoginForm />
            </div>
        </div>
    );
};

export default LoginPage;