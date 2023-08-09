import { AiOutlineEyeInvisible } from 'react-icons/ai';
import SocialLogin from '../components/SocialLogin';

const LoginPage = () => {
    return (
        <div className="lg:w-5/12 md:w-6/12 md:mx-auto mx-6 border-red-400 border-l border-r rounded-xl p-6 my-12  ">
            <h3 className="text-xl font-semibold">Welcome!</h3>
            <p className="text-gray-600 my-2">Log in to continue.</p>
            <form>
                <input className="login-input" type="text" placeholder="Email" required />
                <span className='relative'>
                    <input className="login-input" type="password" placeholder="Password" required />
                    <AiOutlineEyeInvisible className='lg:absolute top-[52px] left-[445px] lg:block hidden' />
                    <p className='lg:hidden block text-xs cursor-pointer'>Show password</p>
                </span>
                <p className='text-red-500 hover:underline text-sm mt-2'>Forget password?</p>
                <button type='submit' className='bg-red-500 hover:bg-red-600 text-white font-semibold mt-10 py-2 font-mono w-full rounded-full'>Log in</button>
            </form>
            <SocialLogin />
        </div>
    );
};

export default LoginPage;