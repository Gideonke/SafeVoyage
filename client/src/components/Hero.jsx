import { IoIosContact } from "react-icons/io";
import { FaStar } from "react-icons/fa";

function Hero() {
    return (
        <div className="mt-[14vh]">
            <div
                className="image"
                style={{
                    height: "40vh",
                    width: "100vw",
                    backgroundImage: 'url("https://images.pexels.com/photos/1089306/pexels-photo-1089306.jpeg")',
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center"
                }}
            >
                <div className="flex flex-col justify-center items-center text-center">
                    <div className="mt-[1vh] flex flex-col gap-4">
                        <h1 className="text-3xl text-black">SafeVoyage</h1>
                        <p className="text-2xl text-white">Get the best Experience with us</p>
                    </div>
                </div>
            </div>
            <div className="mt-[4vh] flex flex-col md:flex-row justify-around items-center gap-8 md:gap-4">
                <div className="flex flex-col justify-center items-center w-[90%] md:w-[400px] h-[40vh] bg-blue-400 rounded-2xl gap-8 p-4 md:p-8">
                    <h3 className="text-3xl text-white text-center">What We Do</h3>
                    <p className="text-2xl text-center">
                        We verify the legitimacy of travel agencies, ensuring your trips are safe and secure.
                    </p>
                </div>
                <div className="flex flex-col justify-center items-center w-[90%] md:w-[400px] h-[40vh] bg-blue-400 rounded-2xl gap-8 p-4 md:p-8">
                    <h3 className="text-3xl text-white text-center">Our Mission</h3>
                    <p className="text-2xl text-center">
                        Our mission is to provide travelers with peace of mind by checking the credibility of travel agencies worldwide.
                    </p>
                </div>
                <div className="flex flex-col justify-center items-center w-[90%] md:w-[400px] h-[40vh] bg-blue-400 rounded-2xl gap-8 p-4 md:p-8">
                    <h3 className="text-3xl text-white text-center">Transparency</h3>
                    <p className="text-2xl text-center">
                        We maintain transparency in our verification process, providing you with trustworthy information.
                    </p>
                </div>
            </div>

            <div className="mt-20">
    <div
        className="relative w-full h-80 bg-cover bg-center"
        style={{
            backgroundImage: 'url("https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
            filter: 'brightness(0.7)',
        }}
    >
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-8">
            <div className="mt-4 sm:mt-14 flex flex-col gap-4 w-full ">
                <h1 className="text-2xl sm:text-3xl text-blue-400 font-bold">ABOUT US</h1>
                <p className="text-lg sm:text-2xl text-white font-bold">
                    Transparency, trust, and reliability are at the core of everything we do. We believe in providing honest and thorough reviews and verifications, so you can make informed decisions about your travel plans.
                </p>
            </div>
            <div className="w-full mt-2 sm:mt-4">
                <h1 className="text-2xl sm:text-3xl text-blue-400 font-bold">Our Team</h1>
                <p className="text-lg sm:text-2xl text-white font-bold">
                    Our team consists of experienced travelers, industry professionals, and tech experts who work tirelessly to bring you the most up-to-date and accurate information. We are passionate about travel and dedicated to helping you have the best experience possible.
                </p>
            </div>
        </div>
    </div>
</div>

            <h1 className="text-3xl text-center mt-16">TESTIMONIALS</h1>
            <div className="mt-[4vh] flex flex-col md:flex-row justify-around items-center gap-8 md:gap-4">
                <div className="flex flex-col justify-center items-center w-[90%] md:w-[400px] h-[40vh] bg-blue-400 rounded-2xl gap-8 p-4 md:p-8">
                    <IoIosContact size={150} />
                    <h1 className="text-3xl">Rihan Aliam</h1>
                    <p className="text-2xl text-center">
                        We verify the legitimacy of travel agencies, ensuring your trips are safe and secure.
                    </p>
                    <div className="flex gap-3 items-center">
                        <FaStar size={40} className="text-yellow-400" />
                        <FaStar size={40} className="text-yellow-400" />
                        <FaStar size={40} className="text-yellow-400" />
                        <FaStar size={40} className="text-yellow-400" />
                        <FaStar size={40} className="text-yellow-400" />
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center w-[90%] md:w-[400px] h-[40vh] bg-blue-400 rounded-2xl gap-8 p-4 md:p-8">
                    <IoIosContact size={150} />
                    <h1 className="text-3xl">Aspen Gie</h1>
                    <p className="text-2xl text-center">
                        Our mission is to provide travelers with peace of mind by checking the credibility of travel agencies worldwide.
                    </p>
                    <div className="flex gap-3 items-center">
                        <FaStar size={40} className="text-yellow-400" />
                        <FaStar size={40} className="text-yellow-400" />
                        <FaStar size={40} className="text-yellow-400" />
                        <FaStar size={40} className="text-yellow-400" />
                        <FaStar size={40} className="text-yellow-400" />
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center w-[90%] md:w-[400px] h-[40vh] bg-blue-400 rounded-2xl gap-8 p-4 md:p-8">
                    <IoIosContact size={250} />
                    <h1 className="text-3xl">Liam Paige</h1>
                    <p className="text-2xl text-center">
                        We maintain transparency in our verification process, providing you with trustworthy information.
                    </p>
                    <div className="flex gap-3 items-center">
                        <FaStar size={40} className="text-yellow-400" />
                        <FaStar size={40} className="text-yellow-400" />
                        <FaStar size={40} className="text-yellow-400" />
                        <FaStar size={40} className="text-yellow-400" />
                        <FaStar size={40} className="text-yellow-400" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
