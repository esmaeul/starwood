
// import landingImage from "../../assets/images/landing/landing.png";
import landingImage from "../../assets/images/decorations/29.png";

const LandingImage = () => {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <div className="w-11/12 mx-auto">
        <img
          src={landingImage}
          className="w-full h-full object-contain"
          aria-label="Landing image showcasing our logo"
        />
      </div>
    </div>
  );
};

export default LandingImage;
