import React from 'react';
import './styles.css';
import banner from '../../assets/img/blog/cover_blog.jpg'



const BlogBanner = ({ data }) => {
  return (
    <section >
      <div className="blog-banner">
        <img src={banner} alt="Banner" />
        <div className="blog-banner-content">
          <h1>{data.title}</h1>
        </div>
    </div>

      <h1 className="videos-title-title">{data.blogT1}</h1>
			<div className="home-know-ctn-description">
				<div>
					<p className="home-know-description-title">{data.blogP1}</p>
				</div>
      </div>

      <h2 className="videos-title-title">{data.blogT2}</h2>
			<div className="home-know-ctn-description">
				<div>
					<p className="home-know-description-title">{data.blogP2}</p>
				</div>
      </div>


      <h2 className="videos-title-title">{data.blogT3}</h2>
			<div className="home-know-ctn-description">
				<div>
					<p className="home-know-description-title">{data.blogP3}</p>
				</div>
      </div>


      <h2 className="videos-title-title">{data.blogT4}</h2>
			<div className="home-know-ctn-description">
				<div>
					<p className="home-know-description-title">{data.blogP4}</p>
				</div>
      </div>

      <script type="application/ld+json">
          {`
            "@context": "https://schema.org",
            "@type": "WebPage",
            "url": "https://visitmexico.com/blog",
            "name": "Blog de VisitMexico - Tu Fuente de Inspiración para Descubrir México",
            "description": "Explora el fascinante mundo de México a través de nuestro blog, donde encontrarás historias, consejos de viaje, experiencias únicas y mucho más. ¡Descubre la belleza y la diversidad de México con nosotros!",
            "keywords": ["blog", "blog turismo México", "blog turístico"],
            "publisher": {
              "@type": "Organization",
              "name": "VisitMexico",
              "logo": {
                "@type": "ImageObject",
                "url": "https://visitmexico.com/logo.png",
                "width": 600,
                "height": 60
              }
            }
            `}
        </script>

  
  </section>

  


  )
};

export default BlogBanner;
