import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-100 mt-3">
      <div className="max-w-screen-lg py-10 px-4 sm:px-6 text-gray-800 sm:flex justify-between mx-auto">
        <div className="p-5 sm:w-2/12 border-r">
          <div className="text-sm uppercase text-blue-900 font-bold">Menu</div>
          <ul>
            <li className="my-2">
              <a className="hover:text-blue-900" href="#">Home</a>
            </li>
            <li className="my-2">
              <a className="hover:text-blue-900" href="/service">Services</a>
            </li>
            <li className="my-2">
              <a className="hover:text-blue-900" href="/about">About</a>
            </li>
            <li className="my-2">
              <a className="hover:text-blue-900" href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="p-5 sm:w-7/12 border-r text-center">
          <h3 className="font-bold text-xl text-blue-900 mb-4">Componentity</h3>
          <p className="text-gray-500 text-sm mb-10">
            This is a banking application involving money transfers, fetching real-time information,
            depositing and withdrawing money.
          </p>
        </div>
        <div className="p-5 sm:w-2/12">
          <div className="text-sm uppercase text-blue-900 font-bold">Contact Us</div>
          <ul>
            <li className="my-2">
              <a className="hover:text-blue-900" href="#">+91 7668046325, Civil lines, Moradabad, Uttar Pradesh, 244001</a>
            </li>
            <li className="my-2">
              <a className="hover:text-blue-900" href="mailto:contact@company.com">contact@company.com</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex py-5 m-auto text-gray-800 text-sm flex-col items-center border-t max-w-screen-xl">
        <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
          <a href="https://x.com/ebaad90" className="w-6 mx-1">
            <svg
              className="fill-current cursor-pointer text-gray-500 hover:text-blue-900"
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M24,12c0,6.627 -5.373,12 -12,12c-6.627,0 -12,-5.373 -12,-12c0,-6.627 5.373,-12 12,-12c6.627,0 12,5.373 12,12Zm-6.465,-3.192c-0.379,0.168-0.786,0.281-1.213,0.333c0.436,-0.262 0.771,-0.676 0.929,-1.169c-0.408,0.242 -0.86,0.418 -1.341,0.513c-0.385,-0.411 -0.934,-0.667 -1.541,-0.667c-1.167,0 -2.112,0.945 -2.112,2.111c0,0.166 0.018,0.327 0.054,0.482c-1.754,-0.088 -3.31,-0.929 -4.352,-2.206c-0.181,0.311 -0.286,0.674 -0.286,1.061c0,0.733 0.373,1.379 0.94,1.757c-0.346,-0.01 -0.672,-0.106 -0.956,-0.264c-0.001,0.009 -0.001,0.018 -0.001,0.027c0,1.023 0.728,1.877 1.694,2.07c-0.177,0.049-0.364,0.075 -0.556,0.075c-0.137,0 -0.269,-0.014 -0.397,-0.038c0.268,0.838 1.048,1.449 1.972,1.466c-0.723,0.566 -1.633,0.904 -2.622,0.904c-0.171,0 -0.339,-0.01 -0.504,-0.03c0.934,0.599 2.044,0.949 3.237,0.949c3.883,0 6.007,-3.217 6.007,-6.008c0,-0.091 -0.002,-0.183 -0.006,-0.273c0.413,-0.298 0.771,-0.67 1.054,-1.093Z" />
            </svg>
          </a>
          {/* Add other social icons similarly */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
