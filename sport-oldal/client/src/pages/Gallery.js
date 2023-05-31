import React, { useState } from 'react';

export default function Gallery() {
  const [imageUrl, setImageUrl] = useState('');
  const [galleryImages, setGalleryImages] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const handleImageUrlChange = (e) => {
    setImageUrl(e.target.value);
    setErrorMessage('');
  };

  const handleSaveImage = () => {
    try {
      const url = new URL(imageUrl);
      setGalleryImages([...galleryImages, url.href]);
      setImageUrl('');
    } catch (error) {
      setErrorMessage('Helytelen URL formátum');
    }
  };

  const handleDeleteImage = (index) => {
    const updatedImages = [...galleryImages];
    updatedImages.splice(index, 1);
    setGalleryImages(updatedImages);
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen">
      <h1 className="text-4xl font-bold mb-6 text-white">Galéria</h1>

      <div className="flex flex-col items-center">
        <input
          type="text"
          className="border border-gray-400 rounded py-2 px-4 mb-4"
          placeholder="Kép URL"
          value={imageUrl}
          onChange={handleImageUrlChange}
        />

        {errorMessage && <p className="text-red-500 mb-2">{errorMessage}</p>}

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleSaveImage}
        >
          Mentés
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-8">
        {galleryImages.map((image, index) => (
          <div key={index} className="relative">
            <img
              src={image}
              alt={`Kép ${index + 1}`}
              className="max-w-full h-auto"
            />
            <button
              className="absolute top-2 right-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
              onClick={() => handleDeleteImage(index)}
            >
              Törlés
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
