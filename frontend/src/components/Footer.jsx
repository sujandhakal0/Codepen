import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import codepen from "../assets/codepen.png";
const Footer = () => {
  return (
    <div className=" py-11 w-full bg-black footer ">
      <div className="lg:flex lg:justify-between lg:items-center container">
        <div className="text-[15px] flex flex-col gap-8 sm:gap-3">
          <div className="flex  gap-28 sm:flex-col sm:gap-3">
            <div className="flex flex-col sm:flex-row sm: gap-3">
              <h1 className="text-white font-semibold ">Codepen</h1>
              <Link to="#" className="text-[#9b9dad]">
                About
              </Link>
              <Link to="#" className="text-[#9b9dad]">
                Blog
              </Link>
              <Link to="#" className="text-[#9b9dad]">
                Podcast
              </Link>
              <Link to="#" className="text-[#9b9dad]">
                Documentation
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row sm: gap-3">
              <h1 className="text-white font-semibold">For</h1>
              <Link to="#" className="text-[#9b9dad]">
                Teams
              </Link>
              <Link to="#" className="text-[#9b9dad]">
                Education
              </Link>
              <Link to="#" className="text-[#9b9dad]">
                Privacy
              </Link>
            </div>
          </div>

          <div className="flex  gap-36 sm:flex-col sm:gap-3">
            <div className="flex flex-col sm:flex-row gap-3">
              <h1 className="text-white font-semibold ">Social</h1>
              <Link to="#" className="text-[#9b9dad]">
                Youtube
              </Link>
              <Link to="#" className="text-[#9b9dad]">
                X
              </Link>
              <Link to="#" className="text-[#9b9dad]">
                Instagram
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <h1 className="text-white font-semibold">Community</h1>
              <Link to="#" className="text-[#9b9dad]">
                Sparks
              </Link>
              <Link to="#" className="text-[#9b9dad]">
                Challenges
              </Link>
              <Link to="#" className="text-[#9b9dad]">
                Topics
              </Link>
              <Link to="#" className="text-[#9b9dad]">
                Code of conduct
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-11 text-[#9b9dad] text-[12px] flex flex-col gap-3 relative bottom-7">
          <img className="h-8 w-8 lg:hidden" src={logo} alt="" />
          <img src={codepen} alt="" className="h-[28px] w-[160px]" />
          <div>
            <p>©2024 CodePen</p>
            <p className="italic">Demo or it didn't happen.</p>
            <p>Terms of Service · Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
