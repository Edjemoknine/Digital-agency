"use client";
import Link from "next/link";
import { motion } from "framer-motion";
const DropDownMenu = ({ onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: "-80%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "-100%" }}
      transition={{ duration: 0.5 }}
      className="w-screen h-screen space-y-4  absolute top-28 left-0 right-0 z-50 rounded-3xl text-slate-300 bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400"
    >
      <div className="flex flex-col space-y-10 z-50">
        <Link className="text-black text-2xl" href={"/pricing"}>
          Pricing
        </Link>
        <Link className="text-black text-2xl" href={"/pricing"}>
          Pricing
        </Link>
        <Link className="text-black text-2xl" href={"/pricing"}>
          Pricing
        </Link>
        <Link className="text-black text-2xl" href={"/pricing"}>
          Pricing
        </Link>
      </div>
    </motion.div>
  );
};

export default DropDownMenu;
