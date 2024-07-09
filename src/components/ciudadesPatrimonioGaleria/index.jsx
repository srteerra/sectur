import React, { useState } from 'react';
import './styles.css';

const CiudadesPatrimonioGaleria = ({ data }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(selectedImage === image ? null : image);
  };

  return (
    <div className={`galeria-container ${selectedImage ? 'active' : ''}`}>
      {/* Mapear los datos del JSON y crear las columnas */}
      {data.map((item, index) => (
        <div
          key={index}
          className={`galeria-column ${selectedImage === item ? 'active' : ''}`}
          onClick={() => handleImageClick(item)}
        >
          <img
            src={require(`../../assets/img/${item.imageSrc}`)}
            alt={item.alt}
            className="galeria-image"
          />
          <div className="galeria-text-container">
            <div className="galeria-text-gradient"></div>
            <div className="galeria-text">{item.title}</div>
          </div>
        </div>
      ))}

      {/* Detalles expandidos */}
      {selectedImage && (
        <div className="galeria-details">
          <div className="galeria-details-content">
            <span className="close-btn" onClick={() => setSelectedImage(null)}>X</span>
            <h2>{selectedImage.title}</h2>
            <p>{selectedImage.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CiudadesPatrimonioGaleria;
