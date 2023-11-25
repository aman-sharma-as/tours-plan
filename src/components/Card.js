import {useState} from 'react';
import './Card.css';

function Card({id, name, info, image, price, onRemoveTour}){
    const [readMore, setReadMore] = useState(false);
    const description = readMore ? info : `${info.substring(0,200)}....`;

    const toogleReadMoreHandler = () =>{
        setReadMore(!readMore);
    }

    return(
        <div className="card">
            <img src={image} alt={name}></img>
            <div className="tour-info">
                <div className="tour-detail">
                    <div className='price'>₹{price}</div>
                    <h2>{name}</h2>
                </div>
                <div className="tour-description">
                    {description}
                    <span onClick={toogleReadMoreHandler}>{readMore ? 'Show less' : 'Read More'}</span>
                </div>
            </div>
            <button className="notInterested" onClick={()=> onRemoveTour(id)}>Not Interested</button>
        </div>
    );
}

export default Card;