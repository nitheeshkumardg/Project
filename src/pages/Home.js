import React from 'react'
import Navbar1 from '../components/Navbar1'
import Navbar2 from '../components/Navbar2'
import Footer1 from '../components/Footer1'
import Carousal from '../components/Carousal'

import {useEffect,useState} from 'react';
import Ads from '../components/Ads'
import Login from '../components/Login'



function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products') 
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
  
 





  return (
    <div >
      <div>
      <Navbar1/>
      {/* <Login/> */}

      </div>
     
        
      
     
      <Navbar2/>
      <Carousal/>

      <div>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
    <div className='row'>
      
      {data.map((item) => (
        <Ads
          key={item.id}
          image={item.image}
          title={item.title}
          description={item.description}
          price={item.price}
          rating={item.rating}
          freeDelivery={item.freeDelivery}
        />
      ))}
  
    </div>
 
  </div>
  </div>
    



      {/* <Footer1/> */}
      
    </div>
  )
}

export default Home
