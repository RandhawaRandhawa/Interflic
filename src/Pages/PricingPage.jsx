import React from 'react'

const PricingPage = () => {
  return (
    <div className="relative min-h-full px-2 mx-auto py-60 max-w-screen bg-Transparent">
    <div className="absolute inset-0 z-0 overflow-hidden">
    <div className="absolute transition duration-1000 rounded-full shadow-2xl w-96 h-96 bg-AccentCoral shadow-AccentCoral animate-float1 -top-10 -left-40"></div>
    <div className="absolute transition duration-1000 rounded-full shadow-2xl w-96 h-96 bg-Transparent shadow-AccentCoral animate-float1 -top-10 -left-40"></div>
     </div>
   <div className="relative z-10 max-w-3xl mx-auto text-center">
     <h2 className="text-4xl font-medium text-Black font-title lg:text-5xl">
       Pricing Plans
       <br />
     </h2>
     <p className="mt-6 lg:text-lg font-para text-Black">
       We work closely with our clients to know their objectives, target audience, unique needs, and practical design solutions.
     </p>
   </div>
 </div>
  )
}

export default PricingPage