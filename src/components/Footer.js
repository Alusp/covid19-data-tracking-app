import React from 'react';

const Footer = () => (
  <div className="bg-my-header h-32 py-5 flex justify-center items-center footer-hero fixed bottom-0 w-full">
    <h1 className="font-thin text-gray-100 tracking-wide text-xs md:text-lg">
      &copy; Classic 2023. All rights reserved. Developed by
      {' '}
      <a
        className="text-white font-bold"
        href="https://github.com/Alusp"
        target="_blank"
        rel="noreferrer"
      >
        Alusine Jalloh.
      </a>
      {' '}
    </h1>
  </div>
);

export default Footer;
