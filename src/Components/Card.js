import '../main.css';
import React, {Component} from 'react'

class Card extends  Component {
    constructor(props){
        super(props)
    }
    render (){
           return (
        <div className='card'>
            <img src={this.props.imgUrl} alt='image' />
            <div>
                <h3>{this.props.title}</h3>
                <p>{this.props.description}</p>
            </div>

        </div>
    ); 
    }

}

export default Card;


