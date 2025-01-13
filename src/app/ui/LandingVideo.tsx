const LandingVideo = () => {
  return (
    <video
      className="w-full h-full"
      width="320"
      height="240"
      controls
      preload="none"
    >
      <source src="../assets/images/awesome-video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default LandingVideo;
