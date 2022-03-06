import React from 'react'

const HeaderComponent = () => {
  return (
    <div>
      <header className='Header_Head'>  
      <div className='innreinput_style'>
      <label  for="inputDes" className='input_lable lable1'>
      <i className="fa fa-search icon_s" style={{fontSize:"36px"}}></i>
      <input name="search" type="search" className='inputDes' placeholder=' Search Jain Aushadhi' />
      </label>
    
        </div>
      </header>
   
    </div>
  )
}

export default HeaderComponent;
