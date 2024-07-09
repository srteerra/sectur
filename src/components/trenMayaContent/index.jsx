import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./styles.css";

const TrenMayaContent = ({ data }) => {
  return (
    <section className="tren-maya-ctn">
       <h1 className="informacion--titulo">{data.trenTitle1}</h1>
      <div className="informacion">
        
        <div className="informacion--left">

         
          <p className="informacion--texto">{data.trenP1}</p>
          
          <h2 className="informacion--titulo">{data.trenTitle2}</h2>
          <p className="informacion--texto">{data.trenP2}</p>
          
          <h2 className="informacion--titulo">{data.trenTitle3}</h2>
          <p className="informacion--texto">
            {data.trenP3}
          </p>


          <h2 className="informacion--titulo">{data.trenTitle4}</h2>
          <p className="informacion--texto">
          {data.trenP4}
          </p>

          <h1 className="informacion--titulo">{data.subtitle}</h1>
          <p className="informacion--texto">{data.text}</p>
          <ul>
            {data?.subText?.map((item) => (
              <li>{item.text}</li>
            ))}
          </ul>
        </div>
        <div className="informacion--right">
          <LazyLoadImage
            src={require(`../../assets/img/${data.imgUrl}`)}
            alt=""
            className="informacion--imagen"
          />
        </div>
      </div>
      <LazyLoadImage
        src={require(`../../assets/img/header/liston-azul.webp`)}
        alt=""
        className="train-maya-img-ribbon"
      />
      <div className="galeria">
        <h1 className="galeria--titulo">{data.subTitle2}</h1>
        <div className="galeria--contenido">
          {data?.gallery?.map((item) => (
            <LazyLoadImage
              src={require(`../../assets/img/${item.imgUrl}`)}
              alt=""
              className={item.clase}
            />
          ))}
        </div>
      </div>
      <br />

      <LazyLoadImage
        src={require(`../../assets/img/header/liston-azul.webp`)}
        alt=""
        className="train-maya-img-ribbon"
      />

      <script type="application/ld+json">
      {`
        "@context": "https://schema.org",
        "@type": "WebPage",
        "url": "https://visitmexico.com/tren-maya",
        "name": "Tren Maya - VisitMexico",
        "description": "Descubre el encanto del sureste de México con el Tren Maya. Embárcate en un viaje inolvidable a través de la exuberante selva, las antiguas ruinas mayas y las impresionantes playas del Caribe.",
        "keywords": ["tren maya", "sureste de México"],
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
  );
};

export default TrenMayaContent;
