import './App.css'
import { useState } from 'react'

function App() {
  type N = number
  const [number, setNumber] = useState<N>(0)
  const addOne = (prev: N) => prev + 1
  return (
    <>
      <h1>카운터</h1>
      <h2>{number}</h2>
      <button onClick={() => {
        setNumber(addOne)
      }}>증가</button>
    </>
  )
}

export default App
