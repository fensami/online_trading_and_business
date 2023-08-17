"use client"

/* eslint-disable react/no-unescaped-entities */
import { FcGoogle } from 'react-icons/fc';
import { AiFillGithub } from 'react-icons/ai';
import useAuth from '@/hooks/useAuth';
import { toast } from 'react-hot-toast';
import { getAuth, signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import app from '@/firebase/firebase.config';

const SocialLogin = () => {
    const {googleLogin} = useAuth();
    const auth = getAuth(app);
    
    const handleGoogleLogin = async () => {
        try {
            const user = await googleLogin()
        } catch (error) {
            toast.error(error.message || "User not signed in");
        }
    }

    const signInWithFacebook = () => {
        const provider = new FacebookAuthProvider();
        signInWithPopup(auth, provider)
        .then((re) => {
            console.log(re)
        })
        .catch((err) => {
            console.log(err.message)
            toast.error(err.message || "Facebook login Failed")
        })
    }
    return (
        <div className='w-full mx-auto  '>
            {/* google login */}
            <div className="flex-col gap-4 justify-center md:flex-row md:gap-10 md:justify-center">
                <div className='inline-block mx-4'>
                    <button onClick={handleGoogleLogin} className='social-btn  hover:text-black hover:bg-green-300 duration-700 '>
                        <FcGoogle size={24} />
                        <span> Sign In With Google</span>
                    </button>
                </div>
                {/* github login */}
                <div className='inline-block'>
                    <button onClick={signInWithFacebook} className='social-btn  hover:text-black hover:bg-green-300 duration-700'>
                        <AiFillGithub size={24} />
                        <span>Sign In With Facebook</span>
                    </button>
                </div>
            </div>
            <div className="divider font-semibold">Haven't an account<a href='' className='text-primary'>Sign Up</a></div>
        </div>
    );
};

export default SocialLogin;