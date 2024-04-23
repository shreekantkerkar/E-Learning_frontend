import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useUser } from "../UserContext"; // Import useUser hook
import logo_img from "../resources/logo_img.jpg";
import Button from "./Button";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn } = useUser(); // Get isLoggedIn and setIsLoggedIn from UserContext

  useEffect(() => {
    // Check if user is logged in (you can implement your own logic)
    const loggedIn = localStorage.getItem("token"); // Check if token exists in localStorage
    if (loggedIn) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [setIsLoggedIn]);

  const handleLogout = () => {
    try {
      // Clear token from localStorage and update state
      localStorage.removeItem("token");
      setIsLoggedIn(false);
      // Navigate to the home page or any other page after logout
      navigate("/");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <div className="shadow-md w-full top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-2 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
          <span>
            <Link to="/">
              <img
                className="h-16 w-16 md:h-20 md:w-20"
                src={logo_img}
                alt="App Logo"
              />
            </Link>
          </span>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          <li className="md:ml-8 text-xl md:my-0 my-7">
            <Link to="/">HOME</Link>
          </li>
          <li className="md:ml-8 text-xl md:my-0 my-7">
            <Link to="/about">ABOUT</Link>
          </li>
          {isLoggedIn ? (
            <button
              className="bg-red-500 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-red-400 
            duration-500"
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <>
              <li className="md:ml-8 text-xl md:my-0 my-7">
                <Button>
                  <Link to="/login">Login</Link>
                </Button>
              </li>
              {/* <li className="md:ml-8 text-xl md:my-0 my-7">
                <Button>
                  <Link to="/register">Register</Link>
                </Button>
              </li> */}
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
