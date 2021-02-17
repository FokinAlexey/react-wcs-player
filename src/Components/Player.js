import ReactPlayer from "react-player/youtube";
import React, { Component } from "react";

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      like: 0,
      dislike: 0,
    };

    this.handleLikes = this.handleLikes.bind(this);
  }

  handleLikes(type) {
    this.setState({
      ...this.state,
      [type]: this.state[type] + 1,
    });
  }

  render() {
    const { movie } = this.props;
    const { like, dislike } = this.state;
    const handleLikes = this.handleLikes;
    return (
      <div className="player">
        <ReactPlayer url={movie?.videoUrl || "https://youtu.be/XSs2cR2Tvuk"} />
        <h2 className="title">{movie?.title || "Wake Me Up"}</h2>
        <p className="descript">
          {movie?.description ||
            "Avicii (violin/cello/bass cover) - Simply Three"}
        </p>
        <span onClick={() => handleLikes("like")}>Like: {like}</span>
        <span onClick={() => handleLikes("dislike")}>Dislike: {dislike}</span>
      </div>
    );
  }
}

export default Player;
