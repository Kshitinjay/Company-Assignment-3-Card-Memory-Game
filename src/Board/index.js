import React, { Component } from "react";
import Card from "../Card/";
import "./board.css";
export default class Board extends Component {
  constructor(props) {
    super(props);
    const emojis = [
      "🤕",
      "🤑",
      "🤠",
      "🤩",
      "🥳",
      "😏",
      "🤕",
      "🤑",
      "🤠",
      "🤩",
      "🥳",
      "😏",
    ];
    const emojiToShow = emojis
      .sort(() => Math.random() - 0.5)
      .map((elem) => {
        return {
          content: elem,
          faceUp: true,
        };
      });

    this.state = {
      emojiToShow: emojiToShow,
      firstClickId: null,
    };
  }

  actualFlipping(idx, faceUp) {
    this.setState({
      emojiToShow: this.state.emojiToShow.map((elem, i) => {
        if (i === idx) {
          return {
            content: elem.content,
            faceUp: !elem.faceUp,
          };
        } else {
          return elem;
        }
      }),
    });
    console.log("id and faceUp", idx, faceUp);
  }

  flip(idx, faceUp) {
    if (this.state.firstClickId === null) {
      this.setState({ firstClickId: idx });
    } else {
      const firstCardData = this.state.emojiToShow[this.state.firstClickId]
        .content;
      const secondCardData = this.state.emojiToShow[idx].content;
      console.log(`first data: ${firstCardData} second data ${secondCardData}`);
      if (firstCardData === secondCardData) {
        this.setState({ firstClickId: null });
      }
    }
    console.log("firstClickId", this.state.firstClickId);
    this.actualFlipping(idx, faceUp);
  }

  render() {
    return (
      <div>
        <h1>Card-Memory-Game</h1>
        <div className="d-flex justify-content-center mt-5">
          <div className="card-container  mt-4">
            {this.state.emojiToShow.map((elem, i) => {
              return (
                <Card
                  key={i}
                  status={elem.content}
                  faceUp={elem.faceUp}
                  flip={() => {
                    this.flip(i, elem.faceUp);
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
