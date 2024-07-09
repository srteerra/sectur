import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './styles.css';

const CiudadesPatrimonioCarousel = ({ data }) => {
  const numberOfRows = Math.ceil(data.length / 2); // Calcula el número de filas necesarias
  
  // Agrupa los carouseles en grupos de dos para formar las filas
  const rows = Array.from({ length: numberOfRows }, (_, index) => {
    const startIndex = index * 2;
    const endIndex = startIndex + 2;
    return data.slice(startIndex, endIndex);
  });

  return (
    <div className="ciudades-carousel-container">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="carousel-row">
          {row.map((carousel, index) => (
            <div key={index} className="carousel-item">
              <h2>{carousel.title}</h2>
              <div className="carousel">
                <Carousel
                  showThumbs={false}
                  showStatus={false}
                  renderArrowPrev={(onClickHandler, hasPrev, label) =>
                    hasPrev && (
                      <button type="button" onClick={onClickHandler} title={label} className="arrow-prev">
                        &#8249;
                      </button>
                    )
                  }
                  renderArrowNext={(onClickHandler, hasNext, label) =>
                    hasNext && (
                      <button type="button" onClick={onClickHandler} title={label} className="arrow-next">
                        &#8250;
                      </button>
                    )
                  }
                >
                  {carousel.images.map((image, i) => (
                    <div key={i} className="carousel-image">
                      {i === 0 && ( // Verifica si es el primer slide
                        <div className="first-slide-text-container">
                          <p className="first-slide-text">{carousel.nombreBarrio}</p>
                        </div>
                      )}
                      <LazyLoadImage src={require(`../../assets/img/${image}`)} alt={`Image ${i}`} className="lazy-loaded lazy-loaded-image-ciudades" />
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CiudadesPatrimonioCarousel;
