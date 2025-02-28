import React, { useEffect, useState } from "react";

const AboutUsPageComponent2 = () => {
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
    <div className="relative min-h-full px-2 py-20 mx-auto max-w-screen bg-Transparent">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-medium text-Black font-title lg:text-5xl">
          Innovative Designs for
          <br />
          Thriving Business
        </h2>

        <p className="mt-8 text-Black font-para sm:text-xl">
          We work closely with our clients to know their objectives, target audience, unique needs, and practical design solutions.
        </p>
      </div>

      <dl className="grid grid-cols-1 gap-4 mt-8 divide-y mg-6 divide-AccentCoral lg:mt-32 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-3">
        {counts.map((stat, index) => (
          <div key={index} className="flex flex-col px-4 py-8 text-center">
            <dt className="order-last mt-2 text-lg font-medium font-title text-Secondary">
              {stat.label}
            </dt>
            <dd className="text-4xl font-extrabold font-title text-Accent2 lg:text-5xl">
              {stat.label === "Clients Satisfaction" ? `${stat.displayValue.toFixed(0)}%` : stat.displayValue.toFixed(+stat.displayValue < 10 ? 1 : 0)}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
};

export default AboutUsPageComponent2;