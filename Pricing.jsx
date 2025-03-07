import React from "react";
import { Link } from "react-router-dom";
const Pricing = () => {
  return (
    <>
      <div className="relative min-h-full px-2 py-10 mx-auto max-w-screen bg-Tansparent">
        <div className="relative z-10 w-full max-w-4xl p-8 mx-auto text-center">
          <h1 className="mb-6 text-4xl font-medium lg:text-5xl text-Black font-title">
          Our pricing plans
          </h1>
          <p className=" text-md lg:text-lg font-para text-Black">
          Our services made affordable. Pause/cancel anytime.
          </p>
        </div>
        <div className="max-w-screen-xl mt-6 px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8 lg:py-16 bg-Black">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch md:grid-cols-3 md:gap-8">
            <div>
              <div className="p-6 sm:px-8">
                <h2 className="text-2xl font-medium text-White">
                Sprint
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
                      size-5 text-Accent2"
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
                      className="size-5 text-Accent2"
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
                      className="size-5 text-Accent2"
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
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>

                    <span className="text-Text"> Website developmen </span>
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
                        d="M4.5 12.75l6 6 9-13.5"
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
                        d="M4.5 12.75l6 6 9-13.5"
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

            <div className="transition duration-300 divide-x divide-Text">
              <div className="p-6 sm:px-8">
                <h2 className="text-2xl font-medium text-White">
                Standard
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
                      className="
                      size-5 text-Accent2"
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
                      className="size-5 text-Accent2"
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
                      className="size-5 text-Accent2"
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
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>

                    <span className="text-Text"> Website developmen </span>
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
                        d="M4.5 12.75l6 6 9-13.5"
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
                        d="M4.5 12.75l6 6 9-13.5"
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

            <div className="transition duration-300 divide-x divide-Text">
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
                      className="
                      size-5 text-Accent2"
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
                      className="size-5 text-Accent2"
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
                      className="size-5 text-Accent2"
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
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>

                    <span className="text-Text"> Website developmen </span>
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
                        d="M4.5 12.75l6 6 9-13.5"
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
                        d="M4.5 12.75l6 6 9-13.5"
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
