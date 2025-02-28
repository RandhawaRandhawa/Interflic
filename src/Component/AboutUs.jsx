import React, { useEffect, useState } from "react";

const AboutUs = () => {
  const stats = [
    { label: "Years of Experience", value: 5.5},
    { label: "Projects Completed", value: 110},
    { label: "Clients Satisfaction", value: 100 },
  ];

  const [counts, setCounts] = useState(stats.map(stat => ({ ...stat, displayValue: 0 })));

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts(prevCounts => 
        prevCounts.map(stat => {
          if (stat.displayValue < stat.value) {
            return { ...stat, displayValue: Math.min(stat.displayValue + 0.1, stat.value) }; 
          }
          return stat;
        })
      );
    }, 15); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-full px-2 py-20 mx-auto max-w-screen bg-Black">
      <div className="max-w-3xl mx-auto text-center">
      <h1 className="mb-8 text-4xl font-medium lg:text-5xl text-White font-title">
            <span className="text-center">
            Innovative Designs for{""}
              <br />
            </span>
            Thriving Business
          </h1>
        <p className="mt-8 text-Text font-para lg:text-lg text-md">
        We are the perfect professional team of designers and developers for you. Codler is a top website and mobile app development company. In addition, empowering our clients sincerely by developing complete customized mobile and the web-based digital solution is our mission.
        </p>
      </div>

      <dl className="grid grid-cols-1 gap-4 mt-8 divide-y mg-6 divide-AccentCoral lg:mt-32 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-3">
        {counts.map((stat, index) => (
          <div key={index} className="flex flex-col px-4 py-2 text-center">
            <dt className="order-last mt-2 font-medium text-md lg:text-lg font-title text-Text">
              {stat.label}
            </dt>
            <dd className="text-4xl font-bold font-para text-Accent2 lg:text-5xl">
              {stat.label === "Clients Satisfaction" ? `${stat.displayValue.toFixed(0)}%` : stat.displayValue.toFixed(+stat.displayValue < 10 ? 1 : 0)}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
};

export default AboutUs;