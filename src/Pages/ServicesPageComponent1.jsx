import React from 'react'
import ServicesPageComponent1Card from './ServicesPageComponent1Card'

const ServicesPageComponent1 = () => {
  return (
    <>
    <div className="relative min-h-screen px-2 bg-Black">
      <div className="relative z-10 w-full max-w-4xl p-8 pt-20 mx-auto text-center">
          <h1 className="mb-8 text-4xl font-medium lg:text-5xl text-White font-title">
          Convert your brand <br />
          through <span className='text-Accent2'>services</span>
          </h1>
          <p className="mb-8 text-md lg:text-lg font-para text-Text">
          We delivering high-quality software development services and leading
        the way in digital transformation are our strengths. Our skilled
            staff have demonstrated their talents and are ready to assist you.
          </p>
        </div>
        <ServicesPageComponent1Card/>
      </div>
    </>
  )
}

export default ServicesPageComponent1