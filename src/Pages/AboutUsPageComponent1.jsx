import React from "react";

const AboutUsPageComponent1 = () => {
  return (
    <>
      <section>
        <div className="px-4 py-8 mx-auto max-w-screen-2xl sm:px-6 lg:px-8 bg-Black">
          <div className="grid grid-cols-1 gap-4 mt-20 md:grid-cols-1">
            <div className="p-8 lg:py-20">
              <div className="max-w-4xl mx-auto text-center ">
                <h1 className="mb-8 text-4xl font-medium lg:text-5xl text-White font-title">
                  <span className="text-center">
                    We think our story is {""}
                    <br />
                    worth sharing with you
                  </span>
                </h1>

                <p className="mt-6 text-md lg:text-lg font-para text-Text">
                  We began as a small but ambitious team. We understood the
                  importance of creative and tech-savy solutions to help
                  businesses succeed in the ever-changing digital landscape.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-2">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1603202662706-62ead3176b8f?q=80&w=1938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="object-cover w-full h-full transition duration-300 border-2 hover:border-White rounded-2xl"
              />
              <div className="grid gap-4 grid-row-2">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1603202662747-00e33e7d1468?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="object-cover w-full h-full transition duration-300 border-2 hover:border-White rounded-2xl"
                />
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1603201667106-0e3e0ae584c5?q=80&w=2134&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="object-cover w-full h-full transition duration-300 border-2 hover:border-White rounded-2xl"
                />
              </div>
            </div>
            <div className="p-8 text-left lg:py-20">
              <div className="max-w-3xl">
                <h1 className="mb-8 text-4xl font-medium lg:text-5xl text-White font-title">
                  <span className="text-center">Our Main Mission</span>
                </h1>
                <p className="mb-6 text-lg font-para text-Text">
                  We are committed to creating designs that inspire, connect & our clients in the marketplace. Our focus is on understanding. Our clients' unique needs and delivery designs that not only meet but exceed their expectations.
                </p>
                <p className="text-md lg:text-lg font-para text-Text">
                  Empowering businesses to create impactful and visually
                  stunning brand experiences that captivate audiences and drive
                  success in the digital age. Our team consists of experienced
                  designers, developers. We have a wide variety of skills and
                  backgrounds, allowing us to tackle projects of all sizes and
                  complexities. We believe in the power of imagination and
                  innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUsPageComponent1;
