import './App.css'
import HighlightApi from './components/HighlightApi';
import "./../public/styles/main.css";



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
        <h2>API 2 | </h2>
 
      </div>




    </>
  );
}

export default App
