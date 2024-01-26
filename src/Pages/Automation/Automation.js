import React from "react";
import img from "../../Media/auto-img.svg";

const Automation = () => {
  return (
    <div className="md:w-8/12 w-11/12 mx-auto text-center">
      <h3 data-aos="zoom-in-down" data-aos-duration="1000" className="md:text-5xl text-3xl font-extrabold">
        RELIABLE TECH FOR STAYING CLOSE
      </h3>
      <p data-aos="zoom-in-down" data-aos-duration="1000" className="text-xl my-8">
        Low-latency voice and video feels like you’re in the same room. Wave
        hello over video, watch friends stream their games, or gather up and
        have a drawing session with screen share.
      </p>
      <div data-aos="zoom-in" data-aos-duration="1000" className="flex justify-center mb-10">
        <img src={img} alt="" />
      </div>
      <h4 className="md:text-4xl text-3xl font-bold mb-5">Ready to start your journey?</h4>
      <div className="flex justify-center my-10">
      <button data-aos="zoom-out" data-aos-duration="1000" className="btn bg-primary-700 px-8 py-2 text-xl text-white font-semibold rounded-full flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6 mr-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
          />
        </svg>
        Download for Windows
      </button>
      </div>
    </div>
  );
};

export default Automation;
