import React from "react";
import Hero from "./Hero";
import Section from "./Section";

const Main = () => {
  return (
    <div className="flex  flex-col items-center justify-center w-full py-11">
      <Hero />
      <Section />
    </div>
  );
};

export default Main;
