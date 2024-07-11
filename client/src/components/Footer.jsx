import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { MdCopyright } from "react-icons/md";

function Footer(){
    return(
        <div className="bg-slate-200 h-[30vh] mt-[2vh]">
            <div className="flex justify-center items-center">
            <img src="src/assets/images/Screenshot_from_2024-06-11_09-00-02-removebg-preview.png"className="w-[200px] h-[15vh]"/>
            </div>
            <div className="flex justify-around items-center text-slate-400">
            <div className="text-2xl flex flex-col gap-4">
                <p className="flex items-center gap-4"><MdEmail /> safevoyage13@gmail.co.ke</p>
                <p className="flex items-center gap-4"><FaLocationDot /> Nairobi</p>
            </div>
            <div className="text-2xl flex flex-col gap-4">
                <p>Terms and policies</p>
                <p className="flex items-center gap-4"><MdCopyright /> copyright@2024</p>
            </div>
            </div>
        </div>
    )
}
export default Footer