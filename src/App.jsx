import Home from "./Pages/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import PlayVideo from "./Pages/PlayVideo";

function App() {
  return (
    <>
      <Header />
      <div className="p-5">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/play-video/:id" element={<PlayVideo />}></Route>
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
