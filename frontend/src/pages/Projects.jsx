import React, { useState, useEffect } from "react";
import axios from "axios";
import ProjectCard from "@/components/ProjectCard";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

const Projects = ({ searchQuery }) => {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  const handleProjectClick = (projectId) => {
    navigate(`/pen/${projectId}`);
  };

  const handleDelete = async (projectId) => {
    try {
      await axios.delete(
        `https://codepen-backend-t587.onrender.com/api/v1/save/deleteProgram/${projectId}`
      );
      setProjects((prevProjects) =>
        prevProjects.filter((project) => project._id !== projectId)
      );
      toast.success("Project deleted successfully");
    } catch (error) {
      toast.error("Failed to delete project");
    }
  };

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(
          "https://codepen-backend-t587.onrender.com/api/v1/save/getProjects"
        );
        setProjects(response.data.programs);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  // Filter projects based on search query
  const filteredProjects = projects.filter((project) => {
    const searchText = searchQuery.toLowerCase();
    return project.fullCode.title.toLowerCase().includes(searchText);
    // Add additional search criteria logic if needed (e.g., description, tags)
  });

  return (
    <div className="w-full py-6 flex  items-center justify-center gap-6 flex-wrap  ">
      {filteredProjects &&
        filteredProjects.map((project, index) => (
          <div className="bg-[#1e1f26] p-3 rounded-lg " key={index}>
            <div
              onClick={() => handleProjectClick(project._id)}
              className="cursor-pointer"
            >
              <ProjectCard key={index} project={project} index={index} />
            </div>
            <div className="flex items-center justify-center gap-3">
              <div className="text-[#fff] font-bold">
                {project.fullCode.title}
              </div>
              <div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="inline-block"
                  onClick={() => handleDelete(project._id)}
                >
                  <Button>Delete</Button>
                </motion.div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Projects;
