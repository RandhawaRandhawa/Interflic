import React from 'react'
import PricingPageComponent1 from './PricingPageComponent1'
import PricingPageComponent2 from './PricingPageComponent2'

const PricingPage = () => {
  return (
    <>
    <div className="relative min-h-full px-2 mx-auto py-60 max-w-screen bg-Transparent">
    <div className="absolute inset-0 z-0 overflow-hidden">
    <div className="absolute bottom-0 rounded-full opacity-50 w-96 h-96 -top-32 -left-32 bg-DarkPurple/5 animate-float3"></div>
    <div className="absolute bottom-0 rounded-full opacity-50 -top-32 w-96 h-96 -right-20 bg-DarkPurple/5 animate-float1"></div>
     </div>
   <div className="relative z-10 max-w-3xl mx-auto text-center">
     <h2 className="text-4xl font-medium text-Black font-title lg:text-5xl">
       Pricing Plans
       <br />
     </h2>
     <p className="mt-6 lg:text-lg text-md font-para text-Black">
       We work closely with our clients to know their objectives, target audience, unique needs, and practical design solutions.
     </p>
   </div>
 </div>
 <PricingPageComponent1/>
 <PricingPageComponent2/>
    </>
  )
}

export default PricingPage;