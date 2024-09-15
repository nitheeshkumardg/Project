import React from 'react'
import { Link,Outlet } from 'react-router-dom'
import './Navbar.css'


function Navbar2() {
  return (
    <div>
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-wrap">
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown" to="#" id="dropdownMenuLink1" role="button" aria-expanded="false">
                Women Ethnic
              </Link>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink1">
                <li><Link className="dropdown-item" to="#">Sarees</Link></li>
                <li><Link className="dropdown-item" to="#">Kurtis</Link></li>
                <li><Link className="dropdown-item" to="#">Kurta Sets</Link></li>
                <li><Link className="dropdown-item" to="#">Suits & Dress Material</Link></li>
                <li><Link className="dropdown-item" to="#">Other Ethnic</Link></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <Link className="nav-link dropdown" to="#" id="dropdownMenuLink2" role="button" aria-expanded="false">
                Women Western
              </Link>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink2">
                <li><Link className="dropdown-item" to="#">Topwear</Link></li>
                <li><Link className="dropdown-item" to="#">Bottomwear</Link></li>
                <li><Link className="dropdown-item" to="#">Innerwear</Link></li>
                <li><Link className="dropdown-item" to="#">Sleepwear</Link></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <Link className="nav-link dropdown" to="#" id="dropdownMenuLink3" role="button" aria-expanded="false">
                Men
              </Link>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink3">
                <li><Link className="dropdown-item" to="#">Topwear</Link></li>
                <li><Link className="dropdown-item" to="#">Bottomwear</Link></li>
                <li><Link className="dropdown-item" to="#">Men Accessories</Link></li>
                <li><Link className="dropdown-item" to="#">Men Footwear</Link></li>
                <li><Link className="dropdown-item" to="#">Ethnic Wear</Link></li>
                <li><Link className="dropdown-item" to="#">Inner & Sleep Wear</Link></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <Link className="nav-link dropdown" to="#" id="dropdownMenuLink4" role="button" aria-expanded="false">
                Kids
              </Link>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink4">
                <li><Link className="dropdown-item" to="#">Boys & Girls 2+ Years</Link></li>
                <li><Link className="dropdown-item" to="#">Infant 0-2 Years</Link></li>
                <li><Link className="dropdown-item" to="#">Toys & Accessories</Link></li>
                <li><Link className="dropdown-item" to="#">Baby Care</Link></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <Link className="nav-link dropdown" to="#" id="dropdownMenuLink5" role="button" aria-expanded="false">
                Home & Kitchen
              </Link>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink5">
                <li><Link className="dropdown-item" to="#">Home Furnishing</Link></li>
                <li><Link className="dropdown-item" to="#">Home Decor</Link></li>
                <li><Link className="dropdown-item" to="#">Kitchen & Dining</Link></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <Link className="nav-link dropdown" to="#" id="dropdownMenuLink6" role="button" aria-expanded="false">
                Beauty & Health
              </Link>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink6">
                <li><Link className="dropdown-item" to="#">Makeup</Link></li>
                <li><Link className="dropdown-item" to="#">Wellness</Link></li>
                <li><Link className="dropdown-item" to="#">Skincare</Link></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <Link className="nav-link dropdown" to="#" id="dropdownMenuLink7" role="button" aria-expanded="false">
                Jewellery & Accessories
              </Link>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink7">
                <li><Link className="dropdown-item" to="#">Jewellery</Link></li>
                <li><Link className="dropdown-item" to="#">Women Accessories</Link></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <Link className="nav-link dropdown" to="#" id="dropdownMenuLink8" role="button" aria-expanded="false">
                Bags & Footwear
              </Link>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink8">
                <li><Link className="dropdown-item" to="#">Women Bags</Link></li>
                <li><Link className="dropdown-item" to="#">Men Bags</Link></li>
                <li><Link className="dropdown-item" to="#">Men Footwear</Link></li>
                <li><Link className="dropdown-item" to="#">Women Footwear</Link></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <Link className="nav-link dropdown" to="#" id="dropdownMenuLink9" role="button" aria-expanded="false">
                Electronics
              </Link>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink9">
                <li><Link className="dropdown-item" to="#">Mobile & Accessories</Link></li>
                <li><Link className="dropdown-item" to="#">Appliances</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <Outlet/>
    </nav>

</>
    </div>
  )
}

export default Navbar2
