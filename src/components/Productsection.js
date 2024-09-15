import React from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useDispatch } from 'react-redux';
import { addtoCart } from '../actions/cartActions';
import { Link } from 'react-router-dom';

function Productsection(product) {
  const dispatch=useDispatch()
const handleCart=()=>{
    dispatch(addtoCart(product))
    alert('Added to Cart')
    
}


  return (
   <>
      <Link component="button" variant="outlined" startIcon={<AddShoppingCartIcon />} onClick={handleCart} className='btn-btn-primary' >
        Add to Cart
      </Link>
      <Link variant="contained" endIcon={<ArrowForwardIosIcon />} to='/cart' className='btn-btn-primary'>
        Buy Now
      </Link>
      </>
  )
}

export default Productsection
