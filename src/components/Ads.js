import React from 'react';
import { Link } from 'react-router-dom';

const Ads = ({ id, image, title, description, price, rating, freeDelivery }) => {
  return (
    <>
      <div className="row1 row">
        <div className="col1 col">
          <h3 className="heading1">COL1</h3>
        </div>

        <div className="col2 col flex flex-wrap gap-4 justify-center">
          <div className="card p-2 m-2 border-4 row2 row" style={{ width: '18rem' }}> 
            <div className="card"> 
              <img 
                src={image} 
                className="card-img-top w-48 h-48 object-cover rounded-lg border border-gray-300" 
                alt="image"  
                height={'250px'} 
                width={'250px'} 
              />
              <div className="card-body">
                <h5 className="card-title">{title}</h5> 
                {/* <p className="card-text">{description}</p> */}
                <h5 className="price">₹{price} onwards</h5>
                {!freeDelivery && (
                  <div className="text-green-500 font-bold">Free Delivery</div>
                )}
                <Link to={`/Products/${id}`} className="btn btn-primary">Buy Now</Link> 
                <Link href="#" className="btn btn-primary">{rating.rate} ★</Link> 
                {/* <h5 className="rating">{rating.count} Reviews</h5> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ads;

     



                    
                    {/* <div className="row2 row">
                        <div className="col21 col">
                            <h3>COL21</h3>
                        </div>
                        <div className="col22 col">
                            <h3>COL22</h3>
                        </div>
                        <div className="col23 col">
                            <h3>COL23</h3>
                        </div>
                        <div className="col24 col">
                            <h3>COL24</h3>
                        </div>
                    </div>

                    <div className="row3 row">
                        <div className="col31 col">
                            <h3>COL31</h3>
                        </div>
                        <div className="col32 col">
                            <h3>COL32</h3>
                        </div>
                        <div className="col33 col">
                            <h3>COL33</h3>
                        </div>
                        <div className="col34 col bg-green-500 border-10 border-black rounded-3xl">
                            <h3>COL34</h3>
                        </div>
                    </div>

                    <div className="row4 row">
                        <div className="col41 col">
                            <h3>COL41</h3>
                        </div>
                        <div className="col42 col">
                            <h3>COL42</h3>
                        </div>
                        <div className="col43 col">
                            <h3>COL43</h3>
                        </div>
                        <div className="col44 col bg-green-500 border-10 border-black rounded-3xl">
                            <h3>COL44</h3>
                        </div>
                    </div>

                    <div className="row5 row">
                        <div className="col51 col">
                            <h3>COL51</h3>
                        </div>
                        <div className="col52 col">
                            <h3>COL52</h3>
                        </div>
                        <div className="col53 col">
                            <h3>COL53</h3>
                        </div>
                        <div className="col54 col bg-green-500 border-10 border-black rounded-3xl">
                            <h3>COL54</h3>
                        </div>
                    </div> */}
              
    
    
    
    
    
    
    
   
   
  

      
    


