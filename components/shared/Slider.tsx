"use client";
import Slider from "react-slick";
import { useMediaQuery } from "react-responsive";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
const SliderOne = () => {
  const isMediumScreen = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });

  const settings = {
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 1000,
    className: "w-full mx-auto cursor-pointer center-mode",
  };

  if (isMediumScreen) {
    settings.slidesToShow = 1.67;
  } else if (isSmallScreen) {
    settings.slidesToShow = 1;
  }
  return (
    <div>
      <Slider {...settings}>
        <div className="rounded-md px-2 md:p-10 overflow-hidden">
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
        <div className="rounded-md px-2 md:p-10 overflow-hidden">
          <Image
            src={
              "https://plus.unsplash.com/premium_photo-1661764256397-af154e87b1b3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YnVzaW5lc3N8ZW58MHx8MHx8fDA%3D"
            }
            alt="Image"
            priority
            width={500}
            height={500}
            className="rounded-2xl  object-cover  overflow-hidden"
          />
        </div>
        <div className="rounded-md px-2 md:p-10 overflow-hidden">
          <Image
            src={
              "https://plus.unsplash.com/premium_photo-1676651178962-67cb1622b7ca?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGJ1c2luZXNzfGVufDB8fDB8fHww"
            }
            alt="Image"
            priority
            width={500}
            height={500}
            className="rounded-2xl  object-cover  overflow-hidden"
          />
        </div>
        <div className="rounded-md px-2 md:p-10 overflow-hidden">
          <Image
            src={
              "https://plus.unsplash.com/premium_photo-1661772661721-b16346fe5b0f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGJ1c2luZXNzfGVufDB8fDB8fHww"
            }
            alt="Image"
            priority
            width={500}
            height={500}
            className="rounded-2xl  object-cover "
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderOne;
