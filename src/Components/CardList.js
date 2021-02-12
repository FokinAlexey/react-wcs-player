import Card from './Card';
import data from './data';
import React from 'react';


class CardList extends React.Component {
    // constructor() {
    //     super();}
    // console.log(data);
    render() {
        return (
            <div className='cardList'>
                {data.map((el, index) =>
                    <Card
                        {...el}
                        key={index}

                    />

                )}

            </div>
        )
    }
}

export default CardList;


// {data.map((el, index) => (
//                 <Card {...el}
//                     key={index}

//                 />
//             ))};