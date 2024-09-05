import React from 'react'

      
      const Ads = ({ image, title, description, price, rating, freeDelivery }) => {
  return (
    <>
      {/* <div className="max-w-sm rounded overflow-hidden shadow-lg border p-4 ">
      <img className="w-full h-48 object-cover mt-2" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-lg mb-2">{title}</div>
        <p className="text-gray-700 text-sm mb-2">{description}</p>
        <div className="text-xl font-semibold mb-2">₹{price}</div>
        <div className="flex items-center mb-2">
          <div className="text-yellow-500 mr-2">
            {rating.rate} ★
          </div>
          <span className="text-gray-600 text-sm">({rating.count} reviews)</span>
        </div>
        {freeDelivery && (
          <div className="text-green-500 font-bold">Free Delivery</div>
        )}
      </div>
    </div> */}

    <div className="card p-2 m-2 border-4" style={{width: '18rem'}}>
    {/* <div className="card"> */}
        <img src={image} className="card-img-top " alt="image"  height={'250px'} width={'250px'}/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            {/* <p className="card-text">{description}</p> */}
            <h5 className="price">₹{price} onwards</h5>
            {!freeDelivery && (
                <div className="text-green-500 font-bold">Free Delivery</div>
                )}
            <a href="#" class="btn btn-primary">{rating.rate} ★</a>
            <h5 className="rating">{rating.count} Reviews</h5>
        </div>
    </div>
    </>
  );
};
      
    

export default Ads
