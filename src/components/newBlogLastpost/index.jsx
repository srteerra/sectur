import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom'; // Importa Link
import './styles.css';



const NewBlogLastPost = ({ data, label }) => {
    // Obtén el primer post y el resto de los posts
    const [firstPost, ...otherPosts] = data;
    const topThreePosts = data.slice(0, 3);
    return (
        <>
        
        <div className='blog-last-post-container'>
       <div className="titulo-blog-seccion">
       <h2>{label.ultimosArticulos}</h2>
       </div>
            <div className='blog-last-post-left'>
                <div className="blog-last-post-main-single">
                    <LazyLoadImage
                    src={require(`../../assets/img/${firstPost.urlImg}`)}
                    alt="Post Image"
                    className="main-single-image"
                    />
                    
                    <div className="main-image-overlay">
                        <h2 className="image-title">{firstPost.name}</h2>
                        <Link to={`/blog/post/${firstPost.id}`} className="read-more-button">{firstPost.postReadmoreButton}</Link> {/* Reemplaza <a> con <Link> */}
                    </div>
                </div>
                <div className="blog-last-post-middle-content">
                {otherPosts.map(post => (
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
                    ))}
                </div>
            </div>

            <div className='blog-last-post-right'>
                <div className="blog-last-mas-leidos">
                        <h2>{ label.masLeidos }</h2>
                        {topThreePosts.map(post => (
                        <div className="middle-content-post" key={post.id}>
                            <div className="middle-content-post-left">
                                <LazyLoadImage src={require(`../../assets/img/${post.urlImg}`)} />
                            </div>
                            <div className="middle-content-post-right">
                                <spam className="badge">{post.categoriaLabel}</spam>
                                <h3>{post.name}</h3>
                                <Link to={`/blog/post/${post.id}`}>{post.postReadmoreButton}</Link>
                            </div>
                        </div>
                        ))}
                </div>
                
            </div>


        </div>
      </>
    );
  };
  
  export default NewBlogLastPost;