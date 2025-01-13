import React from "react";
import { services } from "./source";

const Services = () => {
  return (
    <>
      <section className="py-16" id="services">
        <div className="container">
          <div className="row">
            {services.map((serv, index) => {
              return (
                <div
                  className="w-full md:w-[48%] lg:w-[31%] gap-3 shadow-BoxShadow bg-white p-5 rounded-sm mb-3"
                  key={index}
                >
                  <span className="flex items-center justify-center w-9 h-9 rounded-full bg-coral-red mb-2">
                    <img src={serv.imgURL} alt="imageServ" />
                  </span>
                  <h2 className="font-bold mb-1">{serv.label}</h2>
                  <p className="text-slate-gray tracking-[0.5px] font-semibold">
                    {serv.subtext}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
