import React, { useState, useEffect, useContext } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom'; // Importa Link
import { useParams } from 'react-router-dom';
import { Context } from '../../Context'; // Importa el contexto si es necesario

import postEs from '../../assets/data/newBlog/es/index.json';
import postEn from '../../assets/data/newBlog/en/index.json';
import postFr from '../../assets/data/newBlog/fr/index.json';
import postDe from '../../assets/data/newBlog/de/index.json';
import postPt from '../../assets/data/newBlog/pt/index.json';
import postIt from '../../assets/data/newBlog/it/index.json';
import postJp from '../../assets/data/newBlog/jp/index.json';
import postCn from '../../assets/data/newBlog/cn/index.json';
import './styles.css';

const CategoryArticles = () => {
  const { isLanguage } = useContext(Context);
  const [ language, setLanguage ] = useState(postEs);
  const { category } = useParams(); // Obtener el parámetro de la URL para la categoría

  window?.scroll({
    top: 0
  });
  
  useEffect(() => {
    isLanguage === 'ES' ? setLanguage(postEs)
    : isLanguage === 'EN' ? setLanguage(postEn)
    : isLanguage === 'FR' ? setLanguage(postFr)
    : isLanguage === 'DE' ? setLanguage(postDe)
    : isLanguage === 'PT' ? setLanguage(postPt)
    : isLanguage === 'IT' ? setLanguage(postIt)
    : isLanguage === 'JP' ? setLanguage(postJp)
    : isLanguage === 'CN' ? setLanguage(postCn)
    : setLanguage(postEs)
  }, [isLanguage]);
  

  // Filtrar los datos para obtener solo los artículos de la categoría especificada
  const categoryData = language.posts.filter((post) => post.categoriaSlug === category);
  //  Función para reemplazar guiones con espacios
  const formatCategory = (category) => {
    return category.replace(/-/g, ' ');
  };

  // Renderizar los artículos de la categoría
  return (
    <div className="category-container">
      <h1>{ language.labelCategoryArticles } {formatCategory(category)}</h1>
      {categoryData.length > 0 ? (
        categoryData.map((post) => (
          <div className="middle-content-post" key={post.id}>
                        <div className="middle-content-post-left">
                            <LazyLoadImage src={require(`../../assets/img/${post.urlImg}`)} />
                        </div>
                        <div className="middle-content-post-right">
                            <spam className="badge">{post.categoriaLabel}</spam>
                            <h2>{post.name}</h2>
                            <p>{post.post[0]?.content.substring(0, 100)}...</p>
                            <Link to={`/blog/post/${post.id}`}>{post.postReadmoreButton}</Link>
                        </div>
                    </div>
        ))
      ) : (
        <p className='no-articles'>No hay artículos disponibles en esta categoría.</p>
      )}
      <div className="back-to-blog-container">
        <Link to="/blog" className="back-to-blog-link">{language.labelCategoryArticlesBack}</Link>
      </div>
    </div>
  );
};

export default CategoryArticles;
