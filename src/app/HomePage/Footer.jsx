import Link from "next/link";
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn, FaTelegramPlane } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';


const Footer = () => {
   
    return (
        <div className="p-3 container mx-auto bg-[#212b39] text-white">
            <div className="py-6 ">
                <hr />
            </div>
            {/* logo & social link section start*/}
            <div className="md:flex   justify-between items-center font-sans md:text-start text-center">
                <h1 className="text-4xl font-bold md:mb-0 mb-6">Trading & Business</h1>
                <div className="flex gap-4 justify-center items-center">
                    <Link href='/'><FaFacebookF size={26} /></Link>
                    <Link href='/'><FiInstagram size={26} /></Link>
                    <Link href='/'><FaTwitter size={26} /></Link>
                    <Link href='/'><FaYoutube size={26} /></Link>
                    <Link href='/'><FaLinkedinIn size={26} /></Link>
                    <Link href='/'><FaTelegramPlane size={26} /></Link>
                </div>
            </div>
            {/* another section and link */}
            <div className="grid lg:grid-cols-6  md:grid-cols-3 grid-cols-2 gap-4">
                <div className="py-8">
                    <h4 className="font-bold  text-1xl pb-4">ABOUT US</h4>
                    <div className="flex flex-col text-slate-200 text-sm">
                        <a href="">Who we are</a>
                        <a href="">Why choose us</a>
                        <a href="">Principles</a>
                        <a href="">Partnership programmes</a>
                        <a href="">Contact us</a>
                        <a href="">Careers</a>
                    </div>
                </div>
                <div className="py-8">
                    <h4 className="font-bold  text-1xl pb-4">TRADE TYPES</h4>
                    <div className="flex flex-col text-slate-200 text-sm">
                        <a href="">CFDs</a>
                        <a href="">Option</a>
                        <a href="">Multipliers</a>
                    </div>
                </div>
                <div className="py-8">
                    <h4 className="font-bold  text-1xl pb-4">MARKETS</h4>
                    <div className="flex flex-col text-slate-200 text-sm">
                        <a href="">Forex</a>
                        <a href="">Derived indices</a>
                        <a href="">Stocks & indices</a>
                        <a href="">ETF</a>
                        <a href="">Cryptocurrencies</a>
                        <a href="">Commodities</a>
                    </div>
                </div>
                <div className="py-8">
                    <h4 className="font-bold  text-1xl pb-4">LEGAL</h4>
                    <div className="flex flex-col text-slate-200 text-sm">
                        <a href="">Regulatory information</a>
                        <a href="">Terms & conditions</a>
                        <a href="">Secure & responsible trading</a>
                    </div>
                </div>
                <div className="py-8">
                    <h4 className="font-bold  text-1xl pb-4">PARTNER</h4>
                    <div className="flex flex-col text-slate-200 text-sm">
                        <a href="">Affiliates and IBs</a>
                        <a href="">Payment agents</a>
                        <a href="">API</a>
                        <a href="">Bug bounty</a>
                    </div>
                </div>
                <div className="py-8">
                    <h4 className="font-bold  text-1xl pb-4">SUPPORT</h4>
                    <div className="flex flex-col text-slate-200 text-sm">
                        <a href="">Help centre</a>
                        <a href="">Community</a>
                        <a href="">Payment methods</a>
                        <a href="">Status page</a>
                        <a href="">Deriv Blog</a>
                    </div>
                </div>
            </div>
            {/* some intro */}
            <div className="bg-gray-200 p-6 rounded-xl text-sm">
                <p className="text-black">CFDs and other products offered on this website are complex instruments with high risk of losing money rapidly owing to leverage. You should consider whether you understand how these products work and whether you can afford to risk losing your money.s</p>
            </div>
        </div>
    );
};

export default Footer;