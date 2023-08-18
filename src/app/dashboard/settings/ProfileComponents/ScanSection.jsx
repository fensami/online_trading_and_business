import Image from "next/image";
import ScanImg from "../../../../../public/download-removebg-preview.png"

const ScanSection = () => {
    return (
        <div >
<Image width={90} height={90} src={ScanImg} alt=""/>
<h2 className="text-2xl font-semibold">Scan</h2>
<p>Enter the six-digit code from the application</p>
<p>After scanning the image, the app will display a six-digit code that you can enter below</p>
        </div>
    );
};

export default ScanSection;