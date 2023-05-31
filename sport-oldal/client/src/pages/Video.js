import React, { useState, useEffect } from 'react';
import VideoPlayer from 'react-video-js-player';
import { FaUpload } from 'react-icons/fa';
import videojs from 'video.js';

function Video() {
  const [url, setUrl] = useState('');
  const [videos, setVideos] = useState([]);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const newPlayers = videos.map((_, index) => {
      return videojs(`video-player-${index}`, {
        controls: true,
        preload: 'auto',
      });
    });
    setPlayers(newPlayers);

    return () => {
      players.forEach((player) => player.dispose());
    };
  }, [videos]);

  const handleSave = () => {
    setVideos([...videos, url]);
    setUrl('');
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-full md:w-1/2 lg:w-1/3">
        <div className="mt-4">
          <label className="block font-medium text-gray-700" htmlFor="videoUrl">
            Videó URL
          </label>
          <input
            className="form-input mt-1 block w-full rounded-md"
            type="text"
            name="videoUrl"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={handleSave}
        >
          Mentés
           
        </button>
        <div className="mt-4">
          {videos.map((videoUrl, index) => {
            const isValidUrl = videoUrl.match(/^(https?\:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/i);
            return isValidUrl && (
              <div key={index}>
                <div id={`video-player-${index}`} className="video-js" />
                <VideoPlayer
                  controls={true}
                  player={players[index]}
                  src={{ src: videoUrl, type: 'video/mp4' }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Video;


