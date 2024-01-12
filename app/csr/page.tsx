"use client";
// Import necessary modules
import React, { useState, useEffect } from "react";

// Your component
export default function ClientSideRendering() {
  const [data, setData] = useState<any[]>([]);
  const [buttonClicked, setButtonClicked] = useState(false);

  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        const getData = await response.json();
        setData(getData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // Log data changes
  useEffect(() => {
    console.log("data", data);
  }, [data]);

  // Click handler to set buttonClicked state
  const clickHandler = () => {
    setButtonClicked(true);
  };

  return (
    <>
    <h1 className="flex justify-center text-3xl p-5"> Client Componet</h1>
    <div className="flex justify-center"> <button onClick={clickHandler} className=" bg-red-500 p-4 text-2xl text-white">Click me</button></div>
     
      {buttonClicked && (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}


