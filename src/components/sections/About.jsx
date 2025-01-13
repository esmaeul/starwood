import { Link } from "react-router-dom";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container section">
        <div className="left">
          <p>ut Company</p>
          <h1>Startwood Company</h1>
          <p>
            About Starwood Starwood is a company specializing in the sale of
            American, Swedish, and Austrian wood. We offer a wide range of wood
            products, including planks and beams, to meet the diverse needs of
            our customers. With a commitment to quality and sustainability,
            Starwood sources its wood from reputable suppliers and ensures that
            every piece meets the highest standards. Our extensive inventory and
            knowledgeable staff make us a trusted partner for all your wood
            needs.
          </p>
          <div className="row">
            <i className="fa-solid fa-circle-check"></i>
            <span>certified Company</span>
          </div>
          <Link to="/about">Read More</Link>
        </div>
      </div>
    </section>
  );
};

export default About;
