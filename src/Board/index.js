import React from "react";
import Card from "../Card/";
import "./board.css";
const Board = () => {
  const emojis = [
    "😁",
    "🤭",
    "🤫",
    "🤥",
    "😶",
    "🤕",
    "🤑",
    "🤠",
    "🤩",
    "🥳",
    "😏",
    "😒",
  ];
  return (
    <div>
      <h1>Card-Memory-Game</h1>
      <div className="d-flex justify-content-center mt-5">
        <div className="card-container  mt-4">
          {emojis.map((elem) => {
            return <Card status={elem} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Board;
<h1>This game board</h1>;
