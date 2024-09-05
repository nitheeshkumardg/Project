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
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="#">Women Ethnic</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="#">Women Western</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="#">Men</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="#">Kids</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="#">Home & Kitchen</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="#">Beauty & Health</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="#">Jewellery & Accessories</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="#">Bags & Footwear</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="#">Electronics</Link>
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
