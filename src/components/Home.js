import React from "react";
import img from "../resources/hero.svg";

const Home = () => {
  return (
    <div className="min-h-[70vh] flex flex-col md:flex-row md:justify-between items-center md:mx-32 mx-5 mt-5 font-[Poppins]">
      <div className="md:w-2/4 text-center">
        <h2 className="text-5xl font-semibold leading-tight">
          Explore E-Learning Content
          <span className="text-green-500">
            {" "}
            for Electronics and Telecommunication Engineering Department
          </span>
        </h2>
        <p className="text-gray-500 mt-5 text-left">
          Welcome to our platform where you can easily access
          e-learning content like YouTube Videos and PDF's for the Electronics
          and Telecommunication Engineering Department. Our system provides
          resources designed by our faculty members at PICT.
        </p>
      </div>
      <div className="w-full md:w-2/4">
        <img src={img} alt="img" className="w-full" />
      </div>
      
    </div>
  );
};

export default Home;
