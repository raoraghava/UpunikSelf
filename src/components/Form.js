import React, { useState } from "react";

function Form({ onAddData }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if inputValue is not empty or only whitespace and preventing empty data to enter
    if (inputValue.trim() === "") {
      alert("Please enter a valid task.");
      return; 
    }

    // Create a new data object
    const newData = { id: Date.now(), name: inputValue };

    // Pass the new data up to the parent component
    onAddData(newData);

    // Clear input after adding
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter the Task"
        className="p-2 border rounded"
      />
      <button type="submit" className="ml-2 bg-blue-500 text-white p-2 rounded">
        Add Item
      </button>
    </form>
  );
}

export default Form;
