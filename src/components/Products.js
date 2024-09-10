// import React from 'react'
// import { useParams } from 'react-router-dom';
// import {useEffect,useState} from 'react';


// function Products() {
  
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch('/Productsitem.json') 
//       .then((response) => response.json())
//       .then((data) =>setData(data))
//       .catch((error) => console.error('Error fetching data:', error));
//   }, []);

//   const { id } = useParams();
//   console.log('ID from URL:', id)
//   const product = data.find(p => p.id === id);


//   console.log('ID from URL:', id);
//   console.log('Parsed ID:', parseInt(id));
//   console.log('Found Product:', product);

//   if (!product) {
//     return <h2>Product not found</h2>;
//   }
//   return (
//     <div>
//       <h1>{product.name}</h1>
//       <img src={product.image} alt={product.name} />
//       <p>{product.description}</p>
//       <button>Add to Cart</button>
//       <button>Buy Now</button>
//     </div>
//   )
// }

// export default Products

import React from 'react';
import { useParams } from 'react-router-dom';
import Productsitem from '../assests/Productsitem.json'

function Products() {
  const { productId } = useParams(); // Get the product ID from the URL
  const product = Productsitem.find((p) => p.id === parseInt(productId));

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div className="max-w-xl mx-auto p-4">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-96 object-cover rounded-lg mb-4"
      />
      <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
      <p className="text-lg mb-2">Price: ₹{product.price} onwards</p>
      {product.freeDelivery && (
        <div className="text-green-500 font-bold mb-2">Free Delivery</div>
      )}
      <div className="flex space-x-4">
        <button className="btn btn-primary">Add to Cart</button>
        <button className="btn btn-primary">Buy Now</button>
      </div>
    </div>
  );
}

export default Products;
