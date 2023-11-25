import {useState} from 'react';
import './App.css';
import data from './data';
import Tours from './components/Tours';

function App() {

  const [tours, setTours] = useState(data);

  function removeTour (id){
    const newTour = tours.filter(tour => tour.id !== id);
    setTours(newTour);
  }

  return (
    <div className="App">
      <Tours tours={tours} onRemoveTour={removeTour}></Tours>
    </div>
  );
}

export default App;
