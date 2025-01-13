import React from "react";

const Subscribe = () => {
  return (
    <>
      <section className="py-12" id="contact">
        <div className="container">
          {/* >>>>>>>>>>>>>Title>>>>>>>>>>>>>>>>> */}
          <div className="title w-full text-center mb-5">
            <h1 className="text-3xl font-bold capitalize max-sm:text-[22px] md:max-lg:text-[25px] mb-2">
              sign up for{" "}
              <span className="text-coral-red capitalize"> updates</span> &
              Newsletters
            </h1>
          </div>
          <div className="row" style={{ justifyContent: "center" }}>
            <div className="theInput w-[85%] md:w-[70%] flex items-center justify-center relative">
              <input
                type="email"
                id="email"
                className=" w-full p-[16px] shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Enter Your Email............"
                required
              />
              <button
                type="submit"
                className="text-white capitalize m-[8px] bg-coral-red hover:bg-[#f64633] focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center absolute right-0 transition-all duration-500"
              >
                sign up
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Subscribe;
