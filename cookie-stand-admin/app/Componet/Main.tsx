"use client";
import React, { useState } from 'react';

const Main = () => {
  // Define state variables to store input values and an array for JSON data
  const [location, setLocation] = useState('');
  const [maxCustomers, setMaxCustomers] = useState('');
  const [minCustomers, setMinCustomers] = useState('');
  const [averageCookies, setAverageCookies] = useState('');
  const [formDataArray, setFormDataArray] = useState<Array<any>>([]);

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create a JSON object with the input values
    const formData = {
      location,
      maxCustomers,
      minCustomers,
      averageCookies,
    };

    // Add the JSON data to the array
    setFormDataArray([...formDataArray, formData]);

    // Clear input fields
    setLocation('');
    setMaxCustomers('');
    setMinCustomers('');
    setAverageCookies('');
  };

  return (
    <div>
      <form className='m-4 p-3 bg-green-500' onSubmit={handleSubmit}>
        {/* First Row */}
        <div className="mb-4 flex items-center">
          <label className="block text-gray-600 font-bold mr-2" htmlFor="inputLocation">
            Location
          </label>
          <input
            className="border border-gray-300 p-2 w-full text-black"
            type="text"
            id="inputLocation"
            name="inputLocation"
            placeholder="Location"
            value={location}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLocation(e.target.value)}
          />
        </div>

        {/* Second Row */}
        <div className='flex justify-around items-center'>
          <div>
            <label className="block text-gray-600 font-bold mb-2" htmlFor="inputMaxCustomers">
              Max customer per hour
            </label>
            <input
              className="border border-gray-300 p-2 w-full text-black"
              type="text"
              id="inputMaxCustomers"
              name="inputMaxCustomers"
              placeholder="Max Customers"
              value={maxCustomers}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMaxCustomers(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-gray-600 font-bold mb-2" htmlFor="inputMinCustomers">
              Min customer per hour
            </label>
            <input
              className="border border-gray-300 p-2 w-full text-black"
              type="text"
              id="inputMinCustomers"
              name="inputMinCustomers"
              placeholder="Min Customers"
              value={minCustomers}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMinCustomers(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-gray-600 font-bold mb-2" htmlFor="inputAverageCookies">
              Average Cookies per sale
            </label>
            <input
              className="border border-gray-300 p-2 w-full text-black"
              type="text"
              id="inputAverageCookies"
              name="inputAverageCookies"
              placeholder="Average Cookies"
              value={averageCookies}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAverageCookies(e.target.value)}
            />
          </div>

          <div className='mt-4'>
            <button type='submit' className="bg-blue-500 text-white px-4 py-2 rounded">
              Create
            </button>
          </div>
        </div>
      </form>

      {/* Display JSON data if available */}
      {formDataArray.length > 0 && (
        <div className="m-4 p-3 bg-gray-200 text-black">
          <h2 className="text-gray-800 font-bold mb-2">Form Data (JSON):</h2>
          {formDataArray.map((formData, index) => (
            <div key={index}>
              <pre>{JSON.stringify(formData, null, 2)}</pre>
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Main;
