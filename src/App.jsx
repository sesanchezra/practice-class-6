
import { useState } from 'react'
import './App.css'
import ButtonMode from './components/ButtonMode'
import Exercise1 from './components/Exercise1'

function App() {

  const [mode, setMode] = useState(true)

  const changeMode= () =>{
    setMode(!mode)
  }
  
  return (
    <div className={`App ${mode ? 'light-mode' : 'dark-mode'}`}>
      <Exercise1
        mode={mode}
      />
      <ButtonMode 
        mode={mode}
        changeMode={changeMode}
      />
    </div>
  )
}

export default App
