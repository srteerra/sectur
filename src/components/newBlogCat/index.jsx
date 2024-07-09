import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import './styles.css';



const NewBlogCat = ({ data }) => {
    return (
        <>
      <div className="blog-header-ctn">
        <h1 className="blog-header-title">{data?.title}</h1>
        
      </div>

      <div className="container-blog-categorias">
           
           <div className='card-categoria'>
                <LazyLoadImage src={require(`../../assets/img/${data.bgCategoriaDestinos}`)}
                alt="Card Title"
                className="card-image"
              />
              <h2 className="card-title">{data.labelCategoriaDestinos}</h2>
              <Link to="/blog/categoria/destinos" className="ver-mas-button">{data.botonVerMas}</Link>
           </div>
           <div className='card-categoria'>
                <LazyLoadImage src={require(`../../assets/img/${data.bgCategoriaExperiencias}`)}
                alt="Card Title"
                className="card-image"
              />
              <h2 className="card-title">{data.labelCategoriaExperiencias}</h2>
              <Link to="/blog/categoria/experiencias" className="ver-mas-button">{data.botonVerMas}</Link>
           </div>
           <div className='card-categoria'>
                <LazyLoadImage src={require(`../../assets/img/${data.bgCategoriaPlaneaTuViaje}`)}
                alt="Card Title"
                className="card-image"
              />
              <h2 className="card-title">{data.labelCategoriaPlanea}</h2>
              <Link to="/blog/categoria/planea-tu-viaje" className="ver-mas-button">{data.botonVerMas}</Link>
           </div>
            
      </div>      

      

      
      </>
    );
  };
  
  export default NewBlogCat;