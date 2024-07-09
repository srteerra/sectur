import React from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import Map, {
  Marker,
  NavigationControl,
  Popup
} from "react-map-gl";
import { useState } from "react";

function MapaPueblosMagicos({ data, dataLabels }) {
  const [lng, setLng] = useState(-99.13599163659597);
  const [lat, setLat] = useState(19.464688327073777);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState(null); // Estado para el filtro seleccionado

  // Función para filtrar marcadores
   const filteredData = selectedFilter ? data.filter(marker => marker.category === selectedFilter) : data;

  return (
    <div className="App">
      <Map
        mapboxAccessToken={"pk.eyJ1IjoiZGFub3JpdmVyYSIsImEiOiJjbHVpdWF3em0wOHdiMnFtam5zYTdjN3g3In0.khJqHVzlVd7c2iW9HTdB3w"}
        style={{
          width: "100%",
          height: "600px",
        }}
        initialViewState={{
          longitude: lng,
          latitude: lat,
          zoom: 5,
          transitionDuration: 1000,
        }}
        mapStyle="mapbox://styles/danorivera/clvznf2nh0aha01pk7ev243gw"

      >
        {/* Renderizar marcadores desde el JSON */}
        {filteredData.map((marker, index) => (
          <Marker
            key={index}
            longitude={marker.longitude}
            latitude={marker.latitude}
            onClick={() => { setSelectedMarker(marker);}}
          >
            <img height={'20px'} src={require(`../../assets/img/${marker.pin}`)} />
          </Marker>
        ))}

        {/* Control de navegación */}
        <div style={{ position: 'absolute', right: 10, top: 10 }}>
          <NavigationControl />
        </div>

        {/* Popup para mostrar información si selectedMarker no está vacío */}
        {(selectedMarker &&
          <Popup
            longitude={selectedMarker.longitude}
            latitude={selectedMarker.latitude}
            onClose={() => setSelectedMarker(null)}
            closeOnClick={false}
            anchor="bottom"
          >
            <div style={{ padding: '10px' }}>
              {selectedMarker.alt}
            </div>
          </Popup>
        )}

      </Map>

        {/* Recuadro para mostrar lista de imágenes y descripciones */}
        <div style={{ position: 'absolute', bottom: 180, left: 10, backgroundColor: 'white', padding: '10px', borderRadius: '5px' }}>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {dataLabels.map((item, index) => (
              <li key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '5px', cursor: 'pointer' }}
              onClick={() => setSelectedFilter(item.filterKey)}
              >
                <img src={require(`../../assets/img/pueblos-magicos/${item.acotacionImg}`)} height="30px" alt={item.nombreItem} style={{ marginRight: '10px' }} />
                <span>{item.nombreItem}</span>
              </li>
            ))}
          </ul>
        </div>





    </div>
  );
}

export default MapaPueblosMagicos;
