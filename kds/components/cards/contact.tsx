import React from 'react';
import CTAButton from '../ctabutton';

const Contact: React.FC = () => {
  return (
    <section className="py-16 bg-gray-200 font-sans px-32">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <p className="text-gray-600 text-sm uppercase tracking-wider mb-2">Contact Us</p>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Get better care</h2>
          <p className="text-gray-700 text-base leading-relaxed mb-8 max-w-md mx-auto md:mx-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas semper at integer
            et. At aliquam tortor lectus commodo ut lectus med fermentum. Cursus in tincidunt
            cursus maecenas. Praesent feugiat dolor ipsum pharetra laoreet vulputate
            pellentesque sed.
          </p>
          <CTAButton href='/#Contact' text='Contact Now'/>
        </div>

        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="w-full max-w-sm h-64 bg-gray-300 rounded-lg flex items-center justify-center">
            <svg
              className="w-24 h-24 text-gray-600"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4 3a2 2 0 00-2 2v14a2 2 0 002 2h16a2 2 0 002-2V5a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm14-8a1 1 0 100-2 1 1 0 000 2zm-5 5a1 1 0 100-2 1 1 0 000 2zM9 9a1 1 0 100-2 1 1 0 000 2z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
