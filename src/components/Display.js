import React from "react";

function DataDisplay({ data, setData }) {
  // Function to delete an item
  const deleteItem = (id) => {
    // Filter out the item to be deleted by its id
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Todo Tasks</h2>
      {data.length > 0 ? (
        <ul className="space-y-4">
          {data.map((item) => (
            <li
              key={item.id}
              className="p-4 bg-gray-100 rounded shadow flex justify-between"
            >
              <span>{item.name}</span>
              <button
                onClick={() => deleteItem(item.id)}
                className="bg-red-500 text-white p-2 rounded"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Start adding Tasks to the List</p>
      )}
    </div>
  );
}

export default DataDisplay;
