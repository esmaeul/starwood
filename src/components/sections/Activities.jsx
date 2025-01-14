import SingelService from "./activities/SingelActivity";
import germanBeech from "../../assets/images/activities/German zan.png";
import mahgoniWood from "../../assets/images/activities/Mahgoni.png";
import medepan from "../../assets/images/activities/medepan-fr.jpg";
import amricanSinian from "../../assets/images/activities/Amirican sindian.png";
import austrian from "../../assets/images/activities/Austrian marbou3.png";
import austrian25x5 from "../../assets/images/activities/Austria 25x5.png";

const SingelActivity = () => {
  return (
    <section
      id="SingelActivity"
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
          imgSrc={mahgoniWood}
          imgAlt={"Mahogany wood"}
          title={"Mahogany wood"}
          desc={`Mahogany is a straight-grained, reddish-brown hardwood from the
              tropical mahogany tree family. Mahogany is used commercially for a
              variety of goods, due to its colorful and durable nature.`}
          sercivePath={"wood"}
        />
        <SingelService
          imgSrc={medepan}
          imgAlt={"Amirican-sindian"}
          title={"French Medepen"}
          desc={`French Medepen is very strong, hard, heavy, dense, and has a very close
              grain, making it highly resistant to insect and fungal damage. Oak
              is commonly used in furniture, joinery, flooring, paneling, veneer`}
          sercivePath={"wood-works"}
        />
        <SingelService
          imgSrc={amricanSinian}
          imgAlt={"Swedish wood"}
          title={"Swedish Wood"}
          desc={`Beech wood has a very homogeneous surface, structure and hardness,
              which means that the wood does not absorb the paint when
              surface-treated, but the paint is distributed neatly and evenly on
              the surface.`}
          sercivePath={"wood-works"}
        />
        <SingelService
          imgSrc={austrian}
          imgAlt={"Austrian"}
          title={"Austrian"}
          desc={`Beech wood has a very homogeneous surface, structure and hardness,
              which means that the wood does not absorb the paint when
              surface-treated, but the paint is distributed neatly and evenly on
              the surface.`}
          sercivePath={"wood-works"}
        />
        <SingelService
          imgSrc={austrian25x5}
          imgAlt={"Austrian 25*5 wood"}
          title={"Austrian 25*5"}
          desc={`Beech wood has a very homogeneous surface, structure and hardness,
              which means that the wood does not absorb the paint when
              surface-treated, but the paint is distributed neatly and evenly on
              the surface.`}
          sercivePath={"wood-works"}
        />
      </div>
    </section>
  );
};

export default SingelActivity;
