"use client"

/* eslint-disable react/no-unescaped-entities */
import { FcGoogle } from 'react-icons/fc';
import { AiFillGithub } from 'react-icons/ai';
import useAuth from '@/hooks/useAuth';
import { toast } from 'react-hot-toast';
import { getAuth, signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import app from '@/firebase/firebase.config';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

const SocialLogin = () => {
    const {googleLogin} = useAuth();
    const auth = getAuth(app);
    const search = useSearchParams();
    const from = search.get("redirectUrl") || "/";
    const { replace } = useRouter();
    
    const handleGoogleLogin = async () => {
        try {
            const user = await googleLogin()
            console.log(user)
            const userData = {"userName": user.user.displayName, "email": user.user.email, "role": "user"};
            console.log(userData)
            await fetch('/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
            }).then(res => res.json()).then(data => {
                console.log("add user data", data)
                toast.success("User signed in successfully");
                replace(from)
            })

        } catch (error) {
            toast.error(error.message || "User not signed in");
        }
    }

    const signInWithFacebook = async() => {
        try {
        const provider = await new FacebookAuthProvider();
        await signInWithPopup(auth, provider)
        .then((re) => {
            console.log(re)
            replace(from)
        })
        }catch (error) {
            toast.error(error.message || "User not signed in");
        }
    }
    return (
        <div className='w-full mx-auto  '>
            {/* google login */}
            <div className="flex-col gap-4 justify-center md:flex-row md:gap-10 md:justify-center">
                <div className='inline-block mx-4'>
                    <button onClick={handleGoogleLogin} className='social-btn    duration-700 '>
                        <FcGoogle size={24} />
                        <span> Sign In With Google</span>
                    </button>
                </div>
                {/* github login */}
                <div className='inline-block'>
                    <button onClick={signInWithFacebook} className='social-btn  duration-700'>
                        <AiFillGithub size={24} />
                        <span>Sign In With Facebook</span>
                    </button>
                </div>
            </div>
           
        </div>
    );
};

export default SocialLogin;