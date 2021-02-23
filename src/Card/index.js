import React, { Component } from "react";
import "./card.css";
class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      faceUp: false,
    };
  }
  flip() {
    this.setState({
      faceUp: !this.state.faceUp,
    });
  }
  render() {
    let status;
    if (!this.state.faceUp) {
      status = "";
    } else {
      status = this.props.status;
    }
    return (
      <div
        className={`card ${this.state.faceUp ? "face-up" : ""}`}
        onClick={() => {
          this.flip();
        }}
      >
        {status}
      </div>
    );
  }
}

export default Card;
