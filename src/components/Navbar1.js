import React from 'react'
import { Link,Outlet } from 'react-router-dom'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import IconButton from '@mui/material/IconButton';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import { useSelector } from 'react-redux';
import './Navbar.css'



function Navbar1() {
  const cartCounter=useSelector(state=>state.cart.cartCounter)
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      {/* Logo Section */}
      <Link className="navbar-brand" href="#">
        <img src="https://www.meesho.com/assets/svgicons/meeshoLogo.svg" alt="Display" width="100px" height="100px" />
      </Link>
  
      {/* Toggler Button for small screens */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
  
      {/* Collapsible Navbar Content */}
      <div className="collapse navbar-collapse" id="navbarNav">
        {/* Search Bar (Responsive alignment) */}
        <form className="d-flex flex-grow-1 mx-2 my-2 my-lg-0">
          <input
            className="form-control"
            type="search"
            placeholder="Try Saree, Kurti or Search by Product Code"
            aria-label="Search"
          />
        </form>
  
        {/* Navigation Links (Responsive alignment) */}
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
          {/* Download App Dropdown */}
          <li className="nav-item me-3 nav-item-with-line">
            <div className="dropdown">
              <Link
                className="bg-white px-3 py-2 "
                style={{ color: 'black', textDecoration: 'none' }}
                href="#"
                id="dropdownMenuLink"
                aria-expanded="false"
              >
                Download App
              </Link>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li>
                  <Link className="dropdown-item" href="https://play.google.com/store/apps/details?id=com.meesho.supply">
                    For Android
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="https://apps.apple.com/in/app/meesho/id1457958492">
                    For IOS
                  </Link>
                </li>
              </ul>
            </div>
          </li>
  
          {/* Become a Supplier */}
          <li className="nav-item me-3 nav-item-with-line">
            <Link className="nav-link active" aria-current="page" href="#">
              Become a Supplier
            </Link>
          </li>
  
          {/* News Room */}
          <li className="nav-item me-3 nav-item-with-line">
            <Link className="nav-link active" aria-current="page" href="https://www.meesho.io/news">
              News Room
            </Link>
          </li>
  
          {/* Profile */}
          <li className="nav-item d-flex align-items-center me-3">
            <IconButton color="primary" aria-label="profile">
              <Person2OutlinedIcon />
            </IconButton>
            <Link className="nav-link active" aria-current="page" to="/Login">
              Profile
            </Link>
          </li>
  
          {/* Cart */}
          <li className="nav-item d-flex align-items-center">
            <IconButton color="primary" aria-label="add to shopping cart">
              <AddShoppingCartIcon />
            </IconButton>
            <Link className="nav-link active" aria-current="page" to="/cart">
              Cart ({cartCounter})
            </Link>
          </li>
        </ul>
      </div>
    </div>
    <Outlet />
  </nav>
</>
      
    
  )
}

export default Navbar1
