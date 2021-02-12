import ReactPlayer from 'react-player/youtube';
import React from 'react';

const Player = () => {
    return (
        <div className = "player"> 
              <ReactPlayer url='https://youtu.be/TdYUQ3gOrvQ' />
              <h2 className ="title"> F9 the fast saga</h2>
              <p className= "descript">Fast & Furious 9, 2021</p>
        </div>
      

    );
}


export default Player;