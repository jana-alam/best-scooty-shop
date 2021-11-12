import { HomeIcon, MailIcon, PhoneIcon } from "@heroicons/react/outline";
import React from "react";
import logo from "../../../../images/logo-white.png";
import footerImgae from "../../../../images/footer-image.png";

const FooterTop = () => {
  return (
    <div className="bg-black px-4 sm:px-16 py-4 grid grid-cols-1 sm:grid-cols-3 items-center gap-4">
      {/* footer logo & address */}
      <div className="text-gray-50 space-y-3">
        <img src={logo} alt="footer logo" />
        <address className="space-y-1">
          <p className="flex items-center">
            <HomeIcon className="h-4 w-4 mr-2" /> 112/A, Tejgaon Insustrial
            Area, Bangladesh
          </p>
          <p className="flex items-center">
            <PhoneIcon className="h-4 w-4 mr-2" /> +88-01720-990099
          </p>
          <p className="flex items-center">
            <MailIcon className="h-4 w-4 mr-2" /> info@bestscooty.com
          </p>
        </address>
      </div>
      {/* image*/}
      <div>
        <img src={footerImgae} alt="footer scooty" className="w-2/4 mx-auto" />
      </div>
      {/* news letter */}
      <div>
        <h3 className="text-gray-50 text-3xl text-center mb-4">
          Subscribe our newsletter
        </h3>
        <div className="flex flex-col relative">
          <input
            type="email"
            placeholder="Your Email"
            className="p-2 outline-none focus:ring-2 ring-red-600 rounded-full"
          />
          <button className=" absolute right-0  px-4 py-2 rounded-full bg-red-500 text-white font-semibold">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
