// import Main from './Components/Main';
import { Component } from 'react';
import CardList from './Components/CardList';
import Player from './Components/Player';
import SearchBar from "./Components/searchbar";


class App extends Component{
  render(){
     return (
    <div >
      <h1> Wild-Code-School Player</h1>
      <SearchBar/>
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
