"use client";
import { motion } from "framer-motion";
import ThreeDCard from "./ThreeDCard";
import { GlowingStarsBackgroundCard } from "../ui/glowin-card";
import { EvervaultCard } from "../ui/Evervolt-card";

const Portfolio = () => {
  return (
    <div>
      <div className="p-4  mx-auto  relative  z-10  w-full  pt-10  md:pt-32  px-2">
        <div className="text-4xl  pb-5  md:text-6xl  px-6  text-center  bg-clip-text  text-transparent  bg-gradient-to-b  from-neutral-50  to-neutarl-400  bg-opacity-50">
          Create, Grow, and <br />
          scale your business
        </div>
        <p className="mt-4  text-lg  font-normal  text-neutral-300  max-w-lg  text-center  mx-auto  px-4">
          Custom tailored solutions for your business, We are a team of creative
          who are excited to help you grow your business
        </p>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="items-center  md:flex justify-center md:mx-auto md:space-x-10"
        >
          <ThreeDCard />
          {/* <GlowingStarsBackgroundCard /> */}ify.
          <EvervaultCard text="hover" />
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;
