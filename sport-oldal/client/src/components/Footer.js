import React from "react";

function Footer() {
  return (
    <footer className="bg-black py-4 text-white fixed bottom-0 w-full">
      <div className="container mx-auto flex justify-center items-center">
        <p className="text-center font-bold">
          {new Date().getFullYear()} - GYM center workout | GYM center Kft.
        </p>
      </div>
    </footer>
  );
}

export default Footer;