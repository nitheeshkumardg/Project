import React from 'react'
import { Link,Outlet } from 'react-router-dom'

function Navbar2() {
  return (
    <div>
        <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <div className="dropdown">
  <Link className="bg-white px-4 py-2 rounded border border-gray-300 hover:bg-gray-200" style={{ color: 'black', textDecoration: 'none' }}  href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
  Women Ethnic </Link>
    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><Link className="dropdown-item" href="#">Sarees</Link></li>
    <li><Link className="dropdown-item" href="#">Kurtis</Link></li>
    <li><Link className="dropdown-item" href="#">Kurta Sets</Link></li>
    <li><Link className="dropdown-item" href="#">Suits & Dress Material</Link></li>
    <li><Link className="dropdown-item" href="#">Other Ethnic</Link></li>
  </ul>
</div>

  <div className="dropdown">
  <Link className="bg-white px-4 py-2 rounded border border-gray-300 hover:bg-gray-200" style={{ color: 'black', textDecoration: 'none' }}  href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
  Women Western</Link>
    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><Link className="dropdown-item" href="#">Topwear</Link></li>
    <li><Link className="dropdown-item" href="#">Bottomwear</Link></li>
    <li><Link className="dropdown-item" href="#">Innerwear</Link></li>
    <li><Link className="dropdown-item" href="#">Sleepwear</Link></li>
  </ul>
</div>

<div className="dropdown">
  <Link className="bg-white px-4 py-2 rounded border border-gray-300 hover:bg-gray-200" style={{ color: 'black', textDecoration: 'none' }} href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
  Men</Link>
    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><Link className="dropdown-item" href="#">Topwear</Link></li>
    <li><Link className="dropdown-item" href="#">Bottomwear</Link></li>
    <li><Link className="dropdown-item" href="#">Men Accessories</Link></li>
    <li><Link className="dropdown-item" href="#">Men Footwear </Link></li>
    <li><Link className="dropdown-item" href="#">Ethnic Wear </Link></li>
    <li><Link className="dropdown-item" href="#">Inner & Sleep Wear </Link></li>
  </ul>
</div>

<div className="dropdown">
  <Link className="bg-white px-4 py-2 rounded border border-gray-300 hover:bg-gray-200" style={{ color: 'black', textDecoration: 'none' }} href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
  Kids</Link>
    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><Link className="dropdown-item" href="#">Boys & Girls 2+ Years</Link></li>
    <li><Link className="dropdown-item" href="#">Infant 0-2 Years</Link></li>
    <li><Link className="dropdown-item" href="#">Toys & Accessories</Link></li>
    <li><Link className="dropdown-item" href="#">Baby Care </Link></li>
  </ul>
</div>

<div className="dropdown">
  <Link className="bg-white px-4 py-2 rounded border border-gray-300 hover:bg-gray-200" style={{ color: 'black', textDecoration: 'none' }} href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
  Home & Kitchen</Link>
    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><Link className="dropdown-item" href="#">Home Furnishing</Link></li>
    <li><Link className="dropdown-item" href="#">Home Decor</Link></li>
    <li><Link className="dropdown-item" href="#">Kitchen & Dining</Link></li>
  </ul>
</div>

<div className="dropdown">
  <Link className="bg-white px-4 py-2 rounded border border-gray-300 hover:bg-gray-200" style={{ color: 'black', textDecoration: 'none' }} href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
  Beauty & Health</Link>
    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><Link className="dropdown-item" href="#">Make up</Link></li>
    <li><Link className="dropdown-item" href="#">Wellness</Link></li>
    <li><Link className="dropdown-item" href="#">Skincare</Link></li>
  </ul>
</div>

<div className="dropdown">
  <Link className="bg-white px-4 py-2 rounded border border-gray-300 hover:bg-gray-200" style={{ color: 'black', textDecoration: 'none' }} href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
  Jewellery & Accessories</Link>
    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><Link className="dropdown-item" href="#">Jewellery</Link></li>
    <li><Link className="dropdown-item" href="#">Women Accessory</Link></li>
  </ul>
</div>

<div className="dropdown">
  <Link className="bg-white px-4 py-2 rounded border border-gray-300 hover:bg-gray-200" style={{ color: 'black', textDecoration: 'none' }} href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
  Bags & Footwear</Link>
    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><Link className="dropdown-item" href="#">Women Bags</Link></li>
    <li><Link className="dropdown-item" href="#">Men Bags</Link></li>
    <li><Link className="dropdown-item" href="#">Men Footwear</Link></li>
    <li><Link className="dropdown-item" href="#">Women Footwear</Link></li>
  </ul>
</div>

<div className="dropdown">
  <Link className="bg-white px-4 py-2 rounded border border-gray-300 hover:bg-gray-200" style={{ color: 'black', textDecoration: 'none' }} href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
  Electronics</Link>
    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><Link className="dropdown-item" href="#">Mobile & Accessories</Link></li>
    <li><Link className="dropdown-item" href="#">Appliances</Link></li>
  </ul>
</div>
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
