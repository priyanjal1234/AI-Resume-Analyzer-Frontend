import React from 'react'
import { Routes,Route } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import ResumeFeedback from './pages/ResumeFeedback';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element = {<LandingPage />}/>
        <Route path='/feedback' element = {<ResumeFeedback />
      }/>
      </Routes>
    </div>
  )
}

export default App