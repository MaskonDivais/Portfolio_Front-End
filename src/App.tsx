import React from 'react'

import './style.css';
import Start from './Components/Start/Start';
import Play from './Components/Play/Play';
import Ander from './Components/Ander/Ander';

const App = () => {
  return (
    <div className='container'>
      <Start/>
      <Play/>
      <Ander/>
    </div>
  )
}

export default App