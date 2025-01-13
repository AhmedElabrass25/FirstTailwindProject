import React, { useState } from "react";
import rightArrow from "../assets/icons/arrow-right.svg";
import { shoes, statistics } from "./source";
import bigShoe1 from "../assets/big-shoe1.png";
const Hero = () => {
  const [slectedImg, setSlectedImg] = useState(bigShoe1);
  function handleFunc(newImg) {
    setSlectedImg(newImg);
  }
  return (
    <>
      <section className="pt-[80px] md:pt-[75px] pb-8 " id="home">
        <div className="container ">
          <div className="row items-start w-full">
            <div className="leftSide w-full md:w-1/2 max-md:pt-[40px] pt-[50px]">
              <p className="text-coral-red tracking-[0.5px] mb-5 text-lg">
                Our summer collection
              </p>
              <h1
                className="font-bold md:text-5xl capitalize mb-1 md:mb-4 text-[30px]
              md:max-lg:text-[40px] lg:whitespace-nowrap bg-white"
              >
                the new arrival
              </h1>
              <h1 className="font-bold md:text-5xl capitalize text-[30px] md:max-lg:text-[40px]">
                <span className="text-coral-red">nike</span> shoes
              </h1>
              <p className="mt-5 mb-8 text-gray-400 text-md">
                Lorem ipsum dolor sit amet,
                <br /> consectetur adipisicing elit.
              </p>
              <button className="flex items-center bg-coral-red text-white py-3 px-6 rounded-[30px]">
                <span className="capitalize me-3">shop now</span>
                <p className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
                  <img src={rightArrow} className="w-20" alt="" />
                </p>
              </button>
              <div className="flex items-center text-left gap-6  mt-10">
                {statistics.map((st) => {
                  return (
                    <div key={st.label}>
                      <h1 className="text-3xl font-bold">{st.value}</h1>
                      <p className="text-slate-gray font-semibold text-md">
                        {st.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="rightSide w-full md:w-1/2 bg-primary  z-10 relative p-7 flex items-center justify-center md:max-lg:py-[50px] rounded-md max-md:mt-10">
              <img
                src={slectedImg}
                alt="bgImage"
                className="h-full bg-cover bg-center w-[400px] max-md:my-[20px]"
              />
              <div className="slider absolute bottom-[-20px] flex items-center justify-center gap-5 lg:bottom-[-60px]">
                {shoes.map((sho) => {
                  return (
                    <div
                      className={`max-md:w-[60px] max-md:h-[60px] p-2 w-[120px] h-[110px] border-2 bg-primary rounded-lg cursor-pointer
                        ${
                          slectedImg == sho.bigShoe ? "border-coral-red" : ""
                        }  md:max-lg:w-[80px]  md:max-lg:h-[80px]`}
                      key={sho.thumbnail}
                      onClick={() => handleFunc(sho.bigShoe)}
                    >
                      <img src={sho.bigShoe} className="w-full h-full" alt="" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
