import { React, useState } from "react";
import "../assets/css/modal.css";
import axios from "axios";

function AddAssignmentModal({ toggleShowAddAssignmentModal }) {
  const host = "http://localhost:5000";

  const [formData, setFormData] = useState({
    name: "",
    assignment: "",
    courseId: ""
  });

  var data = new FormData();

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = e => {
    setFormData({ ...formData, assignment: e.target.files[0] });
  };

  const addAssignment = async e => {
    e.preventDefault();
    data.append("name", formData.name);
    data.append("assignment", formData.assignment);
    console.log(`${host}/assignments/create/${formData.courseId}`);
    axios({
      url: `${host}/assignments/create/${formData.courseId}`,
      method: "POST",
      data
    }).then(response => {
      const json = response.data;
      window.alert(json.message);
    });
    toggleShowAddAssignmentModal();
  };

  return (
    <>
      <div className="modal-wrapper">
        <form onSubmit={addAssignment}>
          <p
            style={{ "margin-left": "auto", cursor: "pointer" }}
            onClick={toggleShowAddAssignmentModal}
          >
            X
          </p>
          <label htmlFor="name">Enter Assignment Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="courseid">Enter Course ID</label>
          <input
            type="text"
            name="courseId"
            id="courseId"
            value={formData.courseId}
            onChange={handleChange}
            required
          />
          <label htmlFor="assignment">Add Assignment Content</label>
          <input
            type="file"
            name="assignment"
            id="assignment"
            onChange={handleFileChange}
          />
          <button type="Submit">Create Assignment</button>
        </form>
      </div>
    </>
  );
}

export default AddAssignmentModal;
