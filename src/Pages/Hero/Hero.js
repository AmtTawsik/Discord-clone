import React from "react";
import left from "../../Media/hero-left.svg";
import right from "../../Media/hero-right.svg";

const Hero = () => {
  return (
    <div className="bg-[#404EED] pt-20">
      <div className="bg-hero-bg bg-cover">
        <div className="grid grid-cols-12 items-end w-11/12 mx-auto md:w-full">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="col-span-12 md:col-span-4 pt-10"
          >
            <img src={right} alt="" />
          </div>
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000"
            data-aos-offset="300"
            className="md:col-span-4 col-span-12 text-white py-10 md:py-28 md:text-center"
          >
            <h1 className="text-4xl font-extrabold">IMAGINE A PLACE...</h1>
            <p className="text-xl mt-5 mb-10">
              ...where you can belong to a school club, a gaming group, or a
              worldwide art community. Where just you and a handful of friends
              can spend time together. A place that makes it easy to talk every
              day and hang out more often.
            </p>
            <div className="flex md:justify-center mb-16">
              <button className="btn px-8 rounded-full hover:text-primary-700 hover: py-2.5 mr-2 bg-white text-black">
                Download Now
              </button>
              <button className="btn px-8 rounded-full hover:text-primary-700 hover: py-2.5 bg-white text-black">
                Open Discord
              </button>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="col-span-4 pt-10 hidden md:flex"
          >
            <img src={left} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
