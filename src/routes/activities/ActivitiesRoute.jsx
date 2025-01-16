import SingelActivity from "../../components/sections/activities/SingelActivity";

import germanBeech from "../../assets/images/activities/German Beech.jpg";
import swedish from "../../assets/images/activities/Swedish Wood.jpg";
import austrianBoards from "../../assets/images/activities/Austrian Boards.png";
import austrianTimberBeams from "../../assets/images/activities/Austrian Timber Beams.png";
import regularOakWood from "../../assets/images/activities/Regular Oak Wood.png";
import paintedBoards from "../../assets/images/activities/Starwood Painted Boards.jpg";
import fireMDF from "../../assets/images/activities/Fire-Resistant MDF.jpg";
import veneerMDF from "../../assets/images/activities/Veeneered MDF.jpg";
import ordinaryMDF from "../../assets/images/activities/Green MDF (Medium Density Fiberboard).png";
import regularMDF from "../../assets/images/activities/Regular MDF.png";

const ActivitiesRoute = () => {
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
          sercivePath={"wood"}
        />
        <SingelActivity
          imgSrc={swedish}
          imgAlt={"Swedish Wood"}
          title={"Swedish Wood"}
          desc={`A straight-grained, reddish-brown hardwood known for its durability and vibrant color, making it ideal for furniture, flooring, and other decorative applications.`}
          sercivePath={"wood"}
        />
        <SingelActivity
          imgSrc={regularOakWood}
          imgAlt={"American Red Oak"}
          title={"American Red Oak"}
          desc={`A strong, dense hardwood with a rich, warm color and prominent grain, commonly used in furniture, flooring, and cabinetry for its durability and timeless appeal.`}
          sercivePath={"wood-works"}
        />
        <SingelActivity
          imgSrc={austrianBoards}
          imgAlt={"Austrian White"}
          title={"Austrian White"}
          desc={`High-quality, durable wood panels known for their precision engineering, strength, and versatility, ideal for furniture, cabinetry, and interior design projects.`}
          sercivePath={"wood-works"}
        />
        <SingelActivity
          imgSrc={austrianTimberBeams}
          imgAlt={"Austrian Timber"}
          title={"Austrian Timber"}
          desc={`Strong and durable timber beams crafted from high-quality Austrian wood, ideal for structural applications, construction, and architectural projects requiring stability and aesthetic appeal.`}
          sercivePath={"wood-works"}
        />
        <SingelActivity
          imgSrc={paintedBoards}
          imgAlt={"Film-Faced plywood Starwood WBP"}
          title={"Film-Faced plywood Starwood WBP"}
          desc={`Durable, water-resistant plywood coated with a smooth film layer, designed for heavy-duty applications like concrete formwork, flooring, and outdoor projects.`}
          sercivePath={"wood-works"}
        />
        <SingelActivity
          imgSrc={fireMDF}
          imgAlt={"Austrian Timber Beams"}
          title={"Fire Rated MDF"}
          desc={`A specially engineered medium-density fiberboard designed to resist fire, offering enhanced safety while maintaining versatility for construction and interior projects.`}
          sercivePath={"wood-works"}
        />
        <SingelActivity
          imgSrc={regularMDF}
          imgAlt={"Ordinary MDF"}
          title={"Ordinary MDF"}
          desc={`A versatile and affordable engineered fiberboard product with a smooth, uniform surface, ideal for furniture, cabinetry, and interior design applications.`}
          sercivePath={"wood-works"}
        />
        <SingelActivity
          imgSrc={ordinaryMDF}
          imgAlt={"HMR MDF"}
          title={"HMR MDF"}
          desc={`A standard hight-density fiberboard and anti humdity with a smooth and uniform surface, ideal for general-purpose applications such as furniture, shelving, and interior paneling.`}
          sercivePath={"wood-works"}
        />
        <SingelActivity
          imgSrc={veneerMDF}
          imgAlt={"Veneer MDF"}
          title={"Veneer MDF"}
          desc={`A medium-density fiberboard surface covered with a natrual wood veneer, offering the look and feel of solid wood with the affordability and smoothness of fiber, ideal for furniture and interior design.`}
          sercivePath={"wood-works"}
        />
      </div>
    </section>
  );
};

export default ActivitiesRoute;
