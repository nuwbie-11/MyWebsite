import { React, useEffect } from "react";
import Navbar from "../components/navbar/navbar";

import AOS from "aos";
import "aos/dist/aos.css";

import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

import SocialLink from "../components/SocialLink/SocialLink";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import WorksSlider from "../components/slider/WorksSlider";
import { WORKS, sliderSettings } from "../const/constant";

function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="home">
      <Navbar />
      <div className="hero grid place-items-center">
        <span
          className="circle rounded-full animate__wobble"
          data-aos="fade-right"
        ></span>
        <span className="circle rounded-full" data-aos="fade-left"></span>
        <div className="md:container md:mx-auto">
          <div className="flex md:mx-auto items-center justify-evenly gap-x-8">
            <div className="text-center">
              <h1 className="nametag text-black text-l md:text-5xl font-medium pb-5 animate__heartBeat">
                ADWITIYA.
                <span className=" text-transparent bg-clip-text bg-gradient-to-r from-[#FF4B2B] to-pink-600">
                  DEV
                </span>
              </h1>
              <p className="text-slate-600">
                Mainly Displaying about my works i've encountered
                <br />

              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="about-me py-8 flex items-center justify-center"
        id="about"
      >
        <div className="md:container md:mx-auto">
          <div className="flex items-center justify-around">
            <div className="introduction" data-aos="fade-left">
              <h1 className="text-white font-medium text-l md:text-5xl pb-8">
                About Me
              </h1>
              {/* <hr /> */}
              <p className="text-[#F8F7FF] ">
                I'm a Fresh Graduates from Universitas Jember on Information
                System's Bachelor Degree Program 💻
                <br />
                You can Call me Dhu. What i do? I do Web Development, with focus
                on front-end (currently learning backend),
                <br />
                i also do data related stuff like Data Analytics and data
                science. On top of that i also do Machine Learning Engineering
                <br />
                Data Science, Mobile Development a litle bit. And some Office
                like Excel and word
                <br /> I also do photograpy as one of my hobbies. <a className="font-bold hover:text-sky-500" href="https://www.eyeem.com/u/adwitya_s/photos">See here</a> if you interested .
              </p>
              <br />
              <p className="text-[#F8F7FF]">
                I might be new with those domain, but i acknowledged myself as
                hardworker and capable to learn more!!
                <br />
              </p>

              <div className="md:container md:mx-auto socialLink pt-12 flex gap-x-3">
                <SocialLink Icon={faGithub} Link="https://github.com/nuwbie-11/" ></SocialLink>
                <SocialLink Icon={faLinkedin} Link="ttps://www.linkedin.com/in/adwitya-sadhup/" ></SocialLink>
              </div>
            </div>

            <div className="pfp mb-12">
              <img
                src={process.env.PUBLIC_URL + "/PFP.png"}
                alt=""
                className="img-responsive rounded-full"
                data-aos="flip-right"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="works flex items-center justify-center md:container md:mx-auto" id="works">
          <div className="grid gap-y-8">
            <div className="sectionTitle ">
              <h1 className="text-center text-white font-medium text-l md:text-5xl mb-8">
                Works
              </h1>
              <p className="text-center text-slate-600 italic ">Shows most anticipated projects of mine. More on my github Pages!!</p>
            </div>
            <div
              className=""
              style={{
                width: "80vw",
              }}
            >
              <Slider {...sliderSettings}>
                {WORKS &&
                  WORKS.map((item) => (
                    <WorksSlider
                      title={item.title}
                      description={item.description}
                      url={item.url}
                      imageUrl={item.imageUrl}
                    />
                  ))}
              </Slider>
            </div>
          </div>
      </div>

      <div className="footer text-white">
        <footer className="grid grid-cols-3 justify-items-center  h-full">
          <div className="grid grid-rows-3 content-between items-center">
            <div className=""></div>
            <h1 className="nametag  text-l md:text-3xl font-medium">
                ADWITIYA.
                <span className=" text-transparent bg-clip-text bg-gradient-to-r from-[#FF4B2B] to-pink-600">
                  DEV
                </span>
              </h1>
            <div className="socials flex gap-x-5">
            <SocialLink Icon={faGithub} Link="https://github.com/nuwbie-11/" ></SocialLink>
                <SocialLink Icon={faLinkedin} Link="https://www.linkedin.com/in/adwitya-sadhup/" ></SocialLink>
                <SocialLink Icon={faTwitter} Link="https://twitter.com/saduuduuw"></SocialLink>
            </div>
          </div>
          <div className="">
            <p>
              
            </p>
          </div>
          <div className="">
            <p>
              Ppp
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Home;
