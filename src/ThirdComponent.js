import React from 'react'
import styl from './ThirdComponent.module.css'


const ThirdComponent = ({ id, leFtBoxImg, firstBoX, forstPera, secondp, redFont, rupees, totastab, butteXtt }) => {
    return (
        <>
            <div className="oOutermain_div">

                <div className="outerMain">
                    <div className={styl.firstRighty}>
                        <div className=""><img className={styl.forH_W} src={leFtBoxImg} alt="" /> </div>
                    </div>
                    <div className="bifimage_div">

                        <div className={styl.bifimage_img}>
                            <div className=""><p>{firstBoX} </p></div>
                            <div className=""><p>{forstPera} </p></div>
                            <div className="DrugCode"><p>{secondp} </p></div> <br />
                            <div><p className="DrugCody" style={{ color: "red" }}>{redFont} </p></div>

                        </div>
                    </div>

                    <div className="leftSide_div">
                        <p>{rupees} <img className='rupesLeft' src="https://cdn.pixabay.com/photo/2017/09/26/19/58/discount-2789868__480.png" alt="" /> </p>
                        <p>{totastab} </p>
                        <div className={styl.leftSideBtn}>
                            <button className=" btn btn-dark">{butteXtt} </button>
                            <button className=" btn btn-warning">Remove</button>
                        </div>

                    </div>

                </div>



            </div>
        </>
    )
}

export default ThirdComponent;












