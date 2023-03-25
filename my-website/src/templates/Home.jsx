import {React,useEffect} from "react";
import Navbar from "../components/navbar/navbar";

import AOS from 'aos';
import 'aos/dist/aos.css';


function Home(){

    useEffect(() => {
        AOS.init();
      }, []);


    return(
        <div className="home">
            <Navbar/>
            <div className="hero grid place-items-center">
                <span className="circle rounded-full"></span>
                <span className="circle rounded-full"></span>

                <div className="md:container md:mx-auto">
                    <div className="flex md:mx-auto items-center justify-evenly gap-x-8">
                    
                    <div className="text-center">
                        <h1 className="nametag text-black text-l md:text-5xl font-medium pb-5 animate__heartBeat">
                        WELCOME TO MY <span className=" text-[#FF4B2B]">LABELLERY</span>
                        </h1>
                        <p className="text-slate-600">Mainly displaying about my works around mobile-apps that i develop 
                        <br />also a gallery of photos that i took
                        </p>
                    </div>


                    </div>
                </div>
            
            </div>

            <div className="about-me py-36"  id="about">

                <div className="md:container md:mx-auto">
                    <div className="flex md:mx-auto items-center justify-evenly gap-x-8">
                    
                    <div className="introduction" data-aos="fade-left">
                        <h1 className="text-white font-medium text-l md:text-5xl pb-8">
                        About Me
                        </h1>
                        <p className="text-[#F8F7FF]">
                            I'm currently a student at Universitas Jember on Information System's Bachelor Degree Program 💻
                        <br />You can Call me Dhu. What i do? as far i acknowledge my skill is Web Development especially front-end,
                        <br />Data Science, Mobile Development a litle bit. And some Office like Excel and word  
                        <br /> Photograph is one of my hobbies, therefore i'll include my photograph as well 😁.  
                        </p>
                        <br />
                        <p className="text-[#F8F7FF]">
                            I might be new with those domain, but i acknowledged myself as hardworker and capable to learn more!! 
                          <br />
                        </p>
                    </div>

                    <div className="pfp mr-8">
                        {/* <img src='images/bmo.jpg' alt="" className="img-responsive rounded-full w-36" /> */}
                        <div className="pfp-placehold rounded-full" data-aos="flip-right">
                            
                        </div>
                    </div>

                    </div>
                </div>
          

            </div>

        </div>
    )

}

export default Home;