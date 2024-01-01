import React from "react";
import { useState } from "react";
import axios from "axios";

function AddCourseModal({ toggleShowAddCourseModal }) {
  const host = "http://localhost:5000";

  const [formData, setFormData] = useState({
    name: "",
    instructor: "",
    image: ""
  });

  var data = new FormData();

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = e => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const addCourse = async e => {
    e.preventDefault();
    data.append("name", formData.name);
    data.append("instructor", formData.instructor);
    data.append("image", formData.image);
    axios({
      url: `${host}/courses/create`,
      method: "POST",
      data
    }).then(response => {
      const json = response.data;
      window.alert(json.message);
    });
    toggleShowAddCourseModal();
  };

  return (
    <>
      <div className="modal-wrapper">
        <form onSubmit={addCourse}>
          <p
            style={{ "margin-left": "auto", cursor: "pointer" }}
            onClick={toggleShowAddCourseModal}
          >
            X
          </p>
          <label htmlFor="name">Enter Course Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="instructor">Enter Instructor Name</label>
          <input
            type="text"
            name="instructor"
            id="instructor"
            value={formData.courseId}
            onChange={handleChange}
            required
          />
          <label htmlFor="image">Add An Image</label>
          <input
            type="file"
            name="image"
            id="image"
            onChange={handleFileChange}
          />
          <button type="Submit">Create Course</button>
        </form>
      </div>
    </>
  );
}

export default AddCourseModal;
