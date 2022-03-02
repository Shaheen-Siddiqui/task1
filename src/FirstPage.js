import React from 'react'

const FirstPage = () => {
  return (
    <div className='bodyy'>
      <header className='blueHeader'>

          <div className='main_outer_div'>
<div><i class="fa fa-navicon" style={{fontSize:"28px"}}></i></div>
<div> Banglore
</div>
<div><i class="fa fa-shopping-basket" style={{fontSize:"36px;"}}></i></div>
          </div>
    </header>
<div className='image_div'>
    <img className='image1' src="https://www.logolynx.com/images/logolynx/60/60809484bd764b5e644d19399dd20cb1.jpeg" alt="" />
</div>

<div className='input_div'>
<div className='innreinput_style'>
<i class="fa fa-search" style={{fontSize:"36px"}}></i>
<input className='inputDes' name="search" type="search" placeholder='Search Jain Aushadhi' type="text" name="" id="" />
</div>
<div className="innreinput_style">
<i class="fa fa-refresh" style={{fontSize:"36px"}}></i>
<input className='inputDes' name="search" type="search" placeholder='Canvert Branded Medicine' type="text" name="" id="" />
</div>
</div>
<img className='secImg' src="https://annaistores.com/as_content/uploads/2020/05/Carsoule-Banner-02.png" alt="" />

<div className="Adtocar_div">
  <div className="innerCartDiv secClass">
    <p>Vitamin B-complex +</p>
    <p>Vitamin-c + Zinc| 10</p>
    <p>Tablets</p>
    <p>Rs 8.08</p><br />
    <button className='btn btn-danger cardAnother'>AAD TO CART </button>

  </div>
  <div className="innerCartDiv">
  <p className='Glucometer_pera'> Glucometer Digital</p>
  <p className='rupees_pera'>Rs 525.0</p>
  <button className='btn btn-danger cardAnothersec'>ADD TO CART</button>
  </div>
</div>

<footer className='foooter'>

  <div className="prescaption_div">
<i class="fa fa-file-word-o" style={{fontSize:"36px"}}></i>
  upload prescaption 
   </div>
</footer>
    </div>
  )
}

export default FirstPage
