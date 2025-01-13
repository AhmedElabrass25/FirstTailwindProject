import React from "react";
import { reviews } from "./source";
import star from "../assets/icons/star.svg";
import Slider from "react-slick";
const CustomerReviews = () => {
  let settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <>
      <section className="py-16" id="reviews">
        <div className="container">
          <div className="title w-full text-center mb-4">
            <h1 className="text-3xl font-bold capitalize max-sm:text-[22px] md:max-lg:text-[25px] mb-2">
              what our{" "}
              <span className="text-coral-red capitalize">Customers</span> say ?
            </h1>
            <p className="text-slate-gray">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              <br />
              officia et earum! Laudantium itaque.
            </p>
          </div>
          <div className="row">
            {/* >>>>>Slider<<<<<<< */}
            <Slider {...settings} className="w-full text-center h-full">
              {reviews.map((rev, index) => {
                return (
                  <div
                    key={index}
                    className="w-full flex flex-col items-center justify-center py-6 px-12 bg-white text-black shadow-BoxShadow"
                  >
                    <div className="w-full flex items-center justify-center mb-3">
                      <img
                        src={rev.imgURL}
                        className="w-20 h-20 rounded-full text-center"
                        alt=""
                      />
                    </div>
                    <p className="mb-3 text-slate-gray">{rev.feedback}</p>
                    <div className="flex items-center justify-center mb-3">
                      <span>
                        <img src={star} className="w-5" alt="" />
                      </span>
                      <span className="text-xl ms-2">{rev.rating}</span>
                    </div>
                    <h2 className="font-bold">{rev.customerName}</h2>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default CustomerReviews;
