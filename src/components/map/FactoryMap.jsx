import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useTranslation } from "react-i18next";

// factory coordinates
const factoryCoordinates = [21.422200639812875, 39.471974146326836];

// Default marker icon configuration for React Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const FactoryMap = () => {
  const { t } = useTranslation("common");
  return (
    <div className="flex">
      <div className="w-full mx-auto max-w-4xl h-[400px] rounded-lg shadow-lg overflow-hidden border border-gray-200">
        <MapContainer
          center={factoryCoordinates}
          zoom={12}
          className="w-full h-full"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={factoryCoordinates}>
            <Popup>
              <span className="text-blue-600 font-bold">
                <a
                  href="https://maps.app.goo.gl/JQLU5h6863UwQ6C26"
                  target="_blank"
                >
                  {t("visit")}
                </a>
              </span>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default FactoryMap;
