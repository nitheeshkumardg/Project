import React from 'react';
import { Link } from 'react-router-dom';

import Buynow from './Buynow';





function Ads  ({ id, image, title, description, price, rating, freeDelivery,product}) {
 console.log(product);
 
  return (

   <>
<div className="row1 row">
        <div className="col1 col">
          
        </div>

        <div className="col2 col flex flex-wrap gap-4">
          <div className="card p-2 m-2 border-4 row2 row" style={{ width: '18rem' }}> 
            <div className="card"> 
              <img 
                src={product.image} 
                className="card-img-top w-48 h-48 object-cover rounded-lg border border-gray-300" 
                alt="image"  
                height={'250px'} 
                width={'250px'} 
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5> 
                {/* <p className="card-text">{description}</p> */}
                <h5 className="price">₹{product.price} onwards</h5>
                {!freeDelivery && (
                  <div className="text-green-500 font-bold">Free Delivery</div>
                )}
                {/* <Link onClick={handleCurrentProduct} to = {{pathname:'/details/'}} className="btn btn-primary">Buy Now</Link>
                  */}
                  <Buynow product={product} />

                {/* <Link href="#" className="btn btn-primary">{rating.rate} ★</Link>  */}
                {/* <h5 className="rating">{rating.count} Reviews</h5> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
             
  )

}



  

     



                    
                 
              
  export default Ads;
    
    
    
    
    
    
   
   
  

      
    


