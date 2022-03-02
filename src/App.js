import React from 'react'
import FirstPage from './FirstPage'
import SecondPage from './SecondPage'
import GroupThirdCom from './GroupThirdCom'
import HomePage from './HomePage'

import {
    BrowserRouter as Router,
    Routes,
    Route,

 } from 'react-router-dom'

const App = () => {
  return (
    <div>

      <Router>
      <Routes>
            <Route path="/" element={<HomePage/>} />
        </Routes>

        <Routes>
            <Route path="first" element={<FirstPage/> } />
        </Routes>

        <Routes>
            <Route path="second" element={<SecondPage/>} />
        </Routes>

        <Routes>
            <Route path="third" element={<GroupThirdCom/>} />
        </Routes>
    </Router>
    </div>
  )
}

export default App;




