import React from "react";
import { products } from "./source";
import { star } from "../assets/icons";
const PopularProducts = () => {
  return (
    <>
      <section className="py-8" id="products">
        <div className="container">
          {/* >>>>>>>>>>>>>Title>>>>>>>>>>>>>>>>> */}
          <div className="title">
            <h1 className="text-3xl font-bold capitalize mb-2 max-sm:text-[22px]">
              our <span className="text-coral-red">popular</span> products
            </h1>
            <p className="text-slate-gray text-md tracking-[0.5px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores
              porro <br /> sapiente rerum fugit, magnam id exercitationem sed
              ipsa accusantium.
            </p>
          </div>
          <div className="row gap-2 mt-10">
            {products.map((pro, index) => {
              return (
                <div
                  key={index}
                  className="w-full md:w-[43%]  lg:w-[32%] xl:w-[23%] mb-7"
                >
                  <div className="imgDiv w-full overflow-hidden rounded-lg">
                    <img
                      src={pro.imgURL}
                      className="w-full transition-all duration-300 ease-linear hover:scale-110 "
                      alt=""
                    />
                  </div>
                  <div className="details ms-4 mt-2">
                    <div className="rate flex items-center">
                      <img src={star} className="w-[15px]" alt="" />
                      <span className="ms-1">{pro.rate}</span>
                    </div>
                    <h2 className="font-medium mt-1">{pro.name}</h2>
                    <p className="font-medium mt-1 text-coral-red">
                      {pro.price}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default PopularProducts;
