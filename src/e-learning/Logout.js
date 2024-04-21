import React, { useEffect } from "react";

const Logout = () => {
  useEffect(() => {
    localStorage.removeItem("token");
    window.location.href = "/"; // Redirect to home page after logout
  }, []);

  return null;
};

export default Logout;
