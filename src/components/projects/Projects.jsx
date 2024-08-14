import React from "react";
import Web_projects from "./Web_projects";

const Projects = () => {
  return (
    <>
      <section id="projects" className="relative w-full flex flex-col justify-center items-center gap-y-16 px-6 md:px-20">
        <h1 className="font-bold text-4xl mt-28">Projects</h1>
        <Web_projects/>
      </section>
    </>
  );
};

export default Projects;
