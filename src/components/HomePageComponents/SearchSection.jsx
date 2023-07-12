import { AiOutlineSearch } from "react-icons/ai";

const SearchSection = ({ searchInput }) => {
  const searchButtontags = [
    {
      id: 1,
      tag: "Reactjs",
    },
    {
      id: 2,
      tag: "Angular",
    },
    {
      id: 3,
      tag: "Tailwindcss",
    },
    {
      id: 4,
      tag: "ChatGpt",
    },
  ];
  return (
    <div className="flex flex-col text-center items-center ">
      <h2 className="font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-red-700 to-orange-400">
        videos
      </h2>
      <div className="flex items-center bg-white w-[300px] lg:w-[500px] p-1 px-3 rounded-md">
        <input
          type="text"
          placeholder="Search"
          onChange={(text) => searchInput(text.target.value)}
          className="px-3 py-1 w-[95%] outline-none"
        />
        <AiOutlineSearch />
      </div>

      <div className="flex gap-4 mt-4">
        {searchButtontags.map((item) => (
          <div
            className="bg-white text-[14px] lg:text-[16px] rounded-md px-2 py-2 cursor-pointer hover:bg-red-600 hover:scale-105 transition duration-300 ease-in-out hover:font-semibold hover:text-white"
            key={item.id}
          >
            {item.tag}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchSection;
