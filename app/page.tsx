import { Spotlight } from "@/components/ui/spotlight";
import Navbar from "../components/shared/Navbar";
import SliderOne from "@/components/shared/Slider";
import Project from "@/components/shared/Project";
import Portfolio from "@/components/shared/Portfolio";
import Shopify from "@/components/shared/Shopify";
export default function Home() {
  return (
    <main className="w-full  min-h-screen p-6 md:p-10 md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Navbar />
      <Spotlight className="hidden  md:flex  md:left-80 " fill="white" />
      <div className="p-4  mx-auto  relative  z-10  w-full  pt-10  md:pt-32  px-2">
        <div className="text-4xl  pb-5  md:text-6xl  px-6  text-center  bg-clip-text  text-transparent  bg-gradient-to-b  from-neutral-50  to-neutarl-400  bg-opacity-50">
          Create, Grow, and <br />
          scale your business
        </div>
        <p className="mt-4  text-lg  font-normal  text-neutral-300  max-w-lg  text-center  mx-auto  px-4">
          Custom tailored solutions for your business, We are a team of creative
          who are excited to help you grow your business
        </p>
        <div className="flex justify-center  mt-10  md:mt-20">
          <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              Border Magic
            </span>
          </button>
        </div>
        <div className="w-full  pt-20">
          <SliderOne />
        </div>
        <div className="w-full  pt-20">
          <Project />
        </div>
        <div className="w-full  pt-20">
          <Portfolio />
        </div>
      </div>
      <div className="w-full  pt-20">
        <Shopify />
      </div>
    </main>
  );
}
