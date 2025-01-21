import React from 'react';

const Contact = () => {
  return (
    <div className="flex w-full justify-center items-center min-h-screen bg-gray-900">
      <div className="bg-gradient-to-tr from-teal-400 to-teal-400 p-1 rounded-3xl transition-shadow hover:shadow-[0_0_30px_1px_rgba(100,255,218,0.3)]">
        <div className="bg-gray-900 rounded-3xl transition-transform hover:scale-95">
          <form className="flex flex-col items-center gap-4 px-8 py-4">
            <p className="text-teal-400 text-lg font-semibold mt-8">Contact our Bank</p>
            <div className="w-full flex items-center justify-center gap-2 rounded-lg px-4 py-2 bg-gray-800 shadow-inner">
              <input
                required
                placeholder="Name"
                className="bg-transparent border-none outline-none w-full text-white placeholder-gray-500"
                type="text"
              />
            </div>
            <div className="w-full flex items-center justify-center gap-2 rounded-lg px-4 py-2 bg-gray-800 shadow-inner">
              <input
                required
                placeholder="Email"
                className="bg-transparent border-none outline-none w-full text-white placeholder-gray-500"
                type="email"
              />
            </div>
            <div className="w-full flex items-center justify-center gap-2 rounded-lg px-4 py-2 bg-gray-800 shadow-inner">
              <input
                required
                placeholder="Subject"
                className="bg-transparent border-none outline-none w-full text-white placeholder-gray-500"
                type="text"
              />
            </div>
            <div className="w-full flex items-center justify-center gap-2 rounded-lg px-4 py-2 bg-gray-800 shadow-inner">
              <textarea
                required
                placeholder="Message"
                cols={30}
                rows={3}
                className="bg-transparent border-none outline-none w-full text-white placeholder-gray-500 resize-none"
              />
            </div>
            <button className="cursor-pointer mb-8 px-6 py-3 rounded-lg border border-teal-400 text-teal-400 font-bold bg-transparent transition-all duration-300 hover:bg-teal-400 hover:text-black shadow-inner">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
