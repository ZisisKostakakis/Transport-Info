/* eslint-disable @next/next/no-img-element */
import { UserButton } from '@clerk/nextjs/app-beta';
import React from 'react';

interface navbarProps {}

const Navbar: React.FC<navbarProps> = ({}) => {
  return (
    <nav className="border-gray-200 bg-gray-900">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <a href="/" className="flex items-center ">
          <i className="fa-solid fa-bus fa-beat fa-2xl mr-3"></i>
          <span className="self-center whitespace-nowrap text-2xl font-semibold text-white">
            Transport-Info
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="hover:hover:bg-gray-700focus:outline-none
           ml-3 inline-flex items-center rounded-lg p-2
             text-sm text-gray-400 focus:ring-2 focus:ring-gray-600  md:hidden"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-6 w-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul
            className="mt-4 flex flex-col rounded-lg border border-gray-700 bg-gray-800 p-4 
          font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-gray-900 md:p-0"
          >
            <li>
              <a
                href="/"
                className="block rounded bg-blue-700 py-2 pl-3 pr-4 text-blue-500 md:bg-transparent md:p-0 "
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="block rounded py-2 pl-3 pr-4 text-white
                 hover:bg-gray-700 hover:text-white 
                 md:border-0  md:p-0 md:hover:bg-transparent 
                 md:hover:text-blue-500 "
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="block rounded py-2 pl-3 pr-4 text-white
                 hover:bg-gray-700 md:border-0 md:p-0 md:hover:bg-transparent
                   md:hover:text-blue-500 "
              >
                Contact
              </a>
            </li>
            <li>
              <UserButton afterSignOutUrl="/" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default React.memo(Navbar);
