import { FcGoogle } from 'react-icons/fc';
import { AiFillGithub } from 'react-icons/ai';

const SocialLogin = () => {
    return (
        <div>
            <div className="divider font-semibold">or log in with</div>
            {/* google login */}
            <div>
                <button className='social-btn '>
                    <FcGoogle size={24} />
                    <span>Google</span>
                </button>
            </div>
            {/* github login */}
            <div>
                <button className='social-btn bg-slate-400 text-white'>
                    <AiFillGithub size={24} />
                    <span>GitHub</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;