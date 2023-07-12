import { ReactMarkdown } from "react-markdown/lib/react-markdown";

const YTPlayer = ({ videoItem }) => {
  const videoUrl =
    "https://www.youtube.com/embed/" +
    videoItem?.videoId +
    "?start=0&autoplay=1&origin=http://localhost:3000";

  return (
    <div>
      <p className="text-[26px] font-bold">{videoItem.title}</p>
      <div className="flex gap-3 mt-2">
        {videoItem?.tags?.map((item) => (
          <div>
            <h4 className="text-[8px] bg-blue-500 text-white px-2 pb-1 pt-1 rounded-sm">
              #{item.attributes.name}
            </h4>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <iframe
          id="ytplayer"
          type="text/html"
          width="100%"
          height="360"
          src={videoUrl}
        ></iframe>
      </div>
      <div className="p-4 bg-white mt-4 rounded-md">
        <h2 className="font-bold text-[20px] mb-2">About this course</h2>
        <ReactMarkdown>{videoItem?.description}</ReactMarkdown>
      </div>
    </div>
  );
};

export default YTPlayer;
