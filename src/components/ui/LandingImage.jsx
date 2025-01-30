import landingImage from "../../assets/images/landing/MUJ_8552.webp";

const LandingImage = () => {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <div className="min-w-full h-full">
        <img
          src={landingImage}
          className="w-full h-full object-cover bg-center"
          aria-label="Landing image showcasing our logo"
        />
      </div>
    </div>
  );
};

export default LandingImage;
