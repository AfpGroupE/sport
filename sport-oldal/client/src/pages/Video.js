// 1. verzio

// import React, { useState } from 'react';
// import VideoPlayer from 'react-video-js-player';
// import Modal from 'react-modal';
// import { FaUpload } from 'react-icons/fa';

// const customStyles = {
//   overlay: {
//     backgroundColor: 'rgba(0, 0, 0, 0.75)',
//     zIndex: 1000
//   },
//   content: {
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',
//     padding: '2rem'
//   }
// };

// export default function Video() {
//   const [videos, setVideos] = useState([]);
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [videoLink, setVideoLink] = useState('');

//   const handleVideoLinkChange = (event) => {
//     setVideoLink(event.target.value);
//   };

//   const handleAddVideo = () => {
//     setVideos([...videos, videoLink]);
//     setModalIsOpen(false);
//     setVideoLink('');
//   };

//   return (
//     <div className="flex flex-wrap justify-center items-center">
//       <Modal
//         isOpen={modalIsOpen}
//         onRequestClose={() => setModalIsOpen(false)}
//         style={customStyles}
//         contentLabel="Add Video Modal"
//       >
//         <div className="mb-4">
//           <label className="block text-gray-700 font-bold mb-2" htmlFor="videoLink">
//             Video Link
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="videoLink"
//             type="text"
//             placeholder="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
//             value={videoLink}
//             onChange={handleVideoLinkChange}
//           />
//         </div>
//         <button
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//           onClick={handleAddVideo}
//         >
//           Add Video
//         </button>
//       </Modal>
//       <div className="w-full max-w-3xl">
//         <div className="flex flex-wrap -mx-2 mb-4">
//           {videos.map((video, index) => (
//             <div key={index} className="my-2 px-2 w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
//               <VideoPlayer src={video} />
//             </div>
//           ))}
//         </div>
//         <button
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//           onClick={() => setModalIsOpen(true)}
//         >
//           <FaUpload className="inline-block mr-2 mb-1" /> Upload Video
//         </button>
//       </div>
//     </div>
//   );
// }

// 2. verzio

// import React, { useState } from 'react';
// import VideoPlayer from 'react-video-js-player';
// import { FaUpload } from 'react-icons/fa';

// function Video() {
//   const [url, setUrl] = useState('');
//   const [videos, setVideos] = useState([]);

//   const handleSave = () => {
//     setVideos([...videos, url]);
//     setUrl('');
//   };

//   const videoJsOptions = {
//     autoplay: false,
//     controls: true,
//     sources: [{
//       src: url,
//       type: 'video/mp4',
//     }]
//   };

//   return (
//     <div className="flex flex-col items-center">
//       <div className="w-full md:w-1/2 lg:w-1/3">
//         <div className="mt-4">
//           <label className="block font-medium text-gray-700" htmlFor="videoUrl">
//             Video URL
//           </label>
//           <input
//             className="form-input mt-1 block w-full rounded-md"
//             type="text"
//             name="videoUrl"
//             value={url}
//             onChange={(e) => setUrl(e.target.value)}
//           />
//         </div>
//         <button
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
//           onClick={handleSave}
//         >
//           <FaUpload /> Save
//         </button>
//         <div className="mt-4">
//           {videos.map((videoUrl, index) => (
//             <div key={index}>
//               <VideoPlayer
//                 options={videoJsOptions}
//                 src={videoUrl}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Video;


import React, { useState, useEffect } from 'react';
import VideoPlayer from 'react-video-js-player';
import { FaUpload } from 'react-icons/fa';
import videojs from 'video.js';

function Video() {
  const [url, setUrl] = useState('');
  const [videos, setVideos] = useState([]);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    // Create player instances for each video in the `videos` array
    const newPlayers = videos.map((_, index) => {
      return videojs(`video-player-${index}`, {
        controls: true,
        preload: 'auto',
      });
    });
    setPlayers(newPlayers);

    // Clean up player instances when the component unmounts
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
            Video URL
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
          <FaUpload /> Save
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


