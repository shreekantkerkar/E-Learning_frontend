import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Accordion from "./Accordian";

const SEContent = () => {
  const [subjects, setSubjects] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track if the user is logged in

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/getSubjects")
      .then((response) => {
        setSubjects(response.data); // Assuming response.data is the array of subjects
      })
      .catch((error) => {
        console.error("Error fetching subjects:", error);
      });

    // Check if user is logged in (you can implement your own logic)
    const loggedIn = localStorage.getItem("token"); // Check if token exists in localStorage
    if (loggedIn) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []); // Empty dependency array to execute the effect only once

  // Filter subjects with semesters equal to 8
  const semester8Subjects = subjects.filter((subject) => subject.semesters === 8);

  return (
    <div className="p-10 font-[Poppins]">
      <div className="w-6/12 mx-auto my-4">
        <h2 className="text-4xl p-4 text-center font-extrabold mb-4">
          Semester 3 Subjects
        </h2>
        {semester8Subjects.map((subject) => (
          <Accordion
            key={subject._id}
            title={subject.subName}
            chapters={subject.chapters}
            subjectId={subject._id} // Pass subjectId to Accordion component
          >
            {isLoggedIn && ( // Conditionally render the Add Chapter button
              <Link
                to={`/addChapter/${subject._id}`}
                className="inline-block w-full h-full px-3 py-1 bg-blue-500 text-white rounded-full hover:bg-blue-600 mr-4"
              >
                Add Chapter
              </Link>
            )}
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default SEContent;
