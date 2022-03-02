import React from 'react'
import FirstPage from './FirstPage'

const HomePage = () => {
    return (<>

        <div className='bodyi'>
            <h1 className='libratystyle'>COMPONENT LIBRARY </h1>
            <div className='button_desing'>
                
               <a href="first"><button className='btnn btn1'>firat component</button></a> 
               <a href="second"><button className='btnn btn2'>second component</button></a> 
            </div>
            <div className='button_desing'>

            <a href="third"><button className='btnn btn3'>third component</button></a> 
            </div>
        </div>

    </>)
}

export default HomePage
