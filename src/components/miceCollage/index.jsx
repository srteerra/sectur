import React from 'react';
import './styles.css';

const MiceCollage = ({ data }) => {
  return (
    <>
      <div className='cinta-rosa'></div>
      <div className="collage-container">
        {data.collageColumnas.map((columna, index) => (
          <div className="column" key={index}>
            <div className="image-container">
              <img
                src={require(`../../assets/img/${columna.imagen}`)}
                alt={`Imagen ${index + 1}`}
                className="collage-image"
              />
              <div className="image-overlay">
                <p className="image-text">{columna.texto}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MiceCollage;
