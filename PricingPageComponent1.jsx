import React from "react";
import { Link } from "react-router-dom";
const PricingPageComponent1 = () => {
  return (
    <>
      <div className="relative min-h-full px-2 mt-10 mx-auto max-w-screen bg-Black">
        <div className="relative z-10 w-full max-w-4xl p-8 pt-20 mx-auto text-center">
          <h1 className="mb-8 text-4xl font-medium lg:text-5xl text-White font-title">
            Empowering your brand <br />
            through services
          </h1>
          <p className="mb-8 text-md lg:text-lg font-para text-Text">
            We delivering high-quality software development services and leading
            the way in digital transformation are our strengths. Our skilled
            staff have demonstrated their talents and are ready to assist you.
          </p>
        </div>
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch md:grid-cols-3 md:gap-8">
            <div className="rounded-xl border-x-2 border-Text transition duration-300 hover:shadow-Accent2 shadow-lg">
              <div className="p-6 sm:px-8">
                <h2 className="text-2xl font-medium text-White">
                  Starter
                  <span className="sr-only">Plan</span>
                </h2>

                <p className="mt-6 sm:mt-4">
                  <strong className="text-3xl font-bold text-Accent2 sm:text-4xl">
                    {" "}
                    $5,000${" "}
                  </strong>

                  <span className="text-sm font-medium text-Text">/2 weeks</span>
                </p>

                <p className="mt-6 text-Text">
                For small or short term projects, spanning a few weeks.
                </p>
              </div>

              <div className="p-6 sm:px-8">
                <p className="text-lg font-medium text-White sm:text-xl">
                  What's included:
                </p>

                <ul className="mt-2 space-y-2 sm:mt-4">
                  <li className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="
                      size-5 text-Text"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>

                    <span className="text-Text"> Branding </span>
                  </li>

                  <li className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-Text"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>

                    <span className="text-Text"> Graphic design  </span>
                  </li>

                  <li className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-White"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>

                    <span className="text-Text"> Website design </span>
                  </li>

                  <li className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-Accent2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>

                    <span className="text-Text"> Website development </span>
                  </li>

                  <li className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-Accent2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>

                    <span className="text-Text"> UI/UX design </span>
                  </li>

                  <li className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-Accent2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>

                    <span className="text-Text"> Motion graphics and video production </span>
                  </li>
                </ul>
              <button>
                  <div className="relative px-6 py-1 mt-8 transition duration-300 rounded-xl border-x-2 hover:border-Text bg-Accent2 hover:bg-Transparent">
                    <div className="flex items-center justify-center p-2">
                      <Link
                        to={"/ContactUsPage"}
                        className="font-medium text-md text-White font-title"
                      >
                         Book a consultation
                      </Link>
                    </div>
                  </div>
                </button>
              </div>
            </div>

            <div className="rounded-xl border-x-2 border-Text transition duration-300 hover:shadow-Accent2 shadow-lg">
              <div className="p-6 sm:px-8">
                <h2 className="text-2xl font-medium text-White">
                  Pro
                  <span className="sr-only">Plan</span>
                </h2>

                

                <p className="mt-6 sm:mt-4">
                  <strong className="text-3xl font-bold text-Accent2 sm:text-4xl">
                    {" "}
                    $8,000{" "}
                  </strong>

                  <span className="text-sm font-medium text-Text">/month</span>
                </p>

                <p className="mt-6 text-Text">
                For medium sized projects spanning a few months or with tight deadlines.
                </p>
              </div>

              <div className="p-6 sm:px-8">
                <p className="text-lg font-medium text-White sm:text-xl">
                  What's included:
                </p>

                <ul className="mt-2 space-y-2 sm:mt-4">
                  <li className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-Text"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>

                    <span className="text-Text"> 20 users </span>
                  </li>

                  <li className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-Text"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>

                    <span className="text-Text"> 5GB of storage </span>
                  </li>

                  <li className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-Text"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>

                    <span className="text-Text"> Email support </span>
                  </li>

                  <li className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-Text"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>

                    <span className="text-Text"> Help center access </span>
                  </li>

                  <li className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-Accent2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>

                    <span className="text-Text"> Phone support </span>
                  </li>

                  <li className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-Accent2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>

                    <span className="text-Text"> Community access </span>
                  </li>
                </ul>
                <button>
                  <div className="relative px-6 py-1 mt-8 transition duration-300 rounded-xl border-x-2 hover:border-Text bg-Accent2 hover:bg-Transparent">
                    <div className="flex items-center justify-center p-2">
                      <Link
                        to={"/ContactUsPage"}
                        className="font-medium text-md text-White font-title"
                      >
                        Book a consultation
                      </Link>
                    </div>
                  </div>
                </button>
              </div>
            </div>

            <div className="rounded-xl border-x-2 border-Text transition duration-300 hover:shadow-Accent2 shadow-lg">
              <div className="p-6 sm:px-8">
                <h2 className="text-2xl font-medium text-White">
                  Enterprise
                  <span className="sr-only">Plan</span>
                </h2>

                <p className="mt-6 sm:mt-4">
                  <strong className="text-3xl font-bold text-Accent2 sm:text-4xl">
                    {" "}
                    $16,000{" "}
                  </strong>

                  <span className="text-sm font-medium text-Text">/month</span>
                </p>

                <p className="mt-6 text-Text">
                For large projects spanning a few months or with tight deadlines.
                </p>
               
              </div>

              <div className="p-6 sm:px-8">
                <p className="text-lg font-medium text-White sm:text-xl">
                  What's included:
                </p>

                <ul className="mt-2 space-y-2 sm:mt-4">
                  <li className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-Text"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>

                    <span className="text-Text"> 50 users </span>
                  </li>

                  <li className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-Text"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>

                    <span className="text-Text"> 20GB of storage </span>
                  </li>

                  <li className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-Text"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>

                    <span className="text-Text"> Email support </span>
                  </li>

                  <li className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-Text"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>

                    <span className="text-Text"> Help center access </span>
                  </li>

                  <li className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-Text"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>

                    <span className="text-Text"> Phone support </span>
                  </li>

                  <li className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 text-Text"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>

                    <span className="text-Text"> Community access </span>
                  </li>
                </ul>
                <button>
                  <div className="relative px-6 py-1 mt-8 transition duration-300 rounded-xl border-x-2 hover:border-Text bg-Accent2 hover:bg-Transparent">
                    <div className="flex items-center justify-center p-2">
                      <Link
                        to={"/ContactUsPage"}
                        className="font-medium text-md text-White font-title"
                      >
                       Book a consultation
                      </Link>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingPageComponent1;
