import ReactPlayer from 'react-player/youtube';
import React, { Component } from 'react';

class Player extends Component {
    constructor() {
        super()
        this.state = {
            count: 0,
            count1: 0
        }
    }

    handelClick() {
        this.setState({ count: this.state.count + 1 })
    }

    handelClick1() {
        this.setState({ count1: this.state.count1 + 1 })
    }

    render() {
        return (
            <div className="player">
                <ReactPlayer url='https://youtu.be/TdYUQ3gOrvQ' />
                <h2 className="title"> F9 the fast saga</h2>
                <p className="descript">Fast & Furious 9, 2021</p>
                <span onClick={() => this.handelClick()}> 👍 {this.state.count}</span>
                <span onClick={() => this.handelClick1()} > 👎 {this.state.count1}</span>
            </div>


        );
    }

}


export default Player;