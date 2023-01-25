// Make a contact us page

import React, { Fragment } from "react";
import { Navber } from "../partials";

const ContactUs = () => {
  return (
    <>
      <Navber></Navber>
      <Fragment>
        <div className="container mx-auto my-auto">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold text-gray-800">Contact Us</h1>
            <p className="text-gray-600">
              We are here to help and answer any question you might have. We
              look forward to hearing from you.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="w-full md:w-1/2 lg:w-1/3">
              <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mt-4 mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    placeholder="Name"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Email"
                  />
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <textarea
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="message"
                      type="text"
                      placeholder="Message"
                    />

                    <div className="flex items-center justify-between mt-4">
                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button"
                      >
                        Send
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Fragment>
    </>
  );
};

export default ContactUs;
