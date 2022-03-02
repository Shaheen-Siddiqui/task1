import React from 'react'

const DrugComponent = ({peragraphOne,capsulImg,peracetamole,capsuleNum,nameOfmedicine,buttonText,ButtonText}) => {
  return (
    <>
      <div className="drufOuterMain">
      <div className='Card'>
      <div className="codesNumver"><p>{peragraphOne}</p> </div>
      <div className=""><img className='forrH_W' src={capsulImg} alt="" /> </div>
        <div className="satInnerElem">
        <div className="">
            <p>{peracetamole}</p>
            <p>{capsuleNum}</p>
            <p className='greyEncap'>{nameOfmedicine}</p>
        </div>
        <div className="nineColor"><p>{buttonText} </p> </div>
        </div>
        <button className='btn btn-danger '>{ButtonText} Add to carg</button>
        </div>
      </div>

      {/* +++++++++++++++++++++++++++++++++++++++++++++++++ */}
     
    </>
  )
}

export default DrugComponent
