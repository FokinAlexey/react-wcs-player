import "../main.css";
import React, { Component } from "react";

class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleSetMovie, imgUrl, title, description } = this.props;

    return (
      <div className="card" onClick={() => handleSetMovie(title)}>
        <img src={imgUrl} alt="image" />
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default Card;
