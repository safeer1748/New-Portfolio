import React, { useState } from "react";
import Web_projects from "./Web_projects";
import Graphics_gallery from "./Graphics_gallery";
// import Graphic_projects from "./Graphic_projects";


const Projects = () => {
  const [toggleButton, setToggleButton] = useState("web");
  
  return (
    <>
      <section
        id="projects"
        className="relative w-full flex flex-col justify-center items-center gap-y-16 px-6 md:px-20"
      >
        <h1 className="font-bold text-4xl mt-16">Projects</h1>
        <div className="w-full max-w-[90rem]">
        <div className="flex justify-end w-full mb-5">
          <button
            onClick={() => setToggleButton("web")}
            className={`${
              toggleButton === "web" ? "bg-black text-white" : "text-black"
            } border border-black font-medium px-5 py-2`}
          >
            Web
          </button>
          <button
            onClick={() => setToggleButton("graphics")}
            className={`${
              toggleButton === "graphics" ? "bg-black text-white" : "text-black"
            } border border-black font-medium px-5 py-2`}
          >
            Graphics
          </button>
        </div>
        {toggleButton === "web" ? <Web_projects /> : <Graphics_gallery/>}
        </div>
      </section>
    </>
  );
};

export default Projects;
