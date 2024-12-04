import './App.css'
import Welcome from './components/welcome'

function App() {
  return (
    <>
      <div>
        <Welcome name="John" age={30}/>
        <Welcome name="Jane" age={17}/>
        <Welcome name="John" age={70}/>
        <Welcome name="Mika" age={20}/>
        <Welcome name="John" age={16}/>
      </div>
    </>
  )
}

export default App
