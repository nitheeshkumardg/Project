import React from 'react'
import Logo1 from '../assests/Logo1.png'
import Logo2 from '../assests/Logo2.png'
import Logo3 from '../assests/Logo3.png'
import Logo4 from '../assests/Logo4.png'
import Logo5 from '../assests/Logo5.png'
import { FaGooglePlay } from 'react-icons/fa'


function Carousal() {
  const slides = [
    {
      image: 'https://images.meesho.com/images/marketing/1722839152228_512.webp',
      link: 'https://play.google.com/store/apps/details?id=com.meesho.supply',
    }]








  return (
    <>
    {/* <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={Logo1} className="d-block w-100" alt="IMG 1"/>
    </div>
   
  </div>
</div> */}




<div >
<div className="relative w-full max-w-4xl mx-auto">
      <div className="carousel">
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto rounded-lg"
            />
            {/* Conditionally render the button only on the first slide */}
            {index === 0 && (
              <a
                href={slide.link}
                className="absolute bottom-4 left-4 flex items-center bg-white bg-opacity-75 text-blue-500 py-2 px-4 rounded hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                <FaGooglePlay className="mr-2" />
                Download the Meesho App
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
 

</div>














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
