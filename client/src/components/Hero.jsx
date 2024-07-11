import { IoIosContact } from "react-icons/io";
import { FaStar } from "react-icons/fa";

function Hero(){
    return(
        <div className="mt-[14vh]">
        <div   class = "image"
            style = {{
               height: "40vh",
               width: "100vw",
               backgroundImage:
               'url("https://images.pexels.com/photos/1089306/pexels-photo-1089306.jpeg")',
               backgroundSize: "cover",
               backgroundRepeat: "no-repeat",
               backgroundPosition:"center"

               
            }}>
                <div className="flex flex-col justify-center items-center text-center">
                    <div className="mt-[1vh] flex flex-col gap-4">
<h1 className="text-3xl text-black">SafeVoyage</h1>
<p className="text-2xl text-white">Get the best Experience with us</p>
</div>
</div>
        </div>
        <div className="mt-[4vh] flex justify-around items-center">
      <div className="flex flex-col justify-center items-center w-[400px] h-[40vh] bg-blue-400 rounded-2xl gap-8">
        <h3 className="text-3xl text-white text-center">What We Do</h3>
        <p className="text-2xl text-center">
          We verify the legitimacy of travel agencies, ensuring your trips are safe and secure.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center w-[400px] h-[40vh] bg-blue-400 gap-8 rounded-2xl">
        <h3 className="text-3xl text-white text-center">Our Mission</h3>
        <p className="text-2xl text-center">
          Our mission is to provide travelers with peace of mind by checking the credibility of travel agencies worldwide.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center w-[400px] h-[40vh] bg-blue-400 rounded-2xl gap-8">
        <h3 className="text-3xl text-white text-center">Transparency</h3>
        <p className="text-2xl text-center">
          We maintain transparency in our verification process, providing you with trustworthy information.
        </p>
      </div>
    </div>

<div className="mt-[5vh]">
    <div   class = "image"
            style = {{
               height: "40vh",
               width: "100vw",
               backgroundImage:
               'url("https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
               backgroundSize: "cover",
               backgroundRepeat: "no-repeat",
               backgroundPosition:"center",
               filter: 'brightness(0.5)'               
            }}>
 <div className="flex flex-col justify-center items-center text-center">
                    <div className="mt-[1vh] flex flex-col gap-4 w-[80vw]">
<h1 className="text-3xl text-blue-400 font-bold">ABOUT US</h1>
<p className="text-2xl text-[white] font-bold">Transparency, trust, and reliability are at the core of everything we do. We believe in providing honest and thorough reviews and verifications, so you can make informed decisions about your travel plans.
</p>
</div>
<div className="w-[80vw] mt-20">
    <h1 className="text-3xl  text-blue-400 font-bold">Our Team</h1>
    <p className="text-2xl text-[white] font-bold">Our team consists of experienced travelers, industry professionals, and tech experts who work tirelessly to bring you the most up-to-date and accurate information. We are passionate about travel and dedicated to helping you have the best experience possible.
</p>
</div>
</div>
            </div>
            </div>
<h1 className="text-3xl text-center mt-16">TESTMONIALS</h1>
            <div className="mt-[4vh] flex justify-around items-center">
      <div className="flex flex-col justify-center items-center w-[400px] h-[40vh] bg-blue-400 rounded-2xl gap-8">
      <IoIosContact size={150}/>
        <h1 className="text-3xl">Rihan Aliam</h1>

        <p className="text-2xl text-center">
          We verify the legitimacy of travel agencies, ensuring your trips are safe and secure.
        </p>
        <h1 className="flex gap-3 items-center">
        <FaStar size={40} className="text-yellow-400"/>
        <FaStar size={40} className="text-yellow-400"/>
        <FaStar size={40} className="text-yellow-400"/>
        <FaStar size={40} className="text-yellow-400"/>
        <FaStar size={40} className="text-yellow-400"/>

        </h1>
      </div>
      <div className="flex flex-col justify-center items-center w-[400px] h-[40vh] bg-blue-400 rounded-2xl gap-6">

      <IoIosContact size={150}/>        
      <h1 className="text-3xl">Aspen Gie</h1>
      <p className="text-2xl text-center">
          Our mission is to provide travelers with peace of mind by checking the credibility of travel agencies worldwide.
        </p>
        <h1 className="flex gap-3 items-center">
        <FaStar size={40} className="text-yellow-400"/>
        <FaStar size={40} className="text-yellow-400"/>
        <FaStar size={40} className="text-yellow-400"/>
        <FaStar size={40} className="text-yellow-400"/>
        <FaStar size={40} className="text-yellow-400"/>

        </h1>
      </div>
      <div className="flex flex-col justify-center items-center w-[400px] h-[40vh] bg-blue-400 rounded-2xl gap-6">

      <IoIosContact size={150}/>     
      <h1 className="text-3xl">Liam Paige</h1>
         <p className="text-2xl text-center">
          We maintain transparency in our verification process, providing you with trustworthy information.
        </p>
        <h1 className="flex gap-3 items-center">
        <FaStar size={40} className="text-yellow-400"/>
        <FaStar size={40} className="text-yellow-400"/>
        <FaStar size={40} className="text-yellow-400"/>
        <FaStar size={40} className="text-yellow-400"/>
        <FaStar size={40} className="text-yellow-400"/>

        </h1>
      </div>
    </div>
        </div>
    )
}
export default Hero;