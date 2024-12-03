import "./App.css";
import Carousel from "./Carousel";
import CoinContainer from "./CoinContainer.js";
import photos from "./photos.js";

function App() {
  const carouselPhotos = photos;
  const carouselTitle = "Shells from far-away beaches";

  return (
    <div className="App">
      <Carousel photos={carouselPhotos} title={carouselTitle} />
      <CoinContainer />
    </div>
  );
}

export default App;
