import logo from './logo.svg';
import './App.css';
import Carousel from './components/Carousel';

import sliders from './data/courselData.json';
import AutoRotatingCarousel from './components/autorotate';
function App() {
  return (
    <div className="App">
      <Carousel data = {sliders}/>
      <h1 style={{textAlign: 'center', margin: 40+'px'}}>AutoRoute Carousel</h1>
      <AutoRotatingCarousel />
    </div>
  );
}

export default App;
