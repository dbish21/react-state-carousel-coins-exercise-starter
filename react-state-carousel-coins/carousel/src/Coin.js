import React from "react";
import "./Coin.css";

function Coin({ side }) {
  return (
    <div className="Coin">
      <img
        src={side === "heads" ? "/heads.png" : "/tails.png"}
        alt={side}
        className="Coin-image"
      />
    </div>
  );
}

export default Coin; 