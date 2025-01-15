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
          desc={`Beech wood has a very homogeneous surface, structure and hardness,
          which means that the wood does not absorb the paint when
          surface-treated, but the paint is distributed neatly and evenly on the
          surface.`}
          sercivePath={"wood"}
        />
        <SingelService
          imgSrc={whiteMelamine}
          imgAlt={"Swedish Wood"}
          title={"Swedish Wood"}
          desc={`Swedish Wood is a straight-grained, reddish-brown hardwood from the
              tropical mahogany tree family. Mahogany is used commercially for a
              variety of goods, due to its colorful and durable nature.`}
          sercivePath={"wood"}
        />
        <SingelService
          imgSrc={frMdf}
          imgAlt={"Amirican-sindian"}
          title={"Fire Rated MDF"}
          desc={`French Medepen is very strong, hard, heavy, dense, and has a very close
              grain, making it highly resistant to insect and fungal damage. Oak
              is commonly used in furniture, joinery, flooring, paneling, veneer`}
          sercivePath={"wood-works"}
        />
        <SingelService
          imgSrc={austrianBoards}
          imgAlt={"Austrian Boards"}
          title={"Austrian Boards"}
          desc={`Beech wood has a very homogeneous surface, structure and hardness,
              which means that the wood does not absorb the paint when
              surface-treated, but the paint is distributed neatly and evenly on
              the surface.`}
          sercivePath={"wood-works"}
        />
        <SingelService
          imgSrc={swedish}
          imgAlt={"Austrian"}
          title={"Austrian"}
          desc={`Beech wood has a very homogeneous surface, structure and hardness,
              which means that the wood does not absorb the paint when
              surface-treated, but the paint is distributed neatly and evenly on
              the surface.`}
          sercivePath={"wood-works"}
        />
        <SingelService
          imgSrc={austrianTimberBeams}
          imgAlt={"Austrian Timber Beams"}
          title={"Austrian Timber Beams"}
          desc={`Austrian Timber Beams wood has a very homogeneous surface, structure and hardness,
              which means that the wood does not absorb the paint when
              surface-treated, but the paint is distributed neatly and evenly on
              the surface.`}
          sercivePath={"wood-works"}
        />
        <SingelService
          imgSrc={regularMdf}
          imgAlt={"Regular MDF"}
          title={"Ordinary MDF"}
          desc={`Ordinary MDF wood has a very homogeneous surface, structure and hardness,
              which means that the wood does not absorb the paint when
              surface-treated, but the paint is distributed neatly and evenly on
              the surface.`}
          sercivePath={"wood-works"}
        />
        <SingelService
          imgSrc={regularOakWood}
          imgAlt={"American Red Oak"}
          title={"American Red Oak"}
          desc={`American Red Oak wood has a very homogeneous surface, structure and hardness,
              which means that the wood does not absorb the paint when
              surface-treated, but the paint is distributed neatly and evenly on
              the surface.`}
          sercivePath={"wood-works"}
        />
        <SingelService
          imgSrc={veeneeredMDF}
          imgAlt={"MDF Veneer"}
          title={"MDF Veneer"}
          desc={`Veeneered MDF wood has a very homogeneous surface, structure and hardness,
              which means that the wood does not absorb the paint when
              surface-treated, but the paint is distributed neatly and evenly on
              the surface.`}
          sercivePath={"wood-works"}
        />
      </div>
    </section>
  );
};

export default Activities;
