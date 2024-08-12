import React from "react";
import logo from "../assets/logo.png";
import codepen from "../assets/codepen.png";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { IoIosSettings } from "react-icons/io";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Hero = () => {
  const codeStringHTML = `<div class="react"></div>`;
  const codeStringCSS = `.rect {
background: linear-gradient(
-119deg}`;
  const codeStringJS = `var colors = ["#74B087"];
function animate() {};`;

  return (
    <div className=" flex items-center justify-between lg:py-11 container">
      <div className="flex flex-col gap-6 items-center xl:items-start px-5 sm:px-11 md:px-16 ">
        <img
          src={codepen}
          alt=""
          className="h-[35px] w-[200px] self-center my-6 mb-2 xl:hidden"
        />

        <div className="bg-[#40434c]  flex w-full h-[310px] rounded-lg relative shadow-lg text-[#c5c8d4] font-bold text-[14px] xl:hidden">
          <div className="w-[300px] h-[140px]  absolute top-4 -left-4 shadow-lg bg-[#1d1e22] rounded">
            <div className="flex items-center gap-3 px-4 py-2">
              <IoIosSettings className="text-xl" /> HTML
            </div>
            <div className="bg-[#282c34] h-full">
              <SyntaxHighlighter language="jsx" style={atomOneDark}>
                {codeStringHTML}
              </SyntaxHighlighter>
            </div>
          </div>
          <div className="w-[300px] h-[140px]  absolute bottom-4 right-[40%] shadow-2xl bg-[#1d1e22] rounded">
            <div className="flex items-center gap-3 px-4 py-2">
              <IoIosSettings className="text-xl" /> JS
            </div>
            <div className="bg-[#282c34] h-full">
              <SyntaxHighlighter language="jsx" style={atomOneDark}>
                {codeStringJS}
              </SyntaxHighlighter>
            </div>
          </div>
          <div className="w-[300px] h-[140px]  absolute top-20 -right-4 shadow-lg bg-[#1d1e22] rounded">
            <div className="flex items-center gap-3 px-4 py-2">
              <IoIosSettings className="text-xl" /> CSS
            </div>
            <div className="bg-[#282c34] h-full">
              <SyntaxHighlighter language="jsx" style={atomOneDark}>
                {codeStringCSS}
              </SyntaxHighlighter>
            </div>
          </div>
        </div>

        <div className="flex items-start gap-3 mt-11">
          <img src={logo} alt="" className="hidden xl:block mt-3" />
          <h1 className="text-white text-[28px] md:text-[40px] font-bold text-center xl:text-left ">
            The best place to build, test, and discover front-end code.
          </h1>
        </div>
        <p className="text-[#c7c9d3] text-center xl:text-left">
          CodePen is a{" "}
          <span className="font-bold text-white text-[18px]">
            social development environment
          </span>{" "}
          for front-end designers and developers. Build and deploy a website,
          show off your work, build test cases to learn and debug, and find
          inspiration.
        </p>

        <Link to={"/signup"} className="">
          <Button className="bg-[#47cf73] text-black hover:text-white hover:bg-[#318b46] ">
            Sign Up For Free
          </Button>
        </Link>
      </div>
      <div className="w-full hidden xl:block container ">
        <div className="bg-[#40434c]   lg:flex w-full h-[310px] rounded-lg relative shadow-lg text-[#c5c8d4] font-bold text-[14px]  flex-col items-end">
          <div className="w-[300px] h-[100px]  absolute -top-8 right-4 shadow-lg bg-[#1d1e22] rounded">
            <div className="flex items-center gap-3 px-4 py-2">
              <IoIosSettings className="text-xl" /> HTML
            </div>
            <div className="bg-[#282c34] h-full">
              <SyntaxHighlighter language="jsx" style={atomOneDark}>
                {codeStringHTML}
              </SyntaxHighlighter>
            </div>
          </div>
          <div className="w-[300px] h-[100px]  absolute top-[35%] -right-4 shadow-2xl bg-[#1d1e22] rounded">
            <div className="flex items-center gap-3 px-4 py-2">
              <IoIosSettings className="text-xl" /> JS
            </div>
            <div className="bg-[#282c34] h-full">
              <SyntaxHighlighter language="jsx" style={atomOneDark}>
                {codeStringJS}
              </SyntaxHighlighter>
            </div>
          </div>
          <div className="w-[300px] h-[100px] absolute -bottom-10 right-4  shadow-lg bg-[#1d1e22] rounded">
            <div className="flex items-center gap-3 px-4 py-2">
              <IoIosSettings className="text-xl" /> CSS
            </div>
            <div className="bg-[#282c34] h-full">
              <SyntaxHighlighter language="jsx" style={atomOneDark}>
                {codeStringCSS}
              </SyntaxHighlighter>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
