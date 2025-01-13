const LandingVideo = () => {
  return (
    <video className="w-full h-full" controls preload="none">
      <source src="../../assets/images/awesome-video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default LandingVideo;