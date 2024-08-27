import React, { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import DataDisplay from "./components/Display";
import Footer from "./components/Footer";

function App() {
  const [data, setData] = useState([]);

  const handleAddData = (newData) => {
    if (newData.name.trim() !== "") {
      // Ensure the new data is not empty
      setData([...data, newData]);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-4 overflow-y-auto">
        <Form onAddData={handleAddData} />
        <DataDisplay data={data} setData={setData} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
