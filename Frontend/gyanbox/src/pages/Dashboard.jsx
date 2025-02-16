import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";

import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const Dashboard = () => {
  return (
    <div className="container mx-auto px-4">
       <Header />
      <Hero /> 
      <AboutUs />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Dashboard;
