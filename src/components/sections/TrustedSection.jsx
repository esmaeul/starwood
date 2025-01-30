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
      <div className="container grid grid-cols-7 gap-16 py-16 image-container">
        <div className="col-span-2 flex justify-center items-center">
          <h1 className="text-7xl font-bold text-globalColor0 font-mono">
            {t("title")}
          </h1>
        </div>
        {trustedImgs.map((imgSrc, index) => (
          <div className="col-span-1" key={index}>
            {" "}
            {/* Use a better key if available */}
            <img
              src={imgSrc}
              alt={t(`trustedImage_${index}`)}
              className="w-full h-full object-contain max-w-full max-h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustedSection;
