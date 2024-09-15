import React from 'react'
import Navbar1 from '../components/Navbar1'
import Navbar2 from '../components/Navbar2'
import Footer1 from '../components/Footer1'
import Carousal from '../components/Carousal'

import {useEffect,useState} from 'react';
import Ads from '../components/Ads'

import Products from '../components/Products'
import '../assests/Productsitem.json'
import productData from '../assests/Productsitem.json'

// import productData from '../assests/Productsitem'












function Home() {
  const [product, setProduct] = useState([]);

  // useEffect(() => {
  //   fetch('../assests/Productsitem') 
  //     .then((response) => response.json())
  //     .then((data) => setProduct(data))
  //     .catch((error) => console.error('Error fetching data:', error));
  // }, []);


  useEffect(() => {
  
    
    setProduct(productData);
  }, []);

  console.log('////////////:',productData);
  
 





  return (
    <div >
    
      <Navbar1/>
      

    
     
        
      
     
      <Navbar2/>
      <Carousal/>

   
    
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
    <div className='row'>
      
      {product.map((product) => (
        <Ads
          key={product.id} product={product}
          
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
