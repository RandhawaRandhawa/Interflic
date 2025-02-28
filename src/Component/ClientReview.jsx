import React from 'react';
import ClientReviewCard from './ClientReviewCard';

const ClientReview = () => {
  return (
    <>
    <div className="relative max-w-screen-xl px-2 py-20 mx-auto min-h-screen-xl bg-Transparent">
    <div className="flex items-center justify-center mx-auto text-center">
    <h1 className="mb-8 text-4xl font-medium lg:text-5xl text-Black font-title">
            <span className="text-center">
            Delivering results that {""}
              <br />
            </span>
            make our clients smile
          </h1>
    </div>
    <ClientReviewCard/>
    </div>
  </>
  )
}

export default ClientReview;