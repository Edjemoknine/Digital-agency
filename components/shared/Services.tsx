import React from "react";
import { HoverEffect } from "./Card";
export const projects = [
  {
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
  {
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
];
const Services = () => {
  return (
    <section id="services">
      <div className="p-4  mx-auto  relative  z-10  w-full  pt-10  md:pt-32  px-2">
        <div className="text-4xl  pb-5  md:text-6xl  px-6  text-center  bg-clip-text  text-transparent  bg-gradient-to-b  from-blue-300  to-lime-400  bg-opacity-50">
          Some of our projects
        </div>
        <p className="mt-4  text-lg  font-normal  text-neutral-300  max-w-lg  text-center  mx-auto  px-4">
          This are of my projects that I have built in my learning journey using
          the cutting-edge technology in the market.
        </p>
      </div>
      <div>
        <HoverEffect items={projects} />
      </div>
    </section>
  );
};

export default Services;
