import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Gallery() {
  const [imageUrl, setImageUrl] = useState('');
  const [galleryImages, setGalleryImages] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // Oldal betöltésekor lekérjük az összes képet az adatbázisból
    const fetchImages = async () => {
      try {
        const response = await axios.get('/api/v1/getallkep/notext');
        if (response.status === 200) {
          setGalleryImages(response.data.map(image => ({
            id: image.idkep_szoveg_nelkul,
            url: image.kep_link
          })));
        } else {
          setErrorMessage('Hiba történt az adatok lekérésekor');
        }
        console.log(response.data);
      } catch (error) {
        setErrorMessage('Hiba történt a szerverrel való kommunikáció során');
      }
    };

    fetchImages();
  }, []);

  const handleImageUrlChange = (e) => {
    setImageUrl(e.target.value);
    setErrorMessage('');
  };

  const handleSaveImage = async () => {
    try {
      const url = new URL(imageUrl);
  
      // Hálózati kérés küldése a kép mentéséhez
      const response = await axios.post('/api/v1/addkep/notext', {
        kepnev_szoveg_nelkul: '', // Üres szöveg mező
        kep_link: url.href,
        user_iduser: 1, // Felhasználói azonosító
      });
  
      // A szerver válasza alapján hozzáadja a képet a galériához
      if (response.status === 201) {
        const newImage = {
          id: response.data.idkep_szoveg_nelkul, // Az új kép azonosítója az adatbázisból
          url: url.href // Az új kép URL-je
        };
        setGalleryImages([...galleryImages, newImage]);
        setImageUrl('');
      } else {
        setErrorMessage('Hiba történt a kép mentésekor');
      }
    } catch (error) {
      setErrorMessage('Helytelen URL formátum vagy hiba történt a szerverrel való kommunikáció során');
    }
  };

  const handleDeleteImage = async (id) => {
    try {
      const response = await axios.delete(`/api/v1/delkep/notext/${id}`);
      if (response.status === 204) {
        const updatedImages = galleryImages.filter(image => image.id !== id);
        setGalleryImages(updatedImages);
      } else {
        setErrorMessage('Hiba történt a kép törlésekor');
      }
    } catch (error) {
      setErrorMessage('Hiba történt a szerverrel való kommunikáció során');
    }
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
        {galleryImages.map((image) => (
          <div key={image.id} className="relative">
            <img
              src={image.url}
              alt={`Kép ${image.id}`}
              className="max-w-full h-auto"
            />
            <button
              className="absolute top-2 right-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
              onClick={() => handleDeleteImage(image.id)}
            >
              Törlés
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
