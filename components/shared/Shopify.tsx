import Image from "next/image";
import React from "react";

const Shopify = () => {
  return (
    <section id="shopify" className="mt-10 md:py-6 bg-white w-full rounded-3xl">
      <div className="p-4  mx-auto  relative  z-10  w-full  pt-10  md:pt-20  px-2">
        <div className="text-4xl  pb-5  md:text-6xl  px-6  text-center  bg-clip-text  text-transparent  bg-gradient-to-b  from-neutral-950  to-gray-400  bg-opacity-50">
          Shopify Store
        </div>
        <p className="mt-4  text-lg  font-normal  text-neutral-900  max-w-lg  text-center  mx-auto  px-4">
          Custom tailored solutions for your business, We are a team of creative
          who are excited to help you grow your business
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6 p-10">
        <Image
          src={
            "https://plus.unsplash.com/premium_photo-1661764256397-af154e87b1b3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YnVzaW5lc3N8ZW58MHx8MHx8fDA%3D"
          }
          alt="Image"
          priority
          width={500}
          height={500}
          className="rounded-2xl "
        />
        <Image
          src={
            "https://plus.unsplash.com/premium_photo-1661764256397-af154e87b1b3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YnVzaW5lc3N8ZW58MHx8MHx8fDA%3D"
          }
          alt="Image"
          priority
          width={500}
          height={500}
          className="rounded-2xl "
        />
        <Image
          src={
            "https://plus.unsplash.com/premium_photo-1661764256397-af154e87b1b3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YnVzaW5lc3N8ZW58MHx8MHx8fDA%3D"
          }
          alt="Image"
          priority
          width={500}
          height={500}
          className="rounded-2xl "
        />
      </div>
    </section>
  );
};

export default Shopify;
