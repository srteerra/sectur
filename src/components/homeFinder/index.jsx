import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SelectSearch from 'react-select-search';
import 'react-select-search/style.css';
import './styles.css';

const HomeFinder = () => {
  const navigate = useNavigate();
  const [redirectUrl, setredirectUrl] = useState('/');
  const options = [
    {name: 'Visita México', value: '/'},
    {name: 'Destino turísticos México', value: '/'},
    {name: 'Vacaciones en México', value: '/'},
    {name: 'Lugares para vacacionar en México', value: '/'},
    {name: 'México turismo', value: '/'},

    {name: 'Estados de México', value: '/destinos'},
    {name: 'Estados de la República Mexicana', value: '/destinos'},
    {name: '32 Estados México', value: '/destinos'},
    {name: 'México dónde ir', value: '/destinos'},
    {name: 'Ciudades más bonitas de México', value: '/destinos'},

    {name: 'Tren maya', value: '/tren-maya'},
    {name: 'Tren jaguar', value: '/tren-maya'},
    {name: 'Inauguración Tren Maya', value: '/tren-maya'},
    {name: 'Nuevo tren México', value: '/tren-maya'},

    {name: 'Pueblos Mágicos de México', value: '/pueblos-magicos'},
    {name: 'Mejores pueblos mágicos', value: '/pueblos-magicos'},
    {name: 'Qué es un pueblo mágico', value: '/pueblos-magicos'},
    {name: 'Cuáles son pueblos mágicos', value: '/pueblos-magicos'},
    {name: 'Pueblitos bonitos de México', value: '/pueblos-magicos'},

    {name: 'NASCAR México', value: '/eventos-internacionales'},
    {name: 'Lucha libre México', value: '/eventos-internacionales'},
    {name: 'Eventos turísticos México', value: '/eventos-internacionales'},
    {name: 'Eventos artísticos México', value: '/eventos-internacionales'},
    {name: 'Eventos deportivos México', value: '/eventos-internacionales'},
    {name: 'Mejores eventos de México', value: '/eventos-internacionales'},

    {name: 'Islas Marías México', value: '/islas-marias'},
    {name: 'Islas Marías turismo', value: '/islas-marias'},
    {name: 'Islas Marías renovación', value: '/islas-marias'},
    {name: 'Islas Marías actividades', value: '/islas-marias'},
    {name: 'Islas Marías Museo', value: '/islas-marias'},

    {name: 'Celebración Día de Muertos', value: '/dia-de-muertos'},
    {name: 'Día de Muertos mejores lugares', value: '/dia-de-muertos'},
    {name: 'Día de Muertos catrina', value: '/dia-de-muertos'},
    {name: 'Día de Muertos turismo', value: '/dia-de-muertos'},
    {name: 'Dónde festejar Día de Muertos', value: '/dia-de-muertos'},
    {name: 'Dónde viajar Día de Muertos', value: '/dia-de-muertos'},

    {name: 'Bodas en México', value: '/experiencias/bodas'},
    {name: 'Lugares para citas románticas en México', value: '/experiencias/bodas'},
    {name: 'Turismo romance', value: '/experiencias/bodas'},
    {name: 'Turismo romántico', value: '/experiencias/bodas'},
    {name: 'Lugares para bodas', value: '/experiencias/bodas'},

    {name: 'Cocina mexicana', value: '/experiencias/rutas-gastronomicas'},
    {name: 'Cocina tradicional', value: '/experiencias/rutas-gastronomicas'},
    {name: 'Gastronomía México', value: '/experiencias/rutas-gastronomicas'},
    {name: 'México es sabor', value: '/experiencias/rutas-gastronomicas'},
    {name: 'Sabores de México', value: '/experiencias/rutas-gastronomicas'},
    {name: 'México culinario', value: '/experiencias/rutas-gastronomicas'},

    {name: 'Turismo de aventura', value: '/experiencias/aventura'},
    {name: 'Turismo deportivo', value: '/experiencias/aventura'},
    {name: 'Turismo extremo', value: '/experiencias/aventura'},
    {name: 'Turismo adrenalina', value: '/experiencias/aventura'},
    {name: 'Deportes extremos', value: '/experiencias/aventura'},
    {name: 'Vacaciones deportivas', value: '/experiencias/aventura'},
    {name: 'Surf en México', value: '/experiencias/aventura'},
    {name: 'Rapel en México', value: '/experiencias/aventura'},
    {name: 'Senderismo en México', value: '/experiencias/aventura'},
    {name: 'Tirolesa en México', value: '/experiencias/aventura'},
    {name: 'Automovilismo en México', value: '/experiencias/aventura'},

    {name: 'Turismo de bienestar', value: '/experiencias/bienestar'},
    {name: 'Turismo wellness', value: '/experiencias/bienestar'},
    {name: 'Spas en México', value: '/experiencias/bienestar'},
    {name: 'Masajes en México', value: '/experiencias/bienestar'},
    {name: 'Relajación México', value: '/experiencias/bienestar'},

    {name: 'Playas de México', value: '/experiencias/sol-y-playa'},
    {name: 'Mejores playas de México', value: '/experiencias/sol-y-playa'},
    {name: 'Océano Pacífico', value: '/experiencias/sol-y-playa'},
    {name: 'Golfo de California', value: '/experiencias/sol-y-playa'},
    {name: 'Golfo de México ', value: '/experiencias/sol-y-playa'},
    {name: 'Mar Caribe', value: '/experiencias/sol-y-playa'},
    {name: 'Estados con playa', value: '/experiencias/sol-y-playa'},
    {name: 'Estados con Mar', value: '/experiencias/sol-y-playa'},

    {name: 'Turismo sostenible', value: '/experiencias/sostenible'},
    {name: 'Turismo ecológico', value: '/experiencias/sostenible'},
    {name: 'Naturaleza', value: '/experiencias/sostenible'},
    {name: 'Camping en México', value: '/experiencias/sostenible'},
    {name: 'Acampar', value: '/experiencias/sostenible'},
  ];

  const handleSearch = (data) => {
    setredirectUrl(data);
  };

  useEffect(() => {
    navigate(redirectUrl)
  }, [redirectUrl]);

  return (
    <div className="home-searcher-ctn">
      <form className="home-searcher-form-ctn">
        <label 
          htmlFor="homeSearcher"
          className="home-searcher-form-label"
        >
          Buscador:
        </label>
        <div className="home-searcher-ctn-form-input">
          {/*<input 
            id="homeSearcher" 
            type="text" 
            name="searcherHome" 
            placeholder="Los mejores centros turísticos..."
            className="home-searcher-form-input"
          />*/}
          <SelectSearch 
            search={true}
            options={options}
            value=""
            name="search"
            placeholder="🔎 Buscar"
            onChange={handleSearch}
          />
          <button 
            type='submit'
            className="home-searcher-form-button"
          >
            Buscar
          </button>
        </div>
      </form>
    </div>
  );
};

export default HomeFinder;