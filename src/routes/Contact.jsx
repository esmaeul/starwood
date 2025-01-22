import BahraMap from "../components/map/BahraMap";
import HeadOfficeMap from "../components/map/HeadOfficeMap";
import OsfanMap from "../components/map/OsfanMap";
import MapRiyadh from "../components/map/RiyadhMap";
import FactoryMap from "../components/map/FactoryMap";

const Contact = () => {
  return (
    <div className="min-h-screen relative z-20 bg-globalColor6 bg-opacity-85 py-16 text-globalColor5">
      <h1 className="text-7xl text-center mb-16 border-b w-fit mx-auto pb-16">
        Our Offices
      </h1>
      <div className="w-screen bg-transparent flex flex-col">
        <h1 className="text-center py-6 text-4xl font-semibold">Head Office</h1>
        <div className="container">
          <HeadOfficeMap />
        </div>
      </div>
      <div className="w-screen bg-transparent flex flex-col">
        <h1 className="text-center py-6 text-4xl font-semibold">Factory</h1>
        <div className="container">
          <FactoryMap />
        </div>
      </div>
      <div className="w-screen bg-transparent flex flex-col">
        <h1 className="text-center py-6 text-4xl font-semibold">
          Bahra Branch
        </h1>
        <div className="container">
          <BahraMap />
        </div>
      </div>
      <div className="w-screen bg-transparent flex flex-col">
        <h1 className="text-center py-6 text-4xl font-semibold">
          Osfan Branch
        </h1>
        <div className="container">
          <OsfanMap />
        </div>
      </div>
      <div className="w-screen bg-transparent flex flex-col">
        <h1 className="text-center py-6 text-4xl font-semibold">
          Riyadh Branch
        </h1>
        <div className="container">
          <MapRiyadh />
        </div>
      </div>
    </div>
  );
};

export default Contact;
