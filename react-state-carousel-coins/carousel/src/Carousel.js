import React, { useState } from "react";
import "./Carousel.css";
import Card from "./Card";

function Carousel({ photos, title }) {
  const [currCardIdx, setCurrCardIdx] = useState(0);

  const goForward = () => {
    setCurrCardIdx(currCardIdx + 1);
  };

  const goBackward = () => {
    setCurrCardIdx(currCardIdx - 1);
  };

  return (
    <div className="Carousel">
      <h1>{title}</h1>
      <div className="Carousel-main">
        {currCardIdx > 0 && (
          <i
            data-testid="left-arrow"
            className="fas fa-chevron-circle-left fa-2x"
            onClick={goBackward}
          />
        )}
        <Card
          caption={photos[currCardIdx].caption}
          src={photos[currCardIdx].src}
          currNum={currCardIdx + 1}
          totalNum={photos.length}
        />
        {currCardIdx < photos.length - 1 && (
          <i
            data-testid="right-arrow"
            className="fas fa-chevron-circle-right fa-2x"
            onClick={goForward}
          />
        )}
      </div>
    </div>
  );
}

export default Carousel;