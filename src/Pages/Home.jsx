import { useState } from "react";
import SearchSection from "../components/HomePageComponents/SearchSection";
import VideoGridList from "../components/HomePageComponents/VideoGridList";

const Home = () => {
  const [searchText, setSearchText] = useState();
  return (
    <div>
      <SearchSection searchInput={(text) => setSearchText(text)} />
      <VideoGridList searchInput={searchText} />
    </div>
  );
};

export default Home;
