"use client";
import Slider from "react-slick";
import { useMediaQuery } from "react-responsive";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
const SliderOne = () => {
  const isMediumScreen = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isSmallScreen = useMediaQuery({ maxWidth: 768 });

  const settings = {
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 1000,
    className: "w-full  mx-auto  cursor-pointer  center-mode",
  };

  if (isMediumScreen) {
    settings.slidesToShow = 1.67;
  } else if (isSmallScreen) {
    settings.slidesToShow = 1;
  }
  return (
    <div>
      <Slider {...settings}>
        <>
          <Image
            src={""}
            alt="Image"
            priority
            width={500}
            height={500}
            className="rouded-2xl"
          />
        </>
        <>
          <Image
            src={""}
            alt="Image"
            priority
            width={500}
            height={500}
            className="rouded-2xl"
          />
        </>
        <>
          <Image
            src={""}
            alt="Image"
            priority
            width={500}
            height={500}
            className="rouded-2xl"
          />
        </>
        <>
          <Image
            src={""}
            alt="Image"
            priority
            width={500}
            height={500}
            className="rouded-2xl"
          />
        </>
        <>
          <Image
            src={""}
            alt="Image"
            priority
            width={500}
            height={500}
            className="rouded-2xl"
          />
        </>
      </Slider>
    </div>
  );
};

export default SliderOne;
