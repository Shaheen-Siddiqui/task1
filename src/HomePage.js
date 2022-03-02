import React from 'react'
import FirstPage from './FirstPage'



import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link

 } from 'react-router-dom'

const HomePage = () => {
    return (<>
    {/* <Router> */}

        <div className='bodyi'>
            <h1 className='libratystyle'>COMPONENT LIBRARY </h1>
            <div className='button_desing'>
                
               <a href="first"><button className='btnn btn1'>firat component</button></a> 
               <a href="second"><button className='btnn btn2'>second component</button></a> 
            </div>
            <div className='button_desing'>

            <a href="third"><button className='btnn btn3'>third component</button></a> 
            {/* <a href="second"> <button className='btnn btn4'>forth component</button></a>  */}
            </div>
        </div>

        {/* <Routes>
            <Route path="first" element={<FirstPage/>} />
        </Routes> */}
    {/* </Router> */}








    </>)
}

export default HomePage
