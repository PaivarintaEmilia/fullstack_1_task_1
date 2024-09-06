//Styles
import './App.css'
import "./../public/styles/main.css";
// Components
import HighlightApi from './components/HighlightApi';
import CanvasApi from './components/CanvasApi';
import LocationApi from './components/LocationApi';




function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <h1>FullStack 1 harjoitus</h1>
      <div className='api-container'>
        <h2>API 1 | Highlight text</h2>
        <HighlightApi></HighlightApi>
      </div>      
      <div className='api-container'>
        <h2>API 2 | Canvas</h2>
        <CanvasApi></CanvasApi>
 
      </div>      
      <div className='api-container'>
        <h2>API 3 | Location</h2>
        <LocationApi></LocationApi>
 
      </div>




    </>
  );
}

export default App
