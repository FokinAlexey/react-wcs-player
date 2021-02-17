import Card from "./Card";
import React from "react";

class CardList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { data, handleSetMovie } = this.props;
    return (
      <div className="cardList">
        {data.map((el, index) => (
          <Card {...el} key={index} handleSetMovie={handleSetMovie} />
        ))}
      </div>
    );
  }
}

export default CardList;

// {data.map((el, index) => (
//                 <Card {...el}
//                     key={index}

//                 />
//             ))};
