import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './styles.css';

const BarriosCarousel = ({ data }) => {
  const numberOfRows = Math.ceil(data.length / 4); // Calcula el número de filas necesarias
  
  // Agrupa los carouseles en grupos de cuatro para formar las filas
  const rows = Array.from({ length: numberOfRows }, (_, index) => {
    const startIndex = index * 4;
    const endIndex = startIndex + 4;
    return data.slice(startIndex, endIndex);
  });

  return (
    <>
    <div className="carousel-container">
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
                      <LazyLoadImage src={require(`../../assets/img/${image}`)} alt={`Image ${i}`} className="lazy-loaded barrios-lazy-image-carousel" />
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
    
    </>
  );
};

export default BarriosCarousel;
