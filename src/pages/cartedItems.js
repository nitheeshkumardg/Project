import React, { useState, useEffect } from 'react';
import Navbar1 from '../components/Navbar1';
import Navbar2 from '../components/Navbar2';
import { Link } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Swal from 'sweetalert2';

function CartDetails() {
  const [cartItems, setCartItems] = useState([]);
  const [cartCounter, setCartCounter] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [extraCost, setExtraCost] = useState(50); // Example extra cost
  const [taxes, setTaxes] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);

  useEffect(() => {
    // Fetch data from localStorage
    const storedCart = localStorage.getItem('cartState');
    
    if (storedCart) {
      const parsedCart = JSON.parse(storedCart);
      setCartItems(parsedCart.cartItems || []);
      setCartCounter(parsedCart.cartCounter || 0);
      setTotalPrice(parsedCart.totalPrice || 0);
      setTaxes(parsedCart.taxes || 0);
      setGrandTotal(parsedCart.grandTotal || 0);
    }
  }, []);

  const removefromCart = (product) => {
    const updatedCartItems = cartItems.filter(item => item.product.id !== product.id);
    const updatedCartCounter = cartCounter - product.quantity;
    const updatedTotalPrice = totalPrice - (product.product.price * product.quantity);
    
    setCartItems(updatedCartItems);
    setCartCounter(updatedCartCounter);
    setTotalPrice(updatedTotalPrice);
    setTaxes(updatedTotalPrice * 0.18); // Calculate taxes
    setGrandTotal(updatedTotalPrice + extraCost + (updatedTotalPrice * 0.18));

    // Update localStorage
    localStorage.setItem('cartState', JSON.stringify({
      cartItems: updatedCartItems,
      cartCounter: updatedCartCounter,
      totalPrice: updatedTotalPrice,
      taxes: updatedTotalPrice * 0.18,
      grandTotal: updatedTotalPrice + extraCost + (updatedTotalPrice * 0.18)
    }));

    Swal.fire({
      title: "Item Removed",
      text: "The item has been removed from your cart!",
      icon: "success"
    });
  };

  return (
    <>
      <Navbar1 />
      <Navbar2 />
      
      <div className='container bg-white mt-5'>
        {cartItems.length ? 
          <div className='row mt-5'>
            <h3 className='border-bottom py-2 mb-3 mt-5'>Shopping Cart</h3>
            <div className="col-md-8 shadow">
              <div className="row border-bottom py-3">
                <div className='col-md-9'> Item </div>
                <div className='col-md-1'> Cost </div>
                <div className='col-md-1'> Qty </div>
                <div className='col-md-1'> Total </div>
              </div>
              <div className="container border-right">
                {cartItems.map(item => (
                  <div className="row borderp-2 py-4" key={item.product.id}>
                    <div className='col-md-9 d-flex'>
                      <img src={item.product.image} alt={item.product.title} style={{width:"40px", height:"40px"}}/>
                      <h6 className='ps-3'>{item.product.title}</h6>
                    </div>
                    <div className='col-md-1'>
                      <p className='text-end'>{item.product.price}</p>
                    </div>
                    <div className='col-md-1'>
                      <p className='text-end'>{item.quantity}</p>
                    </div>
                    <div className='col-md-1'>
                      <p className='text-end'>{item.total_item_price.toFixed(2)}</p>
                    </div>
                    <button onClick={() => removefromCart(item)}>Remove</button>
                  </div>
                ))}
                <hr></hr>
                <div className="row mb-2 py-3 pe-3">
                  <div className='offset-md-9 col-md-1'>
                    <h5 className='text-end'>Total</h5>
                  </div>
                  <div className='col-md-1'>
                    <h5 className='text-end'>{cartCounter}</h5>
                  </div>
                  <div className='col-md-1'>
                    <h5 className='text-center'>{totalPrice.toFixed(2)}</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='shadow p-2 mx-2 pb-5'>
                <div className='d-flex justify-content-between px-2'>
                  <p> Sub Total </p> <p>{totalPrice.toFixed(2)}</p>
                </div>
                <div className='d-flex justify-content-between px-2'>
                  <p> Delivery Charges </p> <p> {extraCost.toFixed(2)} </p>
                </div>
                <div className='d-flex justify-content-between px-2'>
                  <p> Tax </p> <p> {taxes.toFixed(2)} </p>
                </div>
                <div className='d-flex justify-content-between px-2'>
                  <p> Total </p> <p>  {grandTotal.toFixed(2)}</p>
                </div>
                <Link className='float-end btn btn-success' to='/payment'> Proceed to Payment</Link>
              </div>
            </div>
          </div>
          :
          <h1 className='text-center mt-5 pt-5'>No Items in your Cart</h1>
        }
      </div>
    </>
  );
}

export default CartDetails;















        
        {/* {cartItems.length?
        <div className='row mt-5'>
            <h3 className='border-bottom py-2 mb-3 mt-5'>Shopping Cart</h3>
            <div className='col-md-8 shadow'>
                <div className='row border-bottom py-3'>
                    <div className='col-md-9'>Item</div>
                    <div className='col-md-1'>Cost</div>
                    <div className='col-md-1'>Quantity</div>
                    <div className='col-md-1'>Total</div>

                </div>
                <div className='container border-right'>
                    {cartItems.map(item=>(
                        <div className='row borderp-2 py-4' key={item.id}>
                            <div className='col-md-9 d-flex'>
                                <img src={item.image} alt={item.title} style={{width:"40px",height:"40px"}}/>
                                <h6 className='ps-3'>{item.title}</h6>
                            </div>
                            <div className='col-md-1'>
                                <p className='text-end'>{item.price}</p>
                            </div>
                            <div className='col-md-1'>
                                <p className='text-end'>{item.quantity}</p>
                            </div>
                            <div className='col-md-1'>
                                <p className='text-end'>{item.total_item_price.toFixed(2)}</p>
                            </div>
                        </div>
                    ))}
                    <hr></hr>
                    <div className='row mb-2 py-3 pe-3'>
                        <div className='offset-md-9 col-md-1'>
                            <h5 className='text-end'>Total</h5>
                      </div>
                      <div className='col-md-1'>
                        <h5 className='text-end'>{cartCounter}</h5>
                      </div>
                      <div className='col-md-1'>
                        <h5 className='text-center'>{totalPrice.toFixed(2)}</h5>
                      </div>
                    </div>
                </div>

            </div>
            <div className='col-md-4'>
                <div className='shadow p-2 mx-2 pb-5'>
                    <div className='d-flex justify-content-between px-2'>
                        <p>Sub Total</p><p>{totalPrice.toFixed(2)}</p>
                    </div>
                    <div className='d-flex justify-content-between px-2'>
                        <p>Extra Cost</p><p>{extraCost.toFixed(2)}</p>
                    </div>
                    <div className='d-flex justify-content-between px-2'>
                        <p>Tax</p><p>{taxes.toFixed(2)}</p>
                    </div>
                    <div className='d-flex justify-content-between px-2'>
                        <p>Total</p><p>{grandTotal.toFixed(2)}</p>
                    </div>
                    <Link className='float-end btn-btn-success' to='/payment'>Proceed To Payment</Link>

                </div>
            </div>
            </div>
            :
            <h1 className='text-center mt-5 pt-5'>No Items In Your Cart</h1>
           
                }
    </div>
    </>
  )
} */}


