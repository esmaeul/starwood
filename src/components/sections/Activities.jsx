import SingelService from "./activities/SingelActivity";

import germanBeech from "../../assets/images/activities/German Beech.jpg";
import swedish from "../../assets/images/activities/Swedish Wood.jpg";
import frMdf from "../../assets/images/activities/Fire-Resistant MDF.jpg";
import austrianBoards from "../../assets/images/activities/Austrian Boards.png";
import austrianTimberBeams from "../../assets/images/activities/Austrian Timber Beams.png";
import regularMdf from "../../assets/images/activities/Regular MDF.png";
import regularOakWood from "../../assets/images/activities/Regular Oak Wood.png";
import veeneeredMDF from "../../assets/images/activities/Veeneered MDF.jpg";
import whiteMelamine from "../../assets/images/activities/White Melamine.png";

const Activities = () => {
  return (
    <section
      id="Activities"
      className="SingelActivity min-h-screen bg-globalColor1 py-6 mt-16 pt-16"
    >
      <div className="container section grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        <div className="main-heading col-span-full mb-8 w-fit mx-auto flex flex-col gap-1.5">
          <h2 className="text-4xl text-globalColor0">Types of Wood We Offer</h2>
          <p className="text-white my-6 mx-auto w-fit font-light">
            We Provide Superior Construction SingelActivity
          </p>
        </div>
        <SingelService
          imgSrc={germanBeech}
          imgAlt={"German beech wood"}
          title={"German beech wood"}
          desc={`A high-quality hardwood with a uniform surface, structure, and hardness, ensuring paint or finish is evenly distributed without absorption. Perfect for achieving smooth, flawless finishes.`}
          sercivePath={"wood"}
        />
        <SingelService
          imgSrc={swedish}
          imgAlt={"Swedish Wood"}
          title={"Swedish Wood"}
          desc={`A straight-grained, reddish-brown hardwood known for its durability and vibrant color, making it ideal for furniture, flooring, and other decorative applications.`}
          sercivePath={"wood"}
        />
        <SingelService
          imgSrc={frMdf}
          imgAlt={"Fire Rated MDF"}
          title={"Fire Rated MDF"}
          desc={`A specially engineered medium-density fiberboard designed to resist fire, offering enhanced safety while maintaining versatility for construction and interior projects.`}
          sercivePath={"wood-works"}
        />
        <SingelService
          imgSrc={austrianBoards}
          imgAlt={"Austrian Boards"}
          title={"Austrian Boards"}
          desc={`High-quality, durable wood panels known for their precision engineering, strength, and versatility, ideal for furniture, cabinetry, and interior design projects.`}
          sercivePath={"wood-works"}
        />
        <SingelService
          imgSrc={austrianTimberBeams}
          imgAlt={"Austrian Timber Beams"}
          title={"Austrian Timber Beams"}
          desc={`Strong and durable timber beams crafted from high-quality Austrian wood, ideal for structural applications, construction, and architectural projects requiring stability and aesthetic appeal.`}
          sercivePath={"wood-works"}
        />
        <SingelService
          imgSrc={regularMdf}
          imgAlt={"Ordinary MDF"}
          title={"Ordinary MDF"}
          desc={`A versatile and affordable engineered wood product with a smooth, uniform surface, ideal for furniture, cabinetry, and interior design applications.`}
          sercivePath={"wood-works"}
        />
        <SingelService
          imgSrc={regularOakWood}
          imgAlt={"American Red Oak"}
          title={"American Red Oak"}
          desc={`A strong, dense hardwood with a rich, warm color and prominent grain, commonly used in furniture, flooring, and cabinetry for its durability and timeless appeal.`}
          sercivePath={"wood-works"}
        />
        <SingelService
          imgSrc={veeneeredMDF}
          imgAlt={"MDF Veneer"}
          title={"MDF Veneer"}
          desc={`A medium-density fiberboard (MDF) surface covered with a thin layer of real wood veneer, offering the look and feel of solid wood with the affordability and smoothness of MDF, ideal for furniture and interior design.`}
          sercivePath={"wood-works"}
        />
      </div>
    </section>
  );
};

export default Activities;
