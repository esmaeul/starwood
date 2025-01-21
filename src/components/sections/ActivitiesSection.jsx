import SingelActivity from "./activities/SingelActivity";

import germanBeech from "../../assets/images/activities/German Beech.jpg";
import swedish from "../../assets/images/activities/Swedish Wood.jpg";
import austrianBoards from "../../assets/images/activities/Austrian Boards.png";
import austrianTimberBeams from "../../assets/images/activities/Austrian Timber Beams.png";
import regularOakWood from "../../assets/images/activities/Regular Oak Wood.png";
import paintedBoards from "../../assets/images/activities/Starwood Painted Boards.jpg";
import ordinaryMDF from "../../assets/images/activities/Green MDF (Medium Density Fiberboard).png";
import fireMDF from "../../assets/images/activities/Fire-Resistant MDF.jpg";
import regularMDF from "../../assets/images/activities/Regular MDF.png";
import palaceDoor from "../../assets/images/activities/2.png";
import cladding from "../../assets/images/activities/11.png";
import InteriorDoor from "../../assets/images/activities/Door.png";
import { Link } from "react-router-dom";

const ActivitiesSection = () => {
  return (
    <section
      id="Activities"
      className="SingelActivity min-h-screen bg-globalColor1 mt-16 py-6 pt-16"
    >
      <div className="container section grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        <div className="main-heading col-span-full mb-8 w-fit mx-auto flex flex-col gap-1.5">
          <h2 className="text-5xl text-globalColor0">Types of Wood We Offer</h2>
          <p className="text-white my-6 mx-auto w-fit font-light">
            We Provide Superior Construction SingelActivity
          </p>
        </div>
        <SingelActivity
          imgSrc={germanBeech}
          imgAlt={"German beech wood"}
          title={"German beech wood"}
          desc={`A high-quality hardwood with a uniform surface, structure, and hardness, ensuring paint or finish is evenly distributed without absorption. Perfect for achieving smooth, flawless finishes.`}
        />
        <SingelActivity
          imgSrc={swedish}
          imgAlt={"Swedish Wood"}
          title={"Swedish Wood"}
          desc={`A straight-grained, reddish-brown hardwood known for its durability and vibrant color, making it ideal for furniture, flooring, and other decorative applications.`}
        />
        <SingelActivity
          imgSrc={regularOakWood}
          imgAlt={"American Red Oak"}
          title={"American Red Oak"}
          desc={`A strong, dense hardwood with a rich, warm color and prominent grain, commonly used in furniture, flooring, and cabinetry for its durability and timeless appeal.`}
        />
        <SingelActivity
          imgSrc={austrianBoards}
          imgAlt={"Austrian White"}
          title={"Austrian White"}
          desc={`High-quality, durable wood panels known for their precision engineering, strength, and versatility, ideal for furniture, cabinetry, and interior design projects.`}
        />
        <SingelActivity
          imgSrc={austrianTimberBeams}
          imgAlt={"Austrian Timber"}
          title={"Austrian Timber"}
          desc={`Strong and durable timber beams crafted from high-quality Austrian wood, ideal for structural applications, construction, and architectural projects requiring stability and aesthetic appeal.`}
        />
        <SingelActivity
          imgSrc={paintedBoards}
          imgAlt={"Film-Faced plywood Starwood WBP"}
          title={"Film-Faced plywood Starwood WBP"}
          desc={`Durable, water-resistant plywood coated with a smooth film layer, designed for heavy-duty applications like concrete formwork, flooring, and outdoor projects.`}
        />
        <SingelActivity
          imgSrc={fireMDF}
          imgAlt={"Austrian Timber Beams"}
          title={"Fire Rated MDF"}
          desc={`A specially engineered medium-density fiberboard designed to resist fire, offering enhanced safety while maintaining versatility for construction and interior projects.`}
        />
        <SingelActivity
          imgSrc={regularMDF}
          imgAlt={"Ordinary MDF"}
          title={"Ordinary MDF"}
          desc={`A versatile and affordable engineered fiberboard product with a smooth, uniform surface, ideal for furniture, cabinetry, and interior design applications.`}
        />
        <SingelActivity
          imgSrc={ordinaryMDF}
          imgAlt={"HMR MDF"}
          title={"HMR MDF"}
          desc={`A standard hight-density fiberboard and anti humdity with a smooth and uniform surface, ideal for general-purpose applications such as furniture, shelving, and interior paneling.`}
        />
        <SingelActivity
          imgSrc={palaceDoor}
          imgAlt={"Exterior Door"}
          title={"Exterior Door"}
          desc={`Designed for strength, durability, and aesthetic appeal, our exterior doors are crafted to protect your space while making a lasting impression. Choose from a range of materials and styles to match your architectural vision and ensure lasting performance against the elements.`}
        />
        <SingelActivity
          imgSrc={cladding}
          imgAlt={"Cladding"}
          title={"Cladding"}
          desc={`High-performance cladding solutions designed to protect and beautify your exterior walls. Available in a variety of materials and finishes, offering durability and a modern look to any architectural style.`}
        />
        <SingelActivity
          imgSrc={InteriorDoor}
          imgAlt={"InteriorDoor"}
          title={"Interior Door"}
          desc={`Stylish and functional interior doors crafted for comfort and privacy. With a variety of designs, finishes, and materials to choose from, these doors seamlessly enhance the interior design of your home or workspace.`}
        />
        {/* See More Link Button */}
        <div className="col-span-full place-content-center place-items-center text-center py-16">
          <Link
            to="/decorations"
            className="rounded-sm border text-white border-t-emerald-50 w-fit px-24 py-3 text-xl hover:bg-white hover:text-globalColor0 hover:border-globalColor0 transition"
          >
            See More
          </Link>
        </div>
        {/* End See More Link Button */}
      </div>
    </section>
  );
};

export default ActivitiesSection;
