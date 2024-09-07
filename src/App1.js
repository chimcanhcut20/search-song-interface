import React from 'react';
import './App1.css'; 

function App() {

  const results = [
    {
      imgSrc: 'https://via.placeholder.com/64', 
      name: 'Name of the song',
      artist: 'Artist name: ABC',
      category: 'Category: XYZ',
      youtubeLink: 'https://youtube.com', 
      soundcloudLink: 'https://soundcloud.com', 
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-4">
      {/* Header với nút menu và tiêu đề */}
      <header className="flex items-center justify-between mb-4">
        <button className="text-orange-500 text-2xl">
          <span className="text-xl">&#9776;</span> {/* Icon menu (hamburger) */}
        </button>
        <h1 className="text-xl text-green-400 font-bold">
          There are some results we found out rely on the melody
        </h1>
      </header>

      {/* Danh sách kết quả hiển thị */}
      <div className="space-y-4">
        {results.map((result, index) => (
          <div
            key={index}
            className="bg-gray-800 p-4 rounded-lg flex items-start"
          >
            <img
              src={result.imgSrc}
              alt="song cover"
              className="w-16 h-16 rounded-full mr-4 object-cover"
            />
            <div className="flex-grow">
              <p className="font-semibold">{result.name}</p>
              <p className="text-sm">{result.artist}</p>
              <p className="text-sm">{result.category}</p>
              <p className="text-sm">
                Youtube:{" "}
                <a href={result.youtubeLink} className="text-green-400">
                  link
                </a>
              </p>
              <p className="text-sm">
                Soundcloud:{" "}
                <a href={result.soundcloudLink} className="text-green-400">
                  link
                </a>
              </p>
            </div>
            <div className="flex space-x-2 ml-4">
              <button className="bg-green-500 p-2 rounded-full hover:bg-green-600">
                +
              </button>
              <button className="bg-red-500 p-2 rounded-full hover:bg-red-600">
                ⇧
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
