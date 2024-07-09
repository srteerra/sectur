import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./styles.css";

const GuiasTuristicasContent = ({ data }) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [detailModal, setDetailGuide] = useState(false);
  useEffect(() => {
    setIsOpen(false);
  }, []);

  const showModal = (item) => {
    //alert("text");
    setIsOpen(true);
    setDetailGuide(item);
    //{guides.map((item)=>{
    //alert("info:"+item.title);
    //})}
  };

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    //subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <section>
      <div className="guias-title-ctn ">

      <h1 className="guias-known-title">{data.descubreTitle}</h1>
			<div className="home-know-ctn-description">
				<div>
					<p style={{ paddingRight: '20px', paddingLeft: '20px' }} className="home-know-description-title">{data.descubreParrafo}</p>
				</div>
      </div>


      <h2 className="guias-known-title">{data.guiasTitle}</h2>
			<div className="home-know-ctn-description">
				<div>
					<p style={{ paddingRight: '20px', paddingLeft: '20px' }} className="home-know-description-title">{data.guiasParrafo}</p>
				</div>
      </div>


      <h2 className="guias-known-title">{data.consejosTitle}</h2>
			<div className="home-know-ctn-description">
				<div>
					<p style={{ paddingRight: '20px', paddingLeft: '20px' }} className="home-know-description-title">{data.consejosParrafo}</p>
				</div>
      </div>


      <h2 className="guias-known-title">{data.actividadesTitle}</h2>
			<div className="home-know-ctn-description">
				<div>
					<p style={{ paddingRight: '20px', paddingLeft: '20px' }} className="home-know-description-title">{data.actividadesParrafo}</p>
				</div>
      </div>


        <h2 className="guias-known-title">{data?.titleTop}</h2>
        <h4 className="guias-known-subtitle">{data?.subTitle}</h4>
      </div>
      <div className="guias-contenedor">
        {data?.gallery?.map((item) => (
          <div
            className="guias-item"
            onClick={() => {
              showModal(item);
            }}>
            <LazyLoadImage src={item?.urlImg} alt={item?.title} />
            <p className="guias-texto">{item.title}</p>
          </div>
        ))}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modalGuides2"
      >
        <div className="modalGuides">
            <div className="guias-modal-header">
              <h5 className='guias-modal-title'>{detailModal.title}</h5>
              <span class="guias-modal-close" onClick={closeModal}>x</span>
            </div>
          <div className="guias-modal-body">
            <p className='guias-modal-text'>{detailModal.text}</p>
            <div className="guias-modal-downloads">
              {detailModal?.guides?.map((item) => (
                 <a href={item.link} className="guias-modal-download" >
                       <LazyLoadImage src={item?.urlImg} alt={item?.title} />
                  <p >{item.title}</p>
               </a>
              ))}
            </div>

           
          </div>
        </div>
      </Modal>

      <script type="application/ld+json">
          {`
            "@context": "https://schema.org",
            "@type": "WebPage",
            "url": "https://visitmexico.com/guias-turisticas",
            "name": "Guías Turísticas de México - VisitMexico",
            "description": "Descubre México con nuestras guías turísticas, tu compañero de viaje perfecto. Encuentra información detallada, consejos de viaje y recomendaciones locales para explorar los destinos más emblemáticos de México.",
            "keywords": ["guías turísticas México"],
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

export default GuiasTuristicasContent;
