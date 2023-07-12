import VideoGridList from "../HomePageComponents/VideoGridList";

const RecommendedVideo = () => { 
  return (
    <div>
      <VideoGridList isRecommended={true} />
    </div>
  );
};

export default RecommendedVideo;
