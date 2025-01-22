import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Bahra coordinates
const BahraCoordinates = [21.944752537023792, 39.36059051317247];

// Default marker icon configuration for React Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const BahraMap = () => {
  return (
    <div className="flex">
      <div className="w-full mx-auto max-w-4xl h-[400px] rounded-lg shadow-lg overflow-hidden border border-gray-200">
        <MapContainer
          center={BahraCoordinates}
          zoom={12}
          className="w-full h-full"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={BahraCoordinates}>
            <Popup>
              <span className="text-blue-600 font-bold">
                <a
                  href="https://maps.app.goo.gl/JQLU5h6863UwQ6C26"
                  target="_blank"
                >
                  Visit us
                </a>
              </span>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default BahraMap;
