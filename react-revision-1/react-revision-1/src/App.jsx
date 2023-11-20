
import './App.css'
import Card from './components/Card'
import CardDynami from './components/CardDynami'

function App() {

  return (
    <>
    <body>
      <Card />
      <ul>
        <CardDynami name="Karta 1" text="AHOJKY" link="https://legacy.reactjs.org/docs/components-and-props.html"/>
        <CardDynami name = "Karta 2" text = "SHCKSBCVDZVHDHK" link = "https://legacy.reactjs.org"/>
        <CardDynami name = "Karta 3" text = "CEWGFKJHFNDJ" link = "https://legacy.reactjs.org/docs/components-and-props.html"/>
        <CardDynami name = "Karta 4" text = "KOEWBFVCHGRJCOLS" link = "https://react.dev"/>
      </ul>
    </body>
      
    </>
  )
}

export default App
