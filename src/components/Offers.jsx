import React from "react";
import offer from "../assets/offer.svg";

const Offers = () => {
  return (
    <>
      <section className="">
        <div className="container">
          <div className="row">
            <div className="leftSide w-full md:w-[48%] mb-3">
              <img src={offer} className="w-full" alt="" />
            </div>
            {/* >>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<< */}
            <div className="rightSide w-full md:w-[48%] mb-3">
              <h1 className="text-3xl font-bold capitalize max-sm:text-[22px] md:max-lg:text-[25px] mb-3 tracking-[0.5x]">
                <span className="text-coral-red capitalize">Special </span>Offer
              </h1>
              <p className="text-slate-gray mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                officia et earum! Laudantium itaque dolorem blanditiis vero
                corporis illo dignissimos impedit! Eveniet hic illum labore
                provident sunt enim delectus mollitia.
              </p>
              <p className="text-slate-gray">
                Corporis illo dignissimos impedit! Eveniet hic illum labore
                provident sunt enim delectus mollitia.
              </p>

              <div className="flex items-center flex-wrap gap-2 mt-5">
                <button className="flex items-center bg-coral-red text-white py-2 px-4 rounded-[30px] border  hover:bg-white hover:border-slate-gray hover:text-black transition-all duration-200">
                  <span className="capitalize ">View Details</span>
                </button>
                <button className="flex items-center bg-white border border-1 border-slate-gray hover:bg-coral-red hover:text-white hover:border-coral-red transition-all duration-200 py-2 px-4 rounded-[30px]">
                  <span className="capitalize">Learn More</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Offers;
