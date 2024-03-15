import { Spotlight } from "@/components/ui/spotlight";
import Navbar from "../components/shared/Navbar";
export default function Home() {
  return (
    <main className="w-full  h-screen p-6 md:p-10 md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Navbar />
      <Spotlight
        className="hidden  md:flex  md:left-80  md:-top-80"
        fill="white"
      />
      <div className="p-4  mx-auto  "></div>
    </main>
  );
}
