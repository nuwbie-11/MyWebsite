import React from "react";
import Navbar from "../components/navbar/navbar";
function Home(){
    return(
        <div className="home">
            <Navbar/>
            <div className="hero grid place-items-center">
            <div className="md:container md:mx-auto">
                <div className="flex md:mx-auto items-center justify-evenly gap-x-8">
                
                <div className="text-center">
                    <h1 className="text-black text-l md:text-5xl font-medium pb-5">
                    WELCOME TO MY <span className="text-[#FF4B2B]">LABELLERY</span>
                    </h1>
                    <p className="text-slate-600">Mainly displaying about my works around mobile-apps that i develop 
                    <br />also a gallery of photos that i took
                    </p>
                </div>


                </div>
            </div>
            
            </div>

            <div className="about-me py-36" id="about">

                <div className="md:container md:mx-auto">
                    <div className="flex md:mx-auto items-center justify-evenly gap-x-8">
                    
                    <div className="introduction">
                        <h1 className="text-white font-medium text-l md:text-5xl pb-8">
                        About Me
                        </h1>
                        <p className="text-[#EEEEEE]">
                            I'm currently a student at Universitas Jember on Information System's Bachelor Degree Program 💻
                        <br />You can Call me Dhu. What i do? as far i acknowledge my skill is Web Development especially front-end,
                        <br />Data Science, Mobile Development a litle bit. And some Office like Excel and word  
                        <br /> Photograph is one of my hobbies, therefore i'll include my photograph as well 😁.  
                        </p>
                    </div>

                    <div className="pfp mr-8">
                        <img src='images/bmo.jpg' alt="" className="img-responsive rounded-full w-36" />
                    </div>

                    </div>
                </div>
          

            </div>

        </div>
    )

}

export default Home;