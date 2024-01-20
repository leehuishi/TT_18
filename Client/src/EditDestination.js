import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function EditDestination() {
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const [notes, setNotes] = useState("");
  const [nameError, setNameError] = useState("");
  const [costError, setCostError] = useState("");
  const navigate = useNavigate();

  // TO EDIT: URL to go back to itineray page when cancel button is done
  const handleCancel = () => {
    navigate("/");
  };

  // Validate Input Data
  const validate = () => {
    let isValid = true;

    if (!name.trim()) {
      setNameError("Name cannot be blank.");
      isValid = false;
    } else {
      setNameError("");
    }

    if (!cost.trim() || isNaN(cost)) {
      setCostError("Cost must be a numeric value.");
      isValid = false;
    } else {
      setCostError("");
    }

    return isValid;
  };

  //   Post to send to backend
  const fetchDestinationData = async (name, cost, notes) => {
    try {
      const url = "http://127.0.0.1:5000/destination";
      const params = { name, cost, notes };
      const response = await axios.post(url, params);
      console.log(response);
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else if (error.request) {
        alert("No response was received from the server");
      } else {
        alert("Error: ", error.message);
      }
    }
  };

  // TO EDIT: URL to go back to itineray page when add button is pressed
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log({ name, cost, notes });
      fetchDestinationData(name, cost, notes);
      navigate("/");
    }
  };

  return (
    <div className="destination-form-container">
      <h2>Edit Existing Destination</h2>
      <form className="destination-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {nameError && <p className="error-message">{nameError}</p>}
        </div>

        <div className="input-group">
          <label htmlFor="cost">Cost:</label>
          <input
            id="cost"
            type="text"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
          />
          {costError && <p className="error-message">{costError}</p>}
        </div>

        <div className="input-group">
          <label htmlFor="notes">Notes:</label>
          <textarea
            id="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Add optional notes here"
          />
        </div>

        <div className="form-buttons">
          <button type="submit">Edit</button>
          <button
            type="button"
            className="cancel-button"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditDestination;
