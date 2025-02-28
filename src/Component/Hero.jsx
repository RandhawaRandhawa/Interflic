import React from "react";
import Services from "./Services";
import Project from "./Project";
import ClientReview from "./ClientReview";
import CreativeTeam from "./CreativeTeam";
import AboutUs from "./AboutUs";

const Hero = () => {
  return (
    <>
      <div className="relative z-0 flex items-center justify-center min-h-screen overflow-hidden bg-Transparent lg:flex-row">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute bottom-0 rounded-full opacity-50 w-96 h-96 -top-32 -left-32 bg-DarkPurple/5 animate-float3"></div>
          <div className="absolute bottom-0 rounded-full opacity-50 -top-32 w-96 h-96 -right-20 bg-DarkPurple/5 animate-float1"></div>
        </div>

        <div className="relative z-10 w-full max-w-4xl p-8 pt-20 mx-auto text-center">
          <h1 className="mb-8 text-4xl font-medium md:text-5xl lg:text-6xl text-Black font-title">
            <span className="text-center">
              Transform your brand with{""}
              <br />
            </span>
            strategic web design
          </h1>
          <p className="mb-8 text-md lg:text-lg font-para text-Black">
          Our multichannel knowledge, as well as cost-effective methods, have led to the revolutionary online growth of hundreds of businesses. Your company could be the next!
          </p>
          <button className="relative group">
            <div className="relative px-6 py-1 transition duration-300 rounded-xl bg-Black hover:bg-Accent2">
              <div className="flex items-center justify-center p-2">
                <p className="font-medium text-md text-White font-title">
                Explore more
                </p>
              </div>
            </div>
          </button>
        </div>
      </div>
      <Services />
      <Project />
      <AboutUs />
      <ClientReview />
      <CreativeTeam />
    </>
  );
};

export default Hero;
