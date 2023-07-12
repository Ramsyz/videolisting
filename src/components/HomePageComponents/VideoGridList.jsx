import { useState, useEffect } from "react";
import GlobalApi from "../../services/GlobalApi";
import VideoCard from "./VideoCard";
import { useNavigate } from "react-router-dom";

const VideoGridList = ({ isRecommended = false, searchInput }) => {
  const [videoList, setVideoList] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    GlobalApi.getAllVideoList.then((res) => {
      const result = res.data.data.map((item) => ({
        id: item.id,
        title: item.attributes.title,
        decription: item.attributes.description,
        image: item.attributes.image.data.attributes.url,
        tags: item.attributes.tags.data,
      }));
      setVideoList(result);
    });
  }, [searchInput]);
  return (
    <div className="mt-2 md:mt-4">
      <h4 className="px-4 md:px-8 lg:px-12">Recommended Videos</h4>

      {!isRecommended ? (
        <div
          className="mt-4 px-4 md:px-8 lg:px-12 
   grid grid-cols-2 gap-6 
   md:grid-cols-3 lg:grid-cols-4"
        >
          {videoList.map((item) => (
            <div onClick={() => navigate("play-video/" + item.id)}>
              <VideoCard key={item.id} videoItem={item} />
            </div>
          ))}
        </div>
      ) : (
        <div>
          <div
            className="mt-4 px-4 md:px-8 lg:px-12 
   grid grid-cols-2 gap-6 
  "
          >
            {videoList.map(
              (item, index) =>
                index < 6 && (
                  <div
                    key={item.id}
                    onClick={() => navigate("play-video/" + item.id)}
                  >
                    <VideoCard videoItem={item} />
                  </div>
                )
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoGridList;
