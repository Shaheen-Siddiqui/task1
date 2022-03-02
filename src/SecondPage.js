import React, { useState } from 'react';
import SecComponent from './SecComponent';
import {RenderArray} from './SecArray';
import {drugArray} from './SecArray';
import DrugComponent from './DrugComponent'
import HeaderComponent from './HeaderComponent'

const SecondPage = () => {
let [state,setState]=useState(RenderArray)
let [drugItem,setDrugItem]=useState(drugArray)

  return (
    <>
    <HeaderComponent/>

      {/* USING HIGHER ORDER FUNCTION OVER THE ARRAY */}

{state.map((value,index)=>{
    return (<>
        <SecComponent
          id={index}
          first={value.firstImage}
          secImage={value.secImage}
          thirImage={value.thirImage}
          firstPera={value.firstPera}
          secPers={value.secPers}
          ThirdPera={value.ThirdPera}
          rupees={value.rupees}
          PeraOne={value.PeraOne}
          PeraTwo={value.PeraTwo}
          btnOne={value.btnOne}
          btnTwo={value.btnTwo}
        />
        </>)})}

<p className='MiddlePera'>top prodects :-</p>

      {/* USING HIGHER ORDER FUNCTION OVER THE DOWNSIDE COMPONENTS */}

      <div className="OuterStylinG">    
{
  drugItem.map((currentVal,index)=>{
    return <DrugComponent
      id={index}
      peragraphOne={currentVal.peragraphOne}
      capsulImg={currentVal.capsulImg}
      peracetamole={currentVal.peracetamole}
      capsuleNum={currentVal.capsuleNum}
      nameOfmedicine={currentVal.nameOfmedicine}
      buttonText={currentVal.buttonText}
    />

  })
}
</div>










    </>
  )
}

export default SecondPage
