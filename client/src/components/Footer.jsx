import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { MdCopyright } from "react-icons/md";

function Footer() {
    return (
        <div className="bg-slate-200 py-8 mt-4">
            <div className="flex justify-center items-center mb-4">
                <img src="src/assets/images/Screenshot_from_2024-06-11_09-00-02-removebg-preview.png" className="w-48 h-24" alt="SafeVoyage Logo" />
            </div>
            <div className="flex flex-col md:flex-row justify-around items-center text-slate-400 text-center md:text-left">
                <div className="text-lg md:text-2xl flex flex-col gap-4 mb-4 md:mb-0">
                    <p className="flex items-center gap-2 md:gap-4 justify-center md:justify-start"><MdEmail size={24} /> safevoyage13@gmail.co.ke</p>
                    <p className="flex items-center gap-2 md:gap-4 justify-center md:justify-start"><FaLocationDot size={24} /> Nairobi</p>
                </div>
                <div className="text-lg md:text-2xl flex flex-col gap-4">
                    <p>Terms and policies</p>
                    <p className="flex items-center gap-2 md:gap-4 justify-center md:justify-start"><MdCopyright size={24} /> copyright@2024</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
