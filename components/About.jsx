import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/about.png";

const About = () => {
  return (
    <div
      id="about"
      className="w-full bg-slate-400 md:h-screen p-2 flex items-center py-16"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <h1 className="uppercase tracking-widest text-[#1acc89]">About</h1>
          <h2 className="py-4">Vision & Inclusion</h2>
          <p className="py-2 text-gray-600">
            Inclusion is a guiding principle of Katapult X, and we strive to
            create a safe and supportive space for everyone who seeks our
            services. We ensure that our programs are accessible and tailored to
            meet the diverse needs of our beneficiaries, regardless of their
            circumstances or challenges.
          </p>
          <p className="py-2 text-gray-600">
            I started web developement in 2013 managing multiple e-commerce
            websites on CMS platforms such as WordPress, BigCommerce, and
            Shopify. I have experience working directly with clients and taking
            mock wireframes all the way to deployed applications. In my spare
            time I run Code Commerce, a Youtube channel where I teach web
            developement and various front-end technologies.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
