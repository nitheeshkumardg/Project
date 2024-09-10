import React from 'react'
import Logo1 from '../assests/Logo1.png'
import Logo2 from '../assests/Logo2.png'
import Logo3 from '../assests/Logo3.png'
import Logo4 from '../assests/Logo4.png'
import Logo5 from '../assests/Logo5.png'



function Carousal() {
  // const slides = [
  //   {
  //     image: 'https://images.meesho.com/images/marketing/1722839152228_512.webp',
  //     link: 'https://play.google.com/store/apps/details?id=com.meesho.supply',
  //   }]








  return (
    <>
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={Logo1} className="d-block w-100" alt="IMG 1"/>
    </div>
   
  </div>
</div>

{/* 
<div className='flex-container'>
  <div>
    <h2>Lowest Prices
    Best Quality Shopping</h2>

  </div>
  <div>
  <img
        src="https://images.meesho.com/images/marketing/1722839152228_512.webp"
        alt="App Banner"/>

  </div>
</div> */}

{/* <div className="relative text-center"> */}
      {/* Main background image */}
      {/* <img
        src="https://images.meesho.com/images/marketing/1722839152228_512.webp"
        alt="App Banner"
        className="w-full"
      /> */}

      {/* Overlay content */}
      {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 p-5 rounded-lg">
        <h2 className="text-white text-xl mb-4">Get the Meesho App Now!</h2> */}
        
        {/* Google Play Store button */}
        {/* <a
          href="https://play.google.com/store/apps"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mr-4"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Download on Google Play"
            className="w-36"
          />
        </a> */}

        {/* App Store button */}
        {/* <a
          href="https://www.apple.com/app-store/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_badge_EN.svg"
            alt="Download on App Store"
            className="w-36"
          />
        </a>
      </div>
    </div> */}
  














<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '25vh' }}>
    <h2>----------------Top Categories to choose from-----------------------</h2>
</div>

<div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div  className="carousel-item active">
      <img src={Logo2} className="d-block w-100" alt="IMG 2" style={{maxWidth: '80%', height: 'auto',  marginLeft: '10%', marginRight: '10%' }}/>
    </div>
    </div>
  </div>


  <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div  className="carousel-item active">
      <img src={Logo3} className="d-block w-100 mt-4" alt="IMG 3" style={{maxWidth: '80%', height: 'auto',  marginLeft: '10%', marginRight: '10%' }}/>
    </div> 
  </div>
</div>



<div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div  className="carousel-item active">
      <img src={Logo4} className="d-block w-100 mt-4" alt="IMG 3" style={{maxWidth: '80%', height: 'auto',  marginLeft: '10%', marginRight: '10%' }}/>
    </div> 
  </div>
</div>


<div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div  className="carousel-item active">
      <img src={Logo5} className="d-block w-100 mt-4" alt="IMG 3" style={{maxWidth: '80%', height: 'auto',  marginLeft: '10%', marginRight: '10%' }}/>
    </div> 
  </div>
</div>


</>
  )
}

export default Carousal





