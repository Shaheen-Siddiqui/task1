import React from 'react'

const SecComponent = ({
  first,secImage,thirImage,firstPera,secPers,
  ThirdPera,rupees,PeraOne,PeraTwo,btnOne,btnTwo}) => {
  return (
    <>

      <div className="outerMain">
      <div className="firstRight">
          <div className=""><img className='forH_W'  src={first} alt="" /> </div>
          <div className=""><img className='forH_W' src={secImage} alt="" /> </div>
      </div>
      <div className="bifimage_div">
      <img className='bifimage_img' src={thirImage} alt="" />

        <div className="innePeras">
           <div className=""><p>{firstPera} </p></div>
           <div className=""><p>{secPers} </p></div>
           <div className="DrugCode"><p>{ThirdPera} </p></div> 
        </div>
        </div>

<div className="leftSide_div">
    <p>{rupees} <img className='rupesLeft' src="https://cdn.pixabay.com/photo/2017/09/26/19/58/discount-2789868__480.png" alt="" /> </p>
    <p>{PeraOne} </p>
    <p  className='stokPera'>{PeraTwo} </p>
    <div className="leftSideBtn">   
    <button className="btn btn-danger">{btnOne} </button>
    <button className="btn btn-warning">{btnTwo} </button>
    </div>
 
</div>

      </div>
    </>
  )
}

export default SecComponent;
