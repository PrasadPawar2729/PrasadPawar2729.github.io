import React from "react";
import Hero from '../assets/hero3.jpeg'
const Home = () => {
  return (
    <div
      name="Home"
      className="w-full pt-12 sm:h-screen
         bg-gradient-to-b from-black to-gray-800 via-black"
    >
      <div className="max-w-screen-md mx-auto flex flex-col items-center justify-center h-full px-4 sm:flex-row sm:ml-12 md:mx-auto">
        <div className="flex flex-col justify-center h-full pt-10">
          <h2
            className="text-4xl
                     sm:text-6xl
                     font-bold 
                     text-white"
          >
            I'm a Full Stack Developer
          </h2>

          <p className="text-gray-500 py-4  max-w-md">
          A self-motivated, hard-working, and ambitious Full Stack Web Developer with 1,200 hours of coding practice.
           Proficient in MERN stack, adept at solving 500+ DSA problems.
            Experienced in both solo and collaborative project development. 
            Possesses strong problem-solving abilities and a passion for continuous learning.
             Looking forward to working as a developer and competent employee in an exciting tech company.
          </p>

          <div>
          <a
  href="https://drive.google.com/file/d/17uJe1igvR59n7lxBBmmaXqM7sIoo_W9G/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
  className="w-fit text-white px-6 py-3 my-2 flex items-center cursor-pointer rounded-md bg-gradient-to-r from-purple-700 to-orange-600 font-bold"
>
  Resume
</a>
          </div>
        </div>

        <div>
          <img
            src={Hero}
            alt="profile image"
            className="rounded-2xl mx-auto w-2/4 my-12 sm:w-2/3 md:w-full md:mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
