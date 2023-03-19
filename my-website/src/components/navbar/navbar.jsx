import React,{useState} from "react";
// import { Component } from "react";
import "./navbar.css";

function Navbar() {
    const [navbar,setNavbar] = useState(false);
  


    const changeNavColor = () =>{
        if (window.scrollY >=90) {
            setNavbar(true);
        }else{
            setNavbar(false);
        }
    }

    window.addEventListener("scroll", changeNavColor);
    
    return (
      <nav className={navbar ? 'nav scrolled':'nav'} id="nav">
        <div className="md:container flex items-center justify-center gap-x-10 mx-auto py-5">
          <div className="home_nav">
            <h1 className="transition ease-in-out font-semibold  hover:scale-110 duration 300">
              <a className={navbar ? 'text-white hover:text-black' : 'text-black hover:text-[#222222]'} href="/">HOME</a>
            </h1>
          </div>

          <div className="abt_nav">
            <h1 className="transition ease-in-out font-semibold text-black hover:text-white hover:scale-110 duration 300">
              <a className={navbar ? 'text-white hover:text-black' : 'text-black hover:text-[#222222]'} href="#about">ABOUT</a>
            </h1>
          </div>
        </div>
      </nav>
    );
  
}

export default Navbar;