import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useUser } from "../UserContext"; // Import useUser hook

const Accordion = ({ title, chapters, subjectId, children }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const [isOpen, setIsOpen] = useState(false); // Track if the subject accordion is open or closed
  const { isLoggedIn } = useUser(); // Get isLoggedIn from UserContext

  const toggleAccordion = () => {
    setIsOpen(!isOpen); // Toggle the state of isOpen
  };

  const handleDelete = (subjectId, chapterId) => {
    axios
      .delete(
        `http://localhost:4000/api/v1/deleteChapter/${subjectId}/${chapterId}`
      )
      .then((response) => {
        // Handle successful deletion
        console.log("Chapter deleted successfully");
        window.location.reload();
        // You might want to update the state to reflect the deletion
      })
      .catch((error) => {
        // Handle error
        console.error("Error deleting chapter:", error);
      });
  };

  return (
    <div className="border border-gray-300 rounded-md mb-4 shadow-lg font-[Poppins]">
      <div className="flex justify-between items-center px-4 py-2 cursor-pointer bg-gray-100 hover:bg-gray-200">
        <h2 className="text-xl p-4 font-extrabold">{title}</h2>
        <div className="flex items-center">
          {children}
          <svg
            className={`w-6 h-6 transition-transform transform ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={toggleAccordion}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
      {isOpen && (
        <div>
          {chapters.map((chapter, index) => (
            <div key={index}>
              <div className="flex justify-between items-center px-4 p-4 cursor-pointer bg-gray-200 hover:bg-gray-300">
                <h3 className="text-lg font-bold font-poppins">
                  {chapter.chapterName}
                </h3>
                <div className="flex items-center space-x-2">
                  {isLoggedIn && (
                    <>
                      <button
                        className="px-2 py-1 bg-yellow-500 text-white rounded-full hover:bg-yellow-600"
                      >
                        <Link to={`/updateChapter/${subjectId}/${chapter._id}`}>
                          Edit
                        </Link>
                      </button>
                      <button
                        className="px-2 py-1 bg-red-500 text-white rounded-full hover:bg-red-600"
                        onClick={() => handleDelete(subjectId, chapter._id)}
                      >
                        Delete
                      </button>
                    </>
                  )}
                  <svg
                    className={`w-6 h-6 transition-transform transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
              {openIndex === index && (
                <div className="px-4 py-2">
                  <p className="text-gray-700 mb-2">{chapter.description}</p>
                  <div className="mt-2">
                    <p>
                      <strong>Youtube Video Links:</strong>
                    </p>
                    {chapter.videoLinks.map((videoLink, i) => (
                      <a
                        key={i}
                        href={videoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-blue-500 hover:underline"
                      >
                        {videoLink}
                      </a>
                    ))}
                  </div>
                  <div className="mt-2">
                    <p>
                      <strong>Google Drive Link:</strong>
                    </p>
                    <a
                      href={chapter.driveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-green-500 hover:underline"
                    >
                      {chapter.driveLink}
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Accordion;
