/* eslint-disable react/no-unescaped-entities */
import { FcGoogle } from 'react-icons/fc';
import { AiFillGithub } from 'react-icons/ai';

const SocialLogin = () => {

    return (
        <div className='w-full mx-auto  '>
            {/* google login */}
            <div className="flex-col gap-4 justify-center md:flex-row md:gap-10 md:justify-center">
                <div className='inline-block mx-4'>
                    <button className='social-btn  hover:text-black hover:bg-green-300 duration-700 '>
                        <FcGoogle size={24} />
                        <span> Sign In With Google</span>
                    </button>
                </div>
                {/* github login */}
                <div className='inline-block'>
                    <button className='social-btn  hover:text-black hover:bg-green-300 duration-700'>
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