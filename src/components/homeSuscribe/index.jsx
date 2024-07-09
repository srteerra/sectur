import React, { useState, useEffect } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Bg from '../../assets/img/header/ZARAPE.webp';
import './styles.css';
import Modal from "react-modal";

const HomeSuscribe = () => {

  const [modal2IsOpen, setIsOpenModal2] = useState(false);
  useEffect(() => {
    setIsOpenModal2(false);
  }, []);

  const openSubcribe = () =>{
    setIsOpenModal2(true);
  };

  function closeModal() {
    setIsOpenModal2(false);
  }

  function openModal() {
    setIsOpenModal2(true);
  }

  function afterOpenModal() {
    setIsOpenModal2(true);
    // references are now sync'd and can be accessed.
    //subtitle.style.color = '#f00';
  }
  const listSuscribe = {
    title: "Suscríbete para más noticias",
    description: "Entérate de nuestras últimas noticias o actualizaciones, te mantendremos informado.",
    placeHolder: "Correo electrónico",
    button: {
      name: "Suscribir",
      dir: "/"
    }
  };
  return (
    <section>
    <div className="home-suscribe-ctn">
      <LazyLoadImage 
        src={Bg}
        alt="suscríbete"
        className="home-suscribe-image"
      />
      <div className="home-suscribe-ctn-suscribe">
      <h5 className='home-suscribe-suscribe-title' >{listSuscribe?.title}</h5>
      <br/>
      <p className="home-suscribe-suscribe-description">{listSuscribe?.description}</p>
      <br/>
      <div className="home-suscribe-ctn-form">
      
       <label  htmlFor="homeInfo"> </label>
       <input 
                id="homeInfo" 
                type="text" 
                name="searcherHome" 
                placeholder={listSuscribe?.placeHolder}
  className="home-searcher-suscribe-input"/>
        <br/>
        <button 
                type='submit'  onClick={() => {openSubcribe()}}
                className="home-searcher-suscribe-button" >
                {listSuscribe?.button?.name}
              </button>
      
      </div>
    </div>

     
  </div>
    
    <Modal
        isOpen={modal2IsOpen}
        onRequestClose={closeModal}
        className="modalSubscribe2"
        
      >
        <div className="modalSubscribe">
            <div className="subscribe-modal-header">
              <h5 className='subscribe-modal-title'>Gracias por suscribirte</h5>
              <span class="subscribe-modal-close" onClick={closeModal}>x</span>
            </div>
            <div className="subscribe-modal-body">
            <p className='subscribe-modal-text'>En breve te enviaremos un email al correo registrado...</p>
            <div className="spaceImageModal">
            <LazyLoadImage 
              src={require(`../../assets/img/subscribe/download.png`)}
              alt=""
              className="emailModal"
              />
            </div>
            
            </div>
        </div>
      </Modal>
      </section>
  );
};

export default HomeSuscribe; 