import React from 'react';
import styled from 'styled-components';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Welcome to our Banking Application! We are dedicated to redefining banking by 
              providing secure, efficient, and innovative financial solutions that empower 
              individuals and businesses to achieve their financial goals. 
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h3 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-lg text-gray-600">
                Our mission is to create a seamless and secure banking experience by leveraging 
                cutting-edge technology. We strive to ensure financial inclusion, offering 
                personalized solutions to cater to every individual's and business's unique 
                needs.
              </p>
            </div>
            <div className="w-full md:w-1/2 absolute top-3/4 left-2/3 right-1/2 transform -translate-y-1/2">
              <img
                src="/src/assets/images/bank_logo.png"
                alt="Our mission image"
                className="w-[200px] rounded-lg ml-40 shadow-lg"
              />
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-3xl font-semibold text-center text-gray-800 mb-8">Our Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-blue-600 text-white rounded-full mx-auto mb-4 flex items-center justify-center">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Security</h4>
                <p className="text-lg text-gray-600">
                  Your trust is our priority. We ensure your data and transactions are 
                  safeguarded with advanced security protocols.
                </p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-green-600 text-white rounded-full mx-auto mb-4 flex items-center justify-center">
                  <i className="fas fa-lightbulb"></i>
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Innovation</h4>
                <p className="text-lg text-gray-600">
                  We continuously innovate to provide efficient and user-friendly banking 
                  solutions for a better tomorrow.
                </p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-yellow-600 text-white rounded-full mx-auto mb-4 flex items-center justify-center">
                  <i className="fas fa-hands-helping"></i>
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Customer Focus</h4>
                <p className="text-lg text-gray-600">
                  Our customers are at the heart of everything we do. We aim to provide 
                  services that exceed expectations.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-3xl font-semibold text-gray-800 mb-4">Get in Touch</h3>
            <p className="text-lg text-gray-600 mb-4">
              Have any questions about our services or want to collaborate with us? 
              Reach out to us today!
            </p>
            <div className='absolute mt-5 top-7/8 left-2/2 right-1/2 transform -translate-y-1/2 -translate-x-5/6'>
            <Button />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



const Button = () => {
  return (
    <StyledWrapper>
      <a href="/contact">
        <button className="animated-button flex ml-80 -mr20">
          <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
          </svg>
          <span className="text">Contact Us</span>
          <span className="circle" />
          <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
          </svg>
        </button>
      </a>
    </StyledWrapper>
  );
}
const StyledWrapper = styled.div`
  .animated-button {
    position: relative;
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 16px 36px;
    border: 4px solid;
    border-color: transparent;
    font-size: 12px;
    background-color: inherit;
    border-radius: 100px;
    font-weight: 600;
    color: #4682b4; /* Changed to blue */
    box-shadow: 0 0 0 2px #4682b4; /* Changed to blue */
    cursor: pointer;
    overflow: hidden;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .animated-button svg {
    position: absolute;
    width: 24px;
    fill: #4682b4; /* Changed to blue */
    z-index: 9;
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .animated-button .arr-1 {
    right: 16px;
  }

  .animated-button .arr-2 {
    left: -25%;
  }

  .animated-button .circle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    background-color: #add8e6; /* Changed to blue */
    border-radius: 50%;
    opacity: 0;
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .animated-button .text {
    position: relative;
    z-index: 1;
    transform: translateX(-12px);
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .animated-button:hover {
    box-shadow: 0 0 0 12px transparent;
    color: #212121;
    border-radius: 12px;
  }

  .animated-button:hover .arr-1 {
    right: -25%;
  }

  .animated-button:hover .arr-2 {
    left: 16px;
  }

  .animated-button:hover .text {
    transform: translateX(12px);
  }

  .animated-button:hover svg {
    fill: #212121; /* Changed to dark color on hover */
  }

  .animated-button:active {
    scale: 0.95;
    box-shadow: 0 0 0 4px blue; /* Changed to blue */
  }

  .animated-button:hover .circle {
    width: 220px;
    height: 220px;
    opacity: 1;
  }
`;
