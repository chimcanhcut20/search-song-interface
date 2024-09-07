import React from 'react';
import './App.css';

function App() {
  // Function to handle the click event for "What's that song?" button
  const handleSongClick = () => {
    alert("What's that song button clicked!");
    // Add your logic here for when this button is clicked
  };

  // Function to handle the click event for "History" button
  const handleHistoryClick = () => {
    alert("History button clicked!");
    // Add your logic here for when this button is clicked
  };

  return (
    <div className="App min-h-screen bg-white flex flex-col items-center justify-center text-gray-900 relative">
      {/* Navigation Bar */}
      <header className="w-full flex items-center justify-between px-4 py-2">
        <button className="text-orange-500 text-3xl">
          <i className="fas fa-bars"></i> {/* Hamburger icon */}
        </button>
      </header>

      {/* Circle Element Placeholder */}
      <div className="bg-gray-300 rounded-full w-40 h-40 mb-8"></div>

      {/* Main Buttons with onClick handlers */}
      <button 
        className="bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-full mb-4 text-xl"
        onClick={handleSongClick}
      >
        What’s that song?
      </button>
      <button 
        className="bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-full text-xl"
        onClick={handleHistoryClick}
      >
        History
      </button>

      {/* Green Decorative Circles */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-green-400 rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-green-400 rounded-full"></div>
    </div>
  );
}

export default App;

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('searchButton').addEventListener('click', function() {
    window.location.href = 'http://127.0.0.1:5500/public/index1.html';
  });
});
