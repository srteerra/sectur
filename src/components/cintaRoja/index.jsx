import React from 'react';
import './styles.css'; // Asegúrate de tener tu archivo de estilos CSS

const CintaRoja = ({ data }) => {
  return (
    <div className="cinta-roja">
      <img
        src={require(`../../assets/img/${data.cintaRoja}`)}
        alt="separador"
        className="cinta-roja-image"
      />
    </div>
  );
};

export default CintaRoja;
