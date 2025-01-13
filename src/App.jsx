import React, { useEffect, useState } from "react";
import CustomerReviews from "./components/CustomerReviews";
import Footer from "./components/Footer";
import PopularProducts from "./components/PopularProducts";
import Services from "./components/Services";
import Offers from "./components/Offers";
import Subscribe from "./components/Subscribe";
import QualitySec from "./components/QualitySec";
import Hero from "./components/Hero";
import MyNav from "./components/MyNav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Spinner from "./components/Spinner";

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const time = setTimeout(() => {
      setLoading(false);
    }, 5000);
    return () => clearTimeout(time);
  }, []);
  return (
    <>
      {loading && <Spinner />}
      <BrowserRouter>
        <MyNav />
        <Hero />
        <PopularProducts />
        <QualitySec />
        <Services />
        <Offers />
        <CustomerReviews />
        <Subscribe />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
