import React from 'react';
import { Link, Outlet } from 'react-router-dom';


function Navbar2() {
  return (
    <div>
      <nav className="bg-white shadow-md  relative">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden text-gray-600 focus:outline-none" 
              type="button" 
              aria-expanded="false" 
              aria-label="Toggle navigation"
            >
              <span className="block w-6 h-0.5 bg-gray-600 mb-1"></span>
              <span className="block w-6 h-0.5 bg-gray-600 mb-1"></span>
              <span className="block w-6 h-0.5 bg-gray-600"></span>
            </button>

            {/* Navbar Items */}
            <div className="hidden lg:flex justify-around w-full">
              <ul className="flex justify-around w-full">
                {/* Women Ethnic */}
                <li className="relative group">
                  <Link className="text-gray-600 hover:text-gray-900" to="#">
                    Women Ethnic
                  </Link>
                  <ul className="absolute left-0 hidden mt-2 p-4 space-y-2 bg-white shadow-lg group-hover:flex flex-col z-50">
                    <li><Link className="block px-4 py-2 text-gray-600 hover:bg-gray-100" to="#">Sarees</Link></li>
                    <li><Link className="block px-4 py-2 text-gray-600 hover:bg-gray-100" to="#">Kurtis</Link></li>
                    <li><Link className="block px-4 py-2 text-gray-600 hover:bg-gray-100" to="#">Kurta Sets</Link></li>
                    <li><Link className="block px-4 py-2 text-gray-600 hover:bg-gray-100" to="#">Suits & Dress Material</Link></li>
                    <li><Link className="block px-4 py-2 text-gray-600 hover:bg-gray-100" to="#">Other Ethnic</Link></li>
                  </ul>
                </li>

                {/* Women Western */}
                <li className="relative group">
                  <Link className="text-gray-600 hover:text-gray-900" to="#">
                    Women Western
                  </Link>
                  <ul className="absolute left-0 hidden mt-2 p-4 space-y-2 bg-white shadow-lg group-hover:flex flex-col z-50">
                    <li><Link className="block px-4 py-2 text-gray-600 hover:bg-gray-100" to="#">Topwear</Link></li>
                    <li><Link className="block px-4 py-2 text-gray-600 hover:bg-gray-100" to="#">Bottomwear</Link></li>
                    <li><Link className="block px-4 py-2 text-gray-600 hover:bg-gray-100" to="#">Innerwear</Link></li>
                    <li><Link className="block px-4 py-2 text-gray-600 hover:bg-gray-100" to="#">Sleepwear</Link></li>
                  </ul>
                </li>

                {/* Men */}
                <li className="relative group">
                  <Link className="text-gray-600 hover:text-gray-900" to="#">
                    Men
                  </Link>
                  <ul className="absolute left-0 hidden mt-2 p-4 space-y-2 bg-white shadow-lg group-hover:flex flex-col z-50">
                    <li><Link className="block px-4 py-2 text-gray-600 hover:bg-gray-100" to="#">Topwear</Link></li>
                    <li><Link className="block px-4 py-2 text-gray-600 hover:bg-gray-100" to="#">Bottomwear</Link></li>
                    <li><Link className="block px-4 py-2 text-gray-600 hover:bg-gray-100" to="#">Men Accessories</Link></li>
                    <li><Link className="block px-4 py-2 text-gray-600 hover:bg-gray-100" to="#">Men Footwear</Link></li>
                    <li><Link className="block px-4 py-2 text-gray-600 hover:bg-gray-100" to="#">Ethnic Wear</Link></li>
                    <li><Link className="block px-4 py-2 text-gray-600 hover:bg-gray-100" to="#">Inner & Sleep Wear</Link></li>
                  </ul>
                </li>

                {/* Kids */}
                <li className="relative group">
                  <Link className="text-gray-600 hover:text-gray-900" to="#">
                    Kids
                  </Link>
                  <ul className="absolute left-0 hidden mt-2 p-4 space-y-2 bg-white shadow-lg group-hover:flex flex-col z-50">
                    <li><Link className="block px-4 py-2 text-gray-600 hover:bg-gray-100" to="#">Boys & Girls 2+ Years</Link></li>
                    <li><Link className="block px-4 py-2 text-gray-600 hover:bg-gray-100" to="#">Infant 0-2 Years</Link></li>
                    <li><Link className="block px-4 py-2 text-gray-600 hover:bg-gray-100" to="#">Toys & Accessories</Link></li>
                    <li><Link className="block px-4 py-2 text-gray-600 hover:bg-gray-100" to="#">Baby Care</Link></li>
                  </ul>
                </li>

                {/* Home & Kitchen */}
                <li className="relative group">
                  <Link className="text-gray-600 hover:text-gray-900" to="#">
                    Home & Kitchen
                  </Link>
                  <ul className="absolute left-0 hidden mt-2 p-4 space-y-2 bg-white shadow-lg group-hover:flex flex-col z-50">
                    <li><Link className="block px-4 py-2 text-gray-600 hover:bg-gray-100" to="#">Home Furnishing</Link></li>
                    <li><Link className="block px-4 py-2 text-gray-600 hover:bg-gray-100" to="#">Home Decor</Link></li>
                    <li><Link className="block px-4 py-2 text-gray-600 hover:bg-gray-100" to="#">Kitchen & Dining</Link></li>
                  </ul>
                </li>

                {/* Beauty & Health */}
                <li className="relative group">
                  <Link className="text-gray-600 hover:text-gray-900" to="#">
                    Beauty & Health
                  </Link>
                  <ul className="absolute left-0 hidden mt-2 p-4 space-y-2 bg-white shadow-lg group-hover:flex flex-col z-50">
                    <li><Link className="block px-4 py-2 text-gray-600 hover:bg-gray-100" to="#">Makeup</Link></li>
                    <li><Link className="block px-4 py-2 text-gray-600 hover:bg-gray-100" to="#">Wellness</Link></li>
                    <li><Link className="block px-4 py-2 text-gray-600 hover:bg-gray-100" to="#">Skincare</Link></li>
                  </ul>
                </li>

                {/* Jewellery & Accessories */}
                <li className="relative group">
                  <Link className="text-gray-600 hover:text-gray-900" to="#">
                    Jewellery & Accessories
                  </Link>
                  <ul className="absolute left-0 hidden mt-2 p-4 space-y-2 bg-white shadow-lg group-hover:flex flex-col z-50">
                    <li><Link className="block px-4 py-2 text-gray-600 hover:bg-gray-100" to="#">Jewellery</Link></li>
                    <li><Link className="block px-4 py-2 text-gray-600 hover:bg-gray-100" to="#">Women Accessories</Link></li>
                  </ul>
                </li>

                {/* Bags & Footwear */}
                <li className="relative group">
                  <Link className="text-gray-600 hover:text-gray-900" to="#">
                    Bags & Footwear
                  </Link>
                  <ul className="absolute left-0 hidden mt-2 p-4 space-y-2 bg-white shadow-lg group-hover:flex flex-col z-50">
                    <li><Link className="block px-4 py-2 text-gray-600 hover:bg-gray-100" to="#">Women Bags</Link></li>
                    <li><Link className="block px-4 py-2 text-gray-600 hover:bg-gray-100" to="#">Men Bags</Link></li>
                    <li><Link className="block px-4 py-2 text-gray-600 hover:bg-gray-100" to="#">Men Footwear</Link></li>
                    <li><Link className="block px-4 py-2 text-gray-600 hover:bg-gray-100" to="#">Women Footwear</Link></li>
                  </ul>
                </li>

                {/* Electronics */}
                <li className="relative group">
                  <Link className="text-gray-600 hover:text-gray-900" to="#">
                    Electronics
                  </Link>
                  <ul className="absolute left-0 hidden mt-2 p-4 space-y-2 bg-white shadow-lg group-hover:flex flex-col z-50">
                    <li><Link className="block px-4 py-2 text-gray-600 hover:bg-gray-100" to="#">Mobile & Accessories</Link></li>
                    <li><Link className="block px-4 py-2 text-gray-600 hover:bg-gray-100" to="#">Consumer Electronics</Link></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default Navbar2;



