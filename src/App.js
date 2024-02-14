import './App.css';
import Accordian from "./components/accordian/accordian.component.jsx"
import StarRating from './components/star-rating/starRating.component.jsx';
import ImageSlider from './components/image-slider/ImageSlider.component.jsx';

function App() {
  return (
    <div className="App">
      {/* <Accordian /> */}
      {/* <StarRating numOfStars={14}/> */}
      <ImageSlider url={"https://picsum.photos/v2/list"} page={'1'} limit={'4'} />
    </div>
  );
}

export default App;
