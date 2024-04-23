import React from "react";
import img from "../resources/hero.svg";
import { Link } from "react-router-dom";

const data = [
  {
    name: "S.E (Electronics / Electronics & Telecommunication Engineering)",
    key: "2",
    description:
      "Get Access to all the resources for all the chapters and units inside Second Year Engineering in E&TE",
  },
  {
    name: "T.E (Electronics / Electronics & Telecommunication Engineering)",
    key: "3",
    description:
      "Get Access to all the resources for all the chapters and units inside Third Year Engineering in E&TE",
  },
  {
    name: "B.E (Electronics / Electronics & Telecommunication Engineering)",
    key: "4",
    description:
      "Get Access to all the resources for all the chapters and units inside Fourth Year Engineering in E&TE",
  },
];

const Home = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row md:justify-between items-center md:mx-32 mx-5 font-[Poppins] min-h-screen">
        <div className="md:w-2/4 text-center">
          <h2 className="text-5xl font-semibold leading-tight">
            Explore E-Learning Content
            <span className="text-green-500">
              {" "}
              for Electronics and Telecommunication Engineering Department
            </span>
          </h2>
          <p className="text-gray-500 mt-5 text-left">
            Welcome to our platform where you can easily access e-learning
            content like YouTube Videos and PDF's for the Electronics and
            Telecommunication Engineering Department. Our system provides
            resources designed by our faculty members at PICT.
          </p>
        </div>
        <div className="w-full md:w-2/4">
          <img src={img} alt="img" className="w-full" />
        </div>
      </div>

      <hr className="my-2 border-gray-700 w-3/4 mx-auto" />

      <div className="flex flex-col items-center w-full mt-20 font-[Poppins]">
        <div>
          <h2 className="text-4xl font-bold mb-8 pb-12 text-center">
            Explore E-Contents for Various Years
          </h2>
          <div className="flex justify-between">
            {data.map((d) => (
              <Link key={d.key} to={`/${d.key === "2" ? "se" : d.key === "3" ? "te" : "be"}Content`}>
                <div
                  className="bg-white shadow-md rounded-xl p-6 flex flex-col justify-between hover:shadow-l hover:bg-gray-100"
                  style={{ cursor: "pointer" }}
                >
                  <p className="text-xl font-semibold mb-2">{d.name}</p>
                  <p className="text-gray-600 mb-4">{d.description}</p>
                  <button className="bg-green-500 text-white text-lg px-6 py-1 rounded-xl hover:bg-green-600 ">
                    Explore ➡
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <hr className="mt-20 border-gray-700 w-3/4 mx-auto" />
    </div>
  );
};

export default Home;
