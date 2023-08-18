import Image from "next/image";
import ScanImg from "../../../../../public/download-removebg-preview.png"

const ScanSection = () => {
    return (
        <div >
<Image width={90} height={90} src={ScanImg} alt=""/>
<h2 className="text-2xl font-semibold">Scan</h2>
        </div>
    );
};

export default ScanSection;