import React, { useState } from 'react'
import {MycardArray} from './SecArray'
import HeaderComponent from './HeaderComponent';
import ThirdComponent from './ThirdComponent'


const GroupThirdCom = () => {
let [setArray]=useState(MycardArray)

const carddesing={
    color:'brown',
    textAlign: "center",
  fontFamily: 'sarif',
  fontWidth:'bold',
  fontSize:'3rem',
  marginTop:'3rem'

}
    return ( <>
      <HeaderComponent/>
      <h1 style={carddesing}>MY CART</h1>
      <p className='ItempeRa'>* Items Requiring Prescription (6)</p>



    {
        setArray.map((value,index)=>{
            return(
                <ThirdComponent
                    id={index}
                    leFtBoxImg={value.leFtBoxImg}
                    firstBoX={value.firstBoX}
                    forstPera={value.forstPera}
                    secondp={value.secondp}
                    redFont={value.redFont}
                    rupees={value.rupees}
                    totastab={value.totastab}
                    butteXtt={value.butteXtt}
                />

            )
        })
    }
    <div className="PriseDetaile">
    <h1 className='headingg'>PRICE DETAILS</h1>
    <div className="settingData">
    <div className='leftSideData'>
        <p>Item Total (MRP) :                  </p>
        <p>Delivery Charges :                  </p>
        <p>Total Payable :                      </p>
    </div>
    <div className="">
        <p>₹ 20,000</p>
        <p>FREE</p>
        <p>₹ 15000</p>
    </div>
    </div>
    <h2 className='totalText'>Your Total Saving on this order Rs. 5000</h2>
    </div>



    </>
  )
}

export default GroupThirdCom
;