import { useState } from 'react'
import './App.css'


// MERKKAA KOLME ERI TAPAA MITEN SAA LAITETTUA PROPSIT

/* props
interface CardProps {
  text: string
  title: string
} */

// muuttaa js objektin const muotoon eli ei voi enää muokata, as const pois niin sitten voi taas muokata
/*const template = {
  text: "ei tekstiä",
  title: "ei titleä"
} as const*/



// interfacelle vaihtoehto
type CardProps = { text : string, title: string }

//type CardProps = typeof template


function Card({ text, title }: CardProps) {
  // Tilanhallinta ja muut logiikat voivat olla täällä
  return (
    <div style={{ 
      backgroundColor: 'coral',
      color: 'white',
      marginBottom: '10px',
      height: '200px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      borderRadius: '10px',
    }}>
      <h1>{title}</h1>
      {text}
    </div>
  );

  // returnin jälkeinen divi on jmx elementti
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>FullStack 1 harjoitus</h1>
      <Card text={"Hewooo"} title={'ei titleä'}></Card>
      <Card text={'ei tekstiä'} title={'ei titleä'} ></Card>
      <Card text="Hewooo" title={'Juhuuu'}></Card>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      

    </>
  )
}

export default App
