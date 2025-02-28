import React from "react";
import ServicesCard from "./ServicesCard";
const Services = () => {
  return (
    <>
      <div className="relative min-h-screen px-2 bg-Transparent">
      <div className="relative z-10 w-full max-w-4xl p-8 pt-20 mx-auto text-center">
          <h1 className="mb-8 text-4xl font-medium lg:text-5xl text-Black font-title">
          Empowering your brand <br />
          through services
          </h1>
          <p className="mb-8 text-md lg:text-lg font-para text-Black">
          We delivering high-quality software development services and leading
            the way in digital transformation are our strengths. Our skilled
            staff have demonstrated their talents and are ready to assist you.
          </p>
        </div>
        <ServicesCard />
      </div>
    </>
  );
};

export default Services;

