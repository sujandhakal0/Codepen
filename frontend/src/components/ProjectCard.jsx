import React from "react";
import { Button } from "./ui/button";

const ProjectCard = ({ project, index }) => {
  return (
    <div
      className="text-white w-full cursor-pointer md:w-[400px] h-[300px] bg-[#1e1f26] rounded-lg p-4 flex flex-col items-center justify-center gap-4"
      key={index}
    >
      <div className="w-full h-[90%]  overflow-hidden border-2 border-solid border-[#717790] cursor-pointer ">
        <iframe
          srcDoc={project.fullCode.output}
          className="h-full w-full cursor-pointer"
        />
      </div>
      
    </div>
  );
};

export default ProjectCard;
