import { Link } from "react-router-dom";
import SingelService from "./services/SingelService";
import germanBeech from "../../../public/assets/images/woods/german-beech.png";
import mahgoniWood from "../../../public/assets/images/woods/Mahgoni.png";
import medepan from "../../../public/assets/images/woods/medepan-fr.jpg";
import amricanSinian from "../../../public/assets/images/woods/Amirican sindian.png";
import austrian from "../../../public/assets/images/woods/Austrian marbou3.png";
import austrian25x5 from "../../../public/assets/images/woods/Austria 25x5.png";
const Services = () => {
  return (
    <section
      id="services"
      className="services flex flex-col min-h-[100vh] bg-globalColor1 py-6 mt-16 pt-16"
    >
      <div className="container section grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        <div className="main-heading col-span-full mb-8">
          <h2 className="text-3xl">Types of Wood We Offer</h2>
          <p>We Provide Superior Construction Services</p>
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

export default Services;
