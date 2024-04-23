import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useUser } from "../UserContext"; // Import useUser hook
import Accordion from "./Accordian";

const SEContent = () => {
  const [semester3Subjects, setSemester3Subjects] = useState([]);
  const [semester4Subjects, setSemester4Subjects] = useState([]);
  const { isLoggedIn } = useUser(); // Get isLoggedIn from UserContext

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/getSubjects")
      .then((response) => {
        
        const semester3FilteredSubjects = response.data.filter(subject => subject.semesters === 31);
        setSemester3Subjects(semester3FilteredSubjects);
        
        const semester4FilteredSubjects = response.data.filter(subject => subject.semesters === 32);
        setSemester4Subjects(semester4FilteredSubjects);
      })
      .catch((error) => {
        console.error("Error fetching subjects:", error);
      });
  }, []);

  return (
    <div className="p-10 font-[Poppins] min-h-screen">
      <div className="w-6/12 mx-auto my-4">
        <h2 className="text-4xl p-4 text-center font-extrabold mb-4">
          Semester 5 Subjects
        </h2>
        {semester3Subjects.map((subject) => (
          <Accordion
            key={subject._id}
            title={subject.subName}
            chapters={subject.chapters}
            subjectId={subject._id}
          >
            {isLoggedIn && ( // Conditionally render Add Chapter button
              <Link
                to={`/addChapter/${subject._id}`}
                className="inline-block w-full h-full px-3 py-1 bg-blue-500 text-white rounded-full hover:bg-blue-600 mr-4"
              >
                Add Chapter
              </Link>
            )}
          </Accordion>
        ))}

        <h2 className="text-4xl p-4 text-center font-extrabold mb-4">
          Semester 6 Subjects
        </h2>
        {semester4Subjects.map((subject) => (
          <Accordion
            key={subject._id}
            title={subject.subName}
            chapters={subject.chapters}
            subjectId={subject._id}
          >
            {isLoggedIn && ( // Conditionally render Add Chapter button
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
