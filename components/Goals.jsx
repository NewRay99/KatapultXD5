import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import GoalsImg from "../public/assets/bgClouds.png";
// counter
import CountUp from "react-countup";
// variants
import { fadeIn } from "../variants";
const squareVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  hidden: { opacity: 0, scale: 0 },
  //fadeIn: ("right", 0.6),
};
const Goals = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div
      id="goals"
      className="w-full bg-black max-h-[500px] p-2 flex items-center py-8"
    >
      <div className="max-w-[1240px] flex   m-2 w-max">
        <div className="flex md:flex-row flex-col">
          <div className="flex-1/2  min-w-[60%] z-10">
            <h1 className="uppercase tracking-widest text-[#1acc89] ">Goals</h1>

            {/* counters */}
            <motion.div
              ref={ref}
              variants={squareVariants}
              initial="hidden"
              animate={controls}
              exit="hidden"
              className="text-center text-white mx-1 md:flex md:max-w-xl xl:max-w-none  xl:mx-0 mb-8"
            >
              <div className="flex flex-1 xl:gap-x-4 py-10 p-2 z-10">
                {/* event */}
                <div className="relative flex-1 after:w-[1px] after:h-full after:bg-black/10 after:absolute after:top-0 after:right-0">
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <CountUp ref={ref} start={0} end={10} duration={5} />
                  </div>
                  <div className="text-xs uppercase text-center mx-1">
                    College Prospects into University
                  </div>
                </div>
                {/* clients */}
                <div className="relative flex-1 after:w-[1px] after:h-full after:bg-black/10 after:absolute after:top-0 after:right-0">
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <CountUp ref={ref} start={0} end={1000} duration={3} />
                  </div>
                  <div className="text-xs uppercase leading-[1.4]  mx-1">
                    Laptops to Schools
                  </div>
                </div>
                {/* projects */}
                <div className="relative flex-1 after:w-[1px] after:h-full after:bg-black/10 after:absolute after:top-0 after:right-0">
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <CountUp start={0} end={50} duration={5} />
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4]  mx-1">
                    Mentor Graduate
                  </div>
                </div>
                {/* awards */}
                <div className="relative flex-1">
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    £<CountUp start={0} end={100} duration={3} />K
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4]  mx-1">
                    School Loans/Fees
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="  flex-col text-2xl text-white   align-text-middle md:relative z-5 m-2 min-w-[40%] ">
            Accelerate career opportunities for individuals from underprivileged
            backgrounds, empowering dreams and transforming lives.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goals;
