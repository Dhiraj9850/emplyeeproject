import React from 'react'
import Header from './Components/Header'
import './App.css';
import Data from './Components/Data';

const App = () => {
  return (
    <>
      <div className="card">
         <Header />
         <Data/>
      </div>
    </>
  )
}

export default App