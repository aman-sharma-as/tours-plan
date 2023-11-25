import './Tours.css';
import Card from './Card';

function Tours({tours, onRemoveTour}){
    
    return(
        <div className="tours-wrapper">
            <h1>Tour Plans</h1>
            <div className="cards">
                {
                    tours.map(
                        (tour) => {
                            return <Card {...tour} onRemoveTour={onRemoveTour}></Card>;
                        }
                    )
                }
            </div>
        </div>
    );
}

export default Tours;