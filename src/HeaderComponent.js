import React from 'react'

const HeaderComponent = () => {
  return (
    <div>
      
      <header className='Header_Head'>  
      <div className='innreinput_style'>
      <input name="search" type="search" className='inputDes' placeholder='| Search Jain Aushadhi' type="text" />
      <i className="fa fa-search" style={{fontSize:"36px"}}></i>
        </div>
      </header>
    </div>
  )
}

export default HeaderComponent
