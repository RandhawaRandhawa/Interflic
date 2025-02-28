import React  from "react";
import AboutUsPageComponent1 from "./AboutUsPageComponent1";
import AboutUsPageComponent2 from "./AboutUsPageComponent2";

const AboutUsPage = () => {
  return (
    <>
    <div className="relative min-h-full px-2 mx-auto py-60 max-w-screen bg-Transparent">
       <div className="absolute inset-0 z-0 overflow-hidden">
       <div className="absolute bottom-0 rounded-full opacity-50 w-96 h-96 -top-32 -left-32 bg-DarkPurple/5 animate-float3"></div>
       <div className="absolute bottom-0 rounded-full opacity-50 -top-32 w-96 h-96 -right-20 bg-DarkPurple/5 animate-float1"></div>
        </div>
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-medium text-Black font-title lg:text-5xl">
          About interflic
        </h2>
        <p className="mt-6 lg:text-lg font-para text-Black">
        We're a creative web agency specializing in meeting the needs of the
            new generation. We offer innovative and cutting-edge design
            solutions to help our clients stand out in today's fast-paced.
        </p>
      </div>
    </div>
    <AboutUsPageComponent1/>
    <AboutUsPageComponent2/>
    </>
  );
};

export default AboutUsPage;