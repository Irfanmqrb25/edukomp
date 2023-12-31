import React from "react";

const Footer = () => {
  return (
    <footer className="border-t p-6 flex flex-col items-center gap-1">
      <div className="flex items-center gap-2 justify-center font-semibold">
        <p>Created by :</p>
        <p>Kelompok 3</p>
      </div>
      <div className="flex flex-col items-center text-sm font-medium">
        <p>Irfan Muqorib (50421662)</p>
        <p>Farhan Syahrul Fath (50421478)</p>
        <p>Muhammad Iqbal Ardiansyah (51421618)</p>
      </div>
    </footer>
  );
};

export default Footer;
