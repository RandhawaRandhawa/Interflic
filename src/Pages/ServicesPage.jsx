import React from "react";
import ServicesPageComponent1 from "./ServicesPageComponent1";
import ServicesPageComponent2 from "./ServicesPageComponent2";

const ServicesPage = () => {
  return (
    <>
    <div className="relative min-h-full px-2 mx-auto py-60 max-w-screen bg-Transparent">
       <div className="absolute inset-0 z-0 overflow-hidden">
       <div className="absolute bottom-0 rounded-full opacity-50 w-96 h-96 -top-32 -left-32 bg-DarkPurple/5 animate-float3"></div>
      <div className="absolute bottom-0 rounded-full opacity-50 -top-32 w-96 h-96 -right-20 bg-DarkPurple/5 animate-float1"></div>
        </div>
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-medium text-Black font-title lg:text-5xl">
          My Services
          <br />
        </h2>
        <p className="mt-6 lg:text-lg font-para text-Black">
        We collaborate with the entrepreneurs of startups and growing brands on a level of strategic planning to help them build the capacity and sustainability of their business.
        </p>
      </div>
    </div>
    <ServicesPageComponent1/>
    <ServicesPageComponent2/>
    </>
  );
};

export default ServicesPage;
