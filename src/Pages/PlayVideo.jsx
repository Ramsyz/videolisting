import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RecommendedVideo from "../components/PlayVideoComponent/RecommendedVideo";
import YTPlayer from "../components/PlayVideoComponent/YTPlayer";
import GlobalApi from "../services/GlobalApi";

function PlayVideo() {
  const { id } = useParams();
  const [videoItem, setVideoItem] = useState([]);
  useEffect(() => {
    getVideoDetailById();
  }, []);

  const getVideoDetailById = async () => {
    GlobalApi.getVideoById(id).then((res) => {
      const result = {
        id: res.data.data.id,
        title: res.data.data.attributes.title,
        description: res.data.data.attributes.description,
        image: res.data.data.attributes.image.data.attributes.url,
        tags: res.data.data.attributes.tags.data,
        videoId: res.data.data.attributes.videoUrl,
        topics: res.data?.data?.attributes.topics,
      };
      setVideoItem(result); 
    });
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 p-10">
      <YTPlayer videoItem={videoItem} />
      <RecommendedVideo />
    </div>
  );
}

export default PlayVideo;
