import React from 'react';

const Contact = () => {
  return (
    <div>
      <section className="py-6 bg-gray-50 text-gray-950">
        <div className="mx-auto max-w-xl p-28 text-center ltr:sm:text-left rtl:sm:text-right">
          <h2 className="text-3xl font-bold sm:text-6xl text-gray-900 md:text-3xl">
            Stay In Touch

          </h2>
          <span className="flex items-center">
            <span className="h-0.5 flex-1 bg-indigo-500"></span>
            <span className="shrink-0 px-6">With Benson Data</span>
            <span className="h-0.5 flex-1 bg-indigo-500"></span>
          </span>
        </div>
        <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
          <div className="py-6 md:py-0 md:px-6">
            <h1 className="text-2xl font-bold">Get in touch</h1>
            <p className="pt-2 pb-4">Fill in the form to start a conversation</p>
            <div className="space-y-4">
              <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                </svg>
                <span>South Florida </span>
              </p>
              <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
                <span>(754)291-9894</span>
              </p>
              <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                <span>chatelainbusiness@gmail.com</span>
              </p>
            </div>
          </div>
          <form action="https://formspree.io/f/xwkgvrgz" method="POST" className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">

            <label className="block">
              <span className="mb-1">Full name</span>
              <input type="text" name="full_name" placeholder="Benson Data" className="block w-full rounded-md shadow-sm focus:ring focus:ri focus:ri bg-gray-200" required />
            </label>

            <label className="block">
              <span className="mb-1">Email address</span>
              <input type="email" name="email" placeholder="bensondata@gmail.com" className="block w-full rounded-md shadow-sm focus:ring focus:ri focus:ri bg-gray-200" required />
            </label>

            <label className="block">
              <span className="mb-1">Message</span>
              <textarea name="message" rows="3" className="block w-full rounded-md focus:ring focus:ri focus:ri bg-gray-200" required></textarea>
            </label>

            <button type="submit" className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ri bg-indigo-600 text-gray-50 focus:ri hover:ri">Send</button>

          </form>

        </div>

        <h1 className=" p-10 text-center text-xs font-small text-gray-900 md:text-xs ">For any inquiries, please do not hesitate to contact us via email or phone. Alternatively, you can use the contact form below to send us a message. We will get back to you as soon as possible. Thank you for your interest in our services.</h1>
      </section>
    </div>
  );
};

export default Contact;
