import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const AddChapter = () => {
  const { subjectId } = useParams();
  const [chapterName, setChapterName] = useState("");
  const [description, setDescription] = useState("");
  const [videoLinks, setVideoLinks] = useState([]);
  const [driveLink, setDriveLink] = useState("");
  const navigate = useNavigate();

  const handleChangeVideoLink = (index, value) => {
    const updatedVideoLinks = [...videoLinks];
    updatedVideoLinks[index] = value;
    setVideoLinks(updatedVideoLinks);
  };

  const handleAddVideoLink = () => {
    setVideoLinks([...videoLinks, ""]);
  };

  const handleRemoveVideoLink = (index) => {
    const updatedVideoLinks = [...videoLinks];
    updatedVideoLinks.splice(index, 1);
    setVideoLinks(updatedVideoLinks);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:4000/api/v1/addChapter/${subjectId}`, {
        chapterName,
        description,
        videoLinks,
        driveLink,
      })
      .then((result) => {
        console.log(result);
        navigate("/seContent");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex justify-center items-center h-full p-20">
      <div className="w-96 border border-gray-300 rounded-lg p-4 mb-4 shadow-lg font-[Poppins]">
        <h2 className="text-xl font-extrabold mb-4">Chapter Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="chapterName" className="block font-bold mb-1">
              Chapter Name
            </label>
            <input
              type="text"
              id="chapterName"
              value={chapterName}
              onChange={(e) => setChapterName(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-2"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block font-bold mb-1">
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-1">YouTube Links</label>
            {videoLinks.map((link, index) => (
              <div key={index} className="flex items-center mb-2">
                <input
                  type="text"
                  value={link}
                  onChange={(e) => handleChangeVideoLink(index, e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-4 py-2"
                  required
                />
                <button
                  type="button"
                  onClick={() => handleRemoveVideoLink(index)}
                  className="ml-2 px-2 py-1 bg-red-500 text-white rounded-full hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddVideoLink}
              className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
            >
              Add Link
            </button>
          </div>
          <div className="mb-4">
            <label htmlFor="driveLink" className="block font-bold mb-1">
              Google Drive Links
            </label>
            <input
              type="text"
              id="driveLink"
              value={driveLink}
              onChange={(e) => setDriveLink(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-2"
              required
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddChapter;
