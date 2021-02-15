// import Main from './Components/Main';
import { Component } from 'react';
import CardList from './Components/CardList';
import Player from './Components/Player';
import SearchBar from "./Components/searchbar";
import data from './Components/data';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tern: '',
      title: props.title,
    }
  }


  search(items, tern) {
    if (tern.length === 0) {
      return items
    }
    items.filter((item) => {
      return item.label.indexOf(tern) > -1
    });
  }

  render() {
    const { title, tern } = this.state
    const visibleItems = this.search(title, tern);

    // const filter = title.filter(element => element ==)
    return (
      <div>
        <h1> Wild-Code-School Player</h1>
        <SearchBar />
        <div className="App">
          <Player />
          <CardList />
        </div>


        {/* <Main /> */}
      </div>
    );
  }

}

export default App;
