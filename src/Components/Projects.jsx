import React from "react";
import { FaReact, FaNodeJs, FaCss3Alt, FaHtml5, FaBootstrap, FaJs } from "react-icons/fa";
import { SiMongodb, SiExpress, SiChakraui, SiJavascript } from "react-icons/si";
import Recipe from "../assets/recipe.png";
import Shop from "../assets/shopCart.png";
import Travel from "../assets/travel&tour.png";
import Art from "../assets/art.png";

const techLogos = {
  "React": <FaReact size={20} className="inline-block mr-1" />,
  "Node.js": <FaNodeJs size={20} className="inline-block mr-1" />,
  "MongoDB": <SiMongodb size={20} className="inline-block mr-1" />,
  "Express": <SiExpress size={20} className="inline-block mr-1" />,
  "CSS": <FaCss3Alt size={20} className="inline-block mr-1" />,
  "Chakra UI": <SiChakraui size={20} className="inline-block mr-1" />,
  "HTML": <FaHtml5 size={20} className="inline-block mr-1" />,
  "Bootstrap": <FaBootstrap size={20} className="inline-block mr-1" />,
  "JavaScript": <SiJavascript size={20} className="inline-block mr-1" />,
};


const Projects = () => {
  const projects = [
    {
      id: 1,
      image: Recipe,
      demoLink: "https://recipe-genius-app-4quw.vercel.app",
      codeLink: "https://github.com/PrasadPawar2729/RecipeGeniusApp?tab=readme-ov-file",
      description: "A web app for discovering and sharing recipes.",
      techSkills: ["React", "Node.js",  "Express","MongoDB","Chakra UI"],
    },
    {
      id: 2,
      image: Shop,
      demoLink: "https://shop-cart-flame.vercel.app",
      codeLink: "https://github.com/vpavan2105/shop-cart",
      description: "An online shopping cart application.",
      techSkills: ["React", "Node.js", "Express", "MongoDB", "Chakra UI"],
    },
    {
      id: 3,
      image: Travel,
      demoLink: "https://code-yogi.netlify.app/",
      codeLink: "https://github.com/sachinkumanache/code-yogi-4567",
      description: "A travel and tour management application.",
      techSkills: ["React", "Chakra UI","MongoDB"],
    },
    {
      id: 4,
      image: Art,
      demoLink: "https://art-gallary-do7i.vercel.app/",
      codeLink: "https://github.com/Sameeer-Ahmad/ArtGallary",
      description: "An online art gallery to showcase artworks.",
      techSkills: ["React", "Chakra UI","MongoDB"],
    },
  ];

  return (
    <div
      name="Projects"
      className=" bg-gradient-to-b from-black to-gray-800 pt-[20%] w-full sm:h-screen md:h-screen text-white"
    >
      <div className="pb-20 mt-16 max-w-screen-lg p-2 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8  ">
          <p className="  text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>

          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-12 sm:px-0">
          {projects.map(({ id, image, demoLink, codeLink, description, techSkills }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <a href={demoLink} target="_blank" rel="noopener noreferrer">
                <img
                  src={image}
                  alt="project-images"
                  className="rounded-md duration-200 hover:scale-105"
                />
              </a>

              <div className="p-4">
                <p className="text-xl font-bold">{description}</p>
                <div className="text-gray-400">
                  <p className="font-semibold">Tech Skills:</p>
                  {techSkills.map((skill, index) => (
                    <div key={index} className="flex items-center">
                      {techLogos[skill]} <span className="ml-1">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-orange-500">
                  <a href={demoLink} target="_blank" rel="noopener noreferrer">
                    Demo
                  </a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-orange-500">
                  <a href={codeLink} target="_blank" rel="noopener noreferrer">
                    Code
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
