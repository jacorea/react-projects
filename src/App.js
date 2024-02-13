import './App.css';
import Accordian from "./components/accordian/accordian.component.jsx"
import StarRating from './components/star-rating/starRating.component.jsx';

function App() {
  return (
    <div className="App">
      {/* <Accordian /> */}
      <StarRating numOfStars={14}/>
    </div>
  );
}

export default App;
