// import Main from './Components/Main';
import { Component } from "react";
import CardList from "./Components/CardList";
import Player from "./Components/Player";
import SearchBar from "./Components/searchbar";
import data from "./Components/data";

class App extends Component {
  constructor() {
    super();
    this.state = {
      pickedMovie: null,
    };

    this.handleSetMovie2 = this.handleSetMovie.bind(this);
  }

  handleSetMovie(movieTitle) {
    const findMovieByTitle = data.find((mov) => mov.title === movieTitle);
    this.setState({
      pickedMovie: findMovieByTitle,
    });
  }

  render() {
    const { pickedMovie } = this.state;
    const handleSetMovie2 = this.handleSetMovie2;

    return (
      <div>
        <h1> Wild-Code-School Player</h1>
        <SearchBar />
        <div className="App">
          <Player movie={pickedMovie} />
          <CardList data={data} handleSetMovie={handleSetMovie2} />
        </div>

        {/* <Main /> */}
      </div>
    );
  }
}

export default App;
