import "./contact.css";
import "leaflet/dist/leaflet.css";//style file for map from leaflet

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const Map = () => {

  const position = [12.87818, 77.76228]

  return (
      <MapContainer center={position} zoom={13} scrollWheelZoom={false} className="map">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            4key Hunger Hackers. <br /> Confident Oxygen mall,<br />Bangalore,Dommasandra.
          </Popup>
        </Marker>
      </MapContainer>
  );
};

export default Map;
