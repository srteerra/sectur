import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './styles.css';
import { Link } from 'react-router-dom';

const BlogContent = ({ data }) => {
  
  const getPosts = () => (
    data?.posts?.map(item => (
      <div className="blog-articles-ctn-card">
        <div className="blog-articles-ctn-card-image">
        <div className="blog-articles-ctn-subtitle">
          <Link 
            to={item.urlPost} state={{postData: item.post}}
          >
            <LazyLoadImage 
            src={require(`../../assets/img/${item?.urlImg}`)}
            alt={item?.title}
            className="blog-articles-card-image"
          />
          </Link>
        </div>
        </div>
        <div className="blog-articles-ctn-card-info">
          <p className="blog-articles-card-info-title">{item?.name}</p>
          <p className="blog-articles-card-info-category">{item?.text}</p>
        </div>
      </div>
    ))
  );

  return (
    <div className="blog-articles-ctn">
      <div className="blog-articles-ctn-content">
        <div className="blog-articles-ctn-cards">
          {getPosts()}
        </div>
      </div>
    </div>
  
  
  )
};

export default BlogContent;
