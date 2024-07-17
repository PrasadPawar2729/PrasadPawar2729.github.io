import React from "react";
import Recipe from "../assets/recipe.png";
import Shop from "../assets/shopCart.png";
import Travel from "../assets/travel&tour.png";
import Stay from "../assets/staybnb.png";
import Boat from "../assets/boat.png";
import Art from "../assets/art.png";


const Projects = () => {
  const projects = [
    {
      id: 1,
      image: Recipe,
      demoLink: "https://recipe-genius-app-4quw.vercel.app",
      codeLink: "https://github.com/PrasadPawar2729/RecipeGeniusApp?tab=readme-ov-file",
    },
    {
      id: 2,
      image: Shop,
      demoLink: "https://shop-cart-flame.vercel.app",
      codeLink: "https://github.com/vpavan2105/shop-cart",
    },
    {
      id: 3,
      image: Travel,
      demoLink: "https://code-yogi.netlify.app/",
      codeLink: "https://github.com/sachinkumanache/code-yogi-4567",
    },
    {
      id: 4,
      image: Art,
      demoLink: "https://art-gallary-do7i.vercel.app/",
      codeLink: "https://github.com/Sameeer-Ahmad/ArtGallary",
    },

    {
      id: 5,
      image: Boat,
      demoLink: "https://github.com/aakhtar10/algorithm_genius",
      codeLink: "https://github.com/aakhtar10/algorithm_genius",
    },
    {
      id: 6,
      image: Stay,
      demoLink: "https://github.com/tashwini-p/StayBnB?tab=readme-ov-file",
      codeLink: "https://github.com/tashwini-p/StayBnB",
    },
  ];

  return (
    <div
      name="Projects"
      className="bg-gradient-to-b from-black to-gray-800 pt-[20%] w-full sm:h-screen md:h-screen text-white"
    >
      <div className="max-w-screen-lg p-2 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>

          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm-grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, image, demoLink, codeLink }) => {
            return (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <a href={demoLink} target="_blank">
                  <img
                    src={image}
                    alt="project-images"
                    className="rounded-md duration-200 hover:scale-105"
                  />
                </a>

                <div className="flex items-center justify-center">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-orange-500">
                    {" "}
                    <a href={demoLink} target="_blank">
                      Demo
                    </a>
                  </button>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-orange-500">
                    <a href={codeLink} target="_blank">
                      Code
                    </a>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
