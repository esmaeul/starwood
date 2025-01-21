import Feature from "./features/Feature";
import feat1 from "../../assets/images/features/1.png";
import feat2 from "../../assets/images/features/2.jpg";

const Features = () => {
  return (
    <div className="bg-globalColor5">
      <div className="title py-16 lg:mt-12 bg-globalColor0 bg-opacity-75">
        <div className="container section h-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
          <Feature value={"65"} desc={"Team Members"} />
          <Feature value={"265"} desc={"Success Partners"} />
          <Feature value={"26"} desc={"Years of Experience"} />
        </div>
      </div>
      <div className="container grid grid-cols-2 gap-6 place-items-center my-16">
        <div className="md:col-span-1 col-span-full">
          <img className="max-h-full max-w-full" src={feat1} alt="" />
        </div>
        <div className="md:col-span-1 col-span-full">
          <img className="max-h-full max-w-full" src={feat2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Features;
