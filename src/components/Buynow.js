import React from 'react'
import setCurrentProduct from '../actions/setCurrentProduct'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

function Buynow({product}) {
    let dispatch=useDispatch() 
    let handleCurrentProduct=()=>{
        dispatch(setCurrentProduct(product))
     }
     console.log('=============++++:',product);
      
  return (
    <div>
      
     <Link to={{pathname:'/details/'}} onClick={handleCurrentProduct}  className="btn btn-primary bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">Buy Now</Link>
                 
    </div>
    
  )
}

export default Buynow
