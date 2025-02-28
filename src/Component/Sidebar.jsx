import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen }) => {
  return (
    <div
      className={`fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`fixed left-0 top-0 w-full h-full bg-White shadow-lg transition-transform duration-700 transform ${
          isOpen ? "translate-x-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col justify-between h-full bg-white border-e">
          <div className="px-4 py-20">
            <ul className="mt-6 space-y-1">
              <li>
                <Link
                  to ={'/AoutUsPage'}
                  className="block px-4 py-2 text-lg font-medium rounded-lg bg-Primary font-title text-Black"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to={'/SerivcesPage'}
                  className="block px-4 py-2 text-lg font-medium rounded-lg font-title text-Black hover:bg-Primary hover:text-White"
                >
                 Our Services
                </Link>
              </li>

              <li>
                <Link
                  to = {''}
                  className="block px-4 py-2 text-lg font-medium rounded-lg font-title text-Black hover:bg-Primary hover:text-White"
                >
                  Portfolio
                </Link>
              </li>

              <li>
                <Link
                to={'/ProjectPage'}
                  className="block px-4 py-2 text-lg font-medium rounded-lg font-title text-Black hover:bg-Primary hover:text-White"
                >
                  Project
                </Link>
              </li>

              <li>
                <details className="group [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center justify-between px-4 py-2 rounded-lg cursor-pointer text-Black hover:bg-Primary hover:text-White">
                    <span className="text-lg font-medium font-title">Pages</span>
                    <span className="transition duration-300 shrink-0 group-open:-rotate-180">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </summary>

                  <ul className="px-4 mt-2 space-y-1">
                    <li>
                      <Link to={'/CreativeTeamPage'}
                        className="block px-4 py-2 font-medium rounded-lg text-md font-title text-Black hover:bg-Primary hover:text-White"
                      >
                        Our Team
                      </Link>
                      <li>
                      <Link to={'/ClientReviewPage'}
                        className="block px-4 py-2 font-medium rounded-lg text-md font-title text-Black hover:bg-Primary hover:text-White"
                      >
                        Clients Satisfaction
                      </Link>
                    </li>
                    </li>
                  </ul>
                </details>
              </li>

              <li>
                <Link to={'/BlogPage'}
                  className="block px-4 py-2 text-lg font-medium rounded-lg font-title text-Black hover:bg-Primary hover:text-White"
                >
                  Blog
                </Link>
              </li>

              <li>
                <Link
                 to={''}
                  className="block px-4 py-2 text-lg font-medium rounded-lg font-title text-Black hover:bg-Primary hover:text-White"
                >
                  FAQs
                </Link>
              </li>

              <li>
                <Link
                  to={'/ContactUsPage'}
                  className="block px-4 py-2 text-lg font-medium rounded-lg font-title text-Black hover:bg-Primary hover:text-White"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;