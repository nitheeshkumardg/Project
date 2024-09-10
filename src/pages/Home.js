import React from 'react'
import Navbar1 from '../components/Navbar1'
import Navbar2 from '../components/Navbar2'
import Footer1 from '../components/Footer1'
import Carousal from '../components/Carousal'

import {useEffect,useState} from 'react';
import Ads from '../components/Ads'

import Products from '../components/Products'





const product = {
  name: 'Stylish Kurti',
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
};




function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('Productsitem.json') 
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
  
 





  return (
    <div >
    
      <Navbar1/>
      

    
     
        
      
     
      <Navbar2/>
      <Carousal/>

   
    
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
    
  {/* <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Products data={data} />
    </div> */}





      {/* <Footer1/> */}
      
    </div>
  )
}

export default Home
