import React from "react";
import img from "../../Media/case-left.svg";

const CaseStudies = () => {
  return (
    <div
      className="grid grid-cols-12 w-11/12 mx-auto items-center py-20 md:px-10 gap-8"
      id="Benefits"
    >
      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        className="md:col-span-6 col-span-12"
      >
        <img className="" src={img} alt="" />
      </div>
      <div
        data-aos="flip-right"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        className="md:col-span-6 col-span-12"
      >
        <h3 className="md:text-5xl text-3xl font-bold">
          Create an invite-only place where you belong
        </h3>
        <p className="text-xl mt-5">
          Discord servers are organized into topic-based channels where you can
          collaborate, share, and just talk about your day without clogging up a
          group chat.
        </p>
      </div>
    </div>
  );
};

export default CaseStudies;
