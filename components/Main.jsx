import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
// framer motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      {/* text */}
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center    ">
        <div className="text-center flex flex-col   object-center justify-center items-center  xl:pt-40 xl:text-left h-full container mx-auto ">
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="uppercase text-sm tracking-widest text-gray-600"
          >
            LET&#39;S BUILD SOMETHING TOGETHER
          </motion.h1>

          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            Accelerate you <br /> For a{" "}
            <span className="text-accent">brighter future</span>
          </motion.h1>
          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-6 xl:mb-8"
          >
            Create a society where every individual, regardless of their
            background, has equal access to education and career opportunities.
          </motion.p>
          {/* btn */}
          {/* <div className="flex justify-center xl:hidden relative">
             <ProjectsBtn /> 
          </div> */}
          {/* <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
             <ProjectsBtn /> 
          </motion.div> */}

          <div className="flex  gap-4 justify-center max-w-[330px] ">
            <a
              href="https://www.linkedin.com/in/jay-rohman-47aab124/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://github.com/fireclint"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
            <Link href="/#contact">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </Link>
            <Link href="/resume">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
