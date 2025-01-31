import { useTranslation } from "react-i18next";

const images = import.meta.glob(
  "../../assets/images/trusted/*.{png,jpg,jpeg,webp}",
  {
    eager: true,
  }
);
const trustedImgs = Object.values(images).map((img) => img.default);

const TrustedSection = () => {
  const { t } = useTranslation("trusted");

  return (
    <div className="section bg-globalColor7 min-h-52 border-b">
      <div className="container grid grid-cols-7 lg:gap-10 md:gap-10 sm:gap-4 gap-2 py-16 image-container">
        <div className="lg:col-span-2 md:col-span-3 col-span-full mx-auto w-fit text-center flex justify-center items-center">
          <h1 className="lg:text-7xl md:text-5xl text-4xl font-bold text-globalColor8 font-mono">
            {t("title")}
          </h1>
        </div>
        {trustedImgs.map((imgSrc, index) => (
          <div
            className="lg:col-span-1 col-span-2 select-none bg-white px-1.5 h-3/5 py-1.5 my-auto"
            key={index}
          >
            {" "}
            {/* Use a better key if available */}
            <img
              src={imgSrc}
              alt={t(`trustedImage_${index}`)}
              className="w-full object-contain max-w-full max-h-full h-full my-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustedSection;
