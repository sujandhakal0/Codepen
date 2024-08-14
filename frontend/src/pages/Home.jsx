import React, { useContext, useState } from "react";
import "./home.css";
import Navbar from "@/components/Navbar";
import SideMenu from "@/components/SideMenu";
import Footer from "@/components/Footer";
import { Route, Routes, useNavigate } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import { Context } from "@/main";
import Projects from "./Projects";
import Main from "@/components/Main";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { isAuthenticated } = useContext(Context);
  const navigate = useNavigate();

  return (
    <div className="w-full ">
      <div className="flex  ">
        <SideMenu />
        <div
          className={`right flex-1 min-h-screen max-h-screen overflow-x-auto  h-full flex flex-col items-start justify-start `}
        >
          <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          {isAuthenticated ? (
            <div class="h-screen flex flex-col w-full">
              <div class="flex-grow">
                <Projects searchQuery={searchQuery} />
              </div>
              <div class=" text-white py-1 px-1">
                <Footer />
              </div>
            </div>
          ) : (
            <>
              <Routes>
                <Route path="signup" element={<Signup />} />
                <Route path="login" element={<Login />} />
                <Route path="/" element={<Main />} />
              </Routes>
              <Footer />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
