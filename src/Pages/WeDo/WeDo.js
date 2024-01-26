import React from "react";
import HR from "../../Components/HR";
import p1 from '../../Media/do/p1.webp'
import p2 from '../../Media/do/p2.webp'
import p3 from '../../Media/do/p3.webp'
import p4 from '../../Media/do/p4.webp'

const WeDo = () => {
  return (
    <div className="mb-16" id="Blogs">
      <HR>What We Do ?</HR>
      <div className="xl:w-7/12 md:flex items-center mb-10 md:mb-16">
        <p className="text-xl mr-5 mb-10 md:mb-0">
          We (Qualyval) automate business processes by using Intelligent Bots.{" "}
          <br />
          <br />
          Intelligent bots are computer Software/Programme. They are used to
          operate existing software (CRMs, Email, ERPs, Help desk and any other
          application) in the same way that a person works with those systems.{" "}
          <br />
          <br />
          It enables organisations to automate manual and repetitive rule-based
          tasks at a fraction of the cost of their human equivalent and to
          integrate without disrupting the legacy system. Robots are easy to
          train and see the interface like a human.
        </p>
        <div className="bg-secondaryBG text-white h-fit pl-5 pr-24 py-5 rounded-xl">
          <h3 className="text-2xl font-bold flex whitespace-nowrap">
            Platform Keypoints
          </h3>
          <p className="text-xl mt-2">
            Increase efficiency 24X7 productivity 100% accuracy
          </p>
          <button className="bg-white text-black hover:bg-black hover:text-white px-10 rounded-full font-bold text-lg py-2 mt-3 flex items-center">
            Video
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5 ml-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-12 mt-5 gap-5">
        <div className="p-8 bg-grayBG rounded-xl col-span-12 md:col-span-6">
            <img src={p1} alt="" />
            <h3 className="text-4xl font-bold my-3 ">Back Office</h3>
            <p className="text-2xl mt-2">Save your time and resources with reduced costs and boosting individual creativity.</p>
        </div>
        <div className="p-8 bg-grayBG rounded-xl col-span-12 md:col-span-6">
            <img src={p2} alt="" />
            <h3 className="text-4xl font-bold my-3 ">Video/Image automation</h3>
            <p className="text-2xl mt-2">Automate the process of visual inspection/monitoring via CCTV camera or images. E.g. Product defect, Surveillance, Real-time face mask detection, Employee monitoring and many others.</p>
        </div>
        <div className="p-8 bg-grayBG rounded-xl col-span-12 md:col-span-6">
            <img src={p3} alt="" />
            <h3 className="text-4xl font-bold my-3 ">Customer Onboarding</h3>
            <p className="text-2xl mt-2">Automate your unstructured and lengthy process of customer onboarding without disturbing your legacy systems.</p>
        </div>
        <div className="p-8 bg-grayBG rounded-xl col-span-12 md:col-span-6">
            <img src={p4} alt="" />
            <h3 className="text-4xl font-bold my-3 ">Accounting</h3>
            <p className="text-2xl mt-2">Reduce transactional and routine tasks such as Reconciliation, Accounts payable, data entry, bookkeeping and compliance work.</p>
        </div>
      </div>
    </div>
  );
};

export default WeDo;
