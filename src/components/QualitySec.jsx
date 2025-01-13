import React from "react";
import qualityImg from "../assets/shoe8.svg";
const QualitySec = () => {
  return (
    <>
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="leftSide w-full md:w-1/2 mb-7">
              <h1 className="text-3xl font-bold capitalize mb-0 max-sm:text-[22px] md:max-lg:text-[25px]">
                we provide your{" "}
                <span className="text-coral-red capitalize">Super</span>
              </h1>
              <h1 className="text-3xl font-bold capitalize mb-3 max-sm:text-[22px] md:max-lg:text-[25px] ">
                <span className="text-coral-red capitalize">Quality </span>shoes
              </h1>
              <p className="text-slate-gray text-md font-medium tracking-[0.5px] mb-7">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores consequuntur praesentium numquam voluptates tenetur
                molestiae eius ipsam quisquam culpa non, adipisci veritatis
                quaerat illum tempora rem ut unde minus debitis.
              </p>
              <button className="flex items-center bg-coral-red text-white py-3 px-6 rounded-[30px]">
                <span className="capitalize me-3">View Details</span>
              </button>
            </div>
            {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
            <div className="rightSide w-full md:w-1/2">
              <img src={qualityImg} className="w-100" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default QualitySec;
