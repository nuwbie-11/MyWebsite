import { React, useEffect } from "react";
import Navbar from "../components/navbar/navbar";

import AOS from "aos";
import "aos/dist/aos.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  const sliderSettings = {
    dots: true,
    autoplay: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "center",
    centerMode: true,
    centerPadding: "60px",
    lazyLoad: true,
  };

  return (
    <div className="home">
      <Navbar />
      <div className="hero grid place-items-center">
        <span
          className="circle rounded-full animate__wobble"
          data-aos="fade-right"
        ></span>
        <span className="circle rounded-full"></span>
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
                Mainly displaying about my works around mobile-apps that i
                develop
                <br />
                also a gallery of photos that i took
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
          <div className="flex md:mx-auto items-center justify-between gap-x-8">
            <div className="introduction" data-aos="fade-left">
              <h1 className="text-white font-medium text-l md:text-5xl pb-8">
                About Me
              </h1>
              <p className="text-[#F8F7FF]">
                I'm currently a student at Universitas Jember on Information
                System's Bachelor Degree Program 💻
                <br />
                You can Call me Dhu. What i do? as far i acknowledge my skill is
                Web Development especially front-end,
                <br />
                Data Science, Mobile Development a litle bit. And some Office
                like Excel and word
                <br /> Photograph is one of my hobbies, therefore i'll include
                my photograph as well 😁.
              </p>
              <br />
              <p className="text-[#F8F7FF]">
                I might be new with those domain, but i acknowledged myself as
                hardworker and capable to learn more!!
                <br />
              </p>
            </div>

            <div className="pfp mr-8 ">
              <img
                src={process.env.PUBLIC_URL + "/logo192.png"}
                alt=""
                className="img-responsive rounded-full w-36 "
                data-aos="flip-right"
                loading="lazy"
              />
              {/* <div className="pfp-placehold rounded-full" data-aos="flip-right"> */}

              {/* </div> */}
            </div>
          </div>

          <div className="md:container md:mx-auto socialLink pt-12 flex gap-x-3">
            <FontAwesomeIcon
              icon={faGithub}
              size="lg"
              style={{ color: "white" }}
            ></FontAwesomeIcon>
            <FontAwesomeIcon
              icon={faLinkedin}
              size="lg"
              style={{ color: "white" }}
            ></FontAwesomeIcon>
          </div>
        </div>
      </div>

      <div className="works flex items-center justify-center" id="works">
        <div className="md:container md:mx-auto">
          <div className="grid gap-y-8">
            <div className="sectionTitle ">
              <h1 className="text-center text-white font-medium text-l md:text-5xl mb-8">
                Works
              </h1>
            </div>
            <div
              className="md:mx-auto"
              style={{
                width: "80vw",
              }}
            >
              <Slider {...sliderSettings}>
                <div>
                  <div className="flex items-center justify-evenly">
                    <div className="imageSection">
                      <img
                        src={process.env.PUBLIC_URL + "/Logo Fx.png"}
                        className="img-responsive rounded w-36"
                        alt=""
                      />
                    </div>

                    <div className="textSection">
                      <p className="text-[#F8F7FF] text-right">
                        <span className="font-medium text-l">LIHAT.IN</span>
                        <br />
                        An Application that mainly to help people with Visually
                        Impaired condition
                        <br />
                        to recognize Rupiah paper denomination
                      </p>
                      <br />
                      <a
                        href={"https://github.com/nuwbie-11/"}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <p className="text-white text-right italic">
                          read more
                        </p>
                      </a>
                    </div>
                  </div>
                </div>

                <div>
                  <img
                    src={process.env.PUBLIC_URL + "/logo192.png"}
                    className="img-responsive rounded w-36 mx-auto mb-3"
                    alt=""
                  />
                  <p className="text-white text-center">APP NAME</p>
                </div>

                <div>
                  <img
                    src={process.env.PUBLIC_URL + "/logo192.png"}
                    className="img-responsive rounded w-36 mx-auto mb-3"
                    alt=""
                  />
                  <p className="text-white text-center">APP NAME</p>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
