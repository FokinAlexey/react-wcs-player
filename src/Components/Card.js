import '../main.css';

const Card = (props) => {
    return (
        <div className='card'>
            <img src={props.imgUrl} alt='image' />
            <div>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>

        </div>
    );
}

export default Card;


