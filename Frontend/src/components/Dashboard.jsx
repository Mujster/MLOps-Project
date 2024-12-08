import React, { useState } from "react";
import axios from "axios";

function Dashboard() {
  const [inputData, setInputData] = useState({ temperature: 20, humidity: 50, pressure: 1013 });
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: parseFloat(value) });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:5000/api/predict", inputData);
      setPrediction(response.data.prediction);
    } catch (error) {
      console.error("Error fetching prediction", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 p-4">
      <div className="w-full max-w-md bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl p-8 shadow-2xl">
        <h1 className="text-4xl font-bold text-white text-center mb-2">Weather Prediction</h1>
        <p className="text-blue-100 text-center mb-8">Enter current conditions to predict the temperature</p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="temperature" className="block text-sm font-medium text-white">
              Temperature (°C)
            </label>
            <input
              type="range"
              id="temperature"
              name="temperature"
              min="-20"
              max="50"
              value={inputData.temperature}
              onChange={handleInputChange}
              className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="text-white text-sm">{inputData.temperature}°C</div>
          </div>

          <div className="space-y-2">
            <label htmlFor="humidity" className="block text-sm font-medium text-white">
              Humidity (%)
            </label>
            <input
              type="range"
              id="humidity"
              name="humidity"
              min="0"
              max="100"
              value={inputData.humidity}
              onChange={handleInputChange}
              className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="text-white text-sm">{inputData.humidity}%</div>
          </div>

          <div className="space-y-2">
            <label htmlFor="pressure" className="block text-sm font-medium text-white">
              Pressure (hPa)
            </label>
            <input
              type="range"
              id="pressure"
              name="pressure"
              min="900"
              max="1100"
              value={inputData.pressure}
              onChange={handleInputChange}
              className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="text-white text-sm">{inputData.pressure} hPa</div>
          </div>

          <button
            type="submit"
            className={`w-full py-3 px-4 bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-semibold rounded-full shadow-lg transform transition-all duration-300 ease-in-out ${
              loading ? 'opacity-75 cursor-not-allowed' : 'hover:scale-105'
            }`}
            disabled={loading}
          >
            {loading ? (
              <svg className="animate-spin h-5 w-5 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : (
              <>
                <span className="mr-2">🌤️</span> Get Prediction
              </>
            )}
          </button>
        </form>

        {prediction !== null && (
          <div className="mt-8 text-center animate-fade-in-up">
            <h2 className="text-2xl font-semibold text-white mb-2">Predicted Temperature</h2>
            <p className="text-5xl font-bold text-yellow-300">{prediction}°C</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;

