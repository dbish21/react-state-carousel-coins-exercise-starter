import React, { useState } from "react";
import Coin from "./Coin";
import "./CoinContainer.css";

function CoinContainer() {
  const [coin, setCoin] = useState(null);
  const [headsCount, setHeadsCount] = useState(0);
  const [tailsCount, setTailsCount] = useState(0);

  const flipCoin = () => {
    // Randomly choose heads or tails
    const newSide = Math.random() < 0.5 ? "heads" : "tails";
    setCoin(newSide);
    
    // Update the counts
    if (newSide === "heads") {
      setHeadsCount(c => c + 1);
    } else {
      setTailsCount(c => c + 1);
    }
  };

  return (
    <div className="CoinContainer">
      <h1>Let's flip a coin!</h1>
      
      {coin && <Coin side={coin} />}
      
      <button onClick={flipCoin}>Flip Me!</button>
      
      <p>
        Out of {headsCount + tailsCount} flips, there have been {headsCount} heads
        and {tailsCount} tails.
      </p>
    </div>
  );
}

export default CoinContainer; 