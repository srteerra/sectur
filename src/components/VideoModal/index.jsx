import React from 'react';
import Modal from 'react-modal';
import './styles.css';

const VideoModal = ({ isOpen, onRequestClose, videoUrl }) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    contentLabel="Video Modal"
    className="modal"
    overlayClassName="modal-overlay"
  >
    <div className="modal-content">
      <button onClick={onRequestClose} className="modal-close-button">X</button>
      <div className="video-responsive">
        <iframe
          src={videoUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  </Modal>
);

export default VideoModal;
