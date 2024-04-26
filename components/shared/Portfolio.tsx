"use client";
import { motion } from "framer-motion";

import { WobbleCard } from "../ui/Woble";
import Image from "next/image";

const Portfolio = () => {
  return (
    <section id="portfolio">
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
          className="items-center mt-16  md:flex justify-center md:mx-auto md:space-x-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
            <WobbleCard
              containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
              className=""
            >
              <div className="max-w-xs">
                <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                  Gippity AI powers the entire universe
                </h2>
                <p className="mt-4 text-left  text-base/6 text-neutral-200">
                  With over 100,000 mothly active bot users, Gippity AI is the
                  most popular AI platform for developers.
                </p>
              </div>
              <Image
                src="/grow.jpg"
                width={500}
                height={500}
                alt="linear demo image"
                className="absolute -right-4 lg:-right-[5%] grayscale filter -bottom-10 object-contain rounded-2xl"
              />
            </WobbleCard>
            <WobbleCard containerClassName="col-span-1 min-h-[300px]">
              <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                No shirt, no shoes, no weapons.
              </h2>
              <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                If someone yells “stop!”, goes limp, or taps out, the fight is
                over.
              </p>
            </WobbleCard>
            <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
              <div className="max-w-sm">
                <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                  Signup for blazing-fast cutting-edge state of the art Gippity
                  AI wrapper today!
                </h2>
                <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                  With over 100,000 mothly active bot users, Gippity AI is the
                  most popular AI platform for developers.
                </p>
              </div>
              <Image
                src="/cyber.jpg"
                width={500}
                height={500}
                alt="linear demo image"
                className="absolute -right-10  lg:-right-[5%] -bottom-5 object-contain rounded-2xl"
              />
            </WobbleCard>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
