const VideoCard = ({ videoItem }) => {
  return (
    <div>
      <div className="hover:scale-105 transition-all duration-200 cursor-pointer">
        <img src={videoItem.image} className="rounded-t-lg" />
        <div className="p-2 bg-white h-[160px] rounded-b-lg">
          <h2 className="font-bold text-[13px] line-clamp-3">
            {videoItem.title}
          </h2>
          <h3 className="text-[9px] mt-1 text-gray-500 line-clamp-3">
            {videoItem.description}
          </h3>
          <div className="flex gap-3 mt-4">
            {videoItem.tags.map((item) => (
              <div key={item.id}>
                <h5
                  className="text-[10px] lg:text-[14px]  bg-red-500 text-white
                   px-2 rounded-sm pb-1 pt-1 cursor-pointer"
                >
                  #{item.attributes.name}
                </h5>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
