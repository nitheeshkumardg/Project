import React from 'react'
import { Link,Outlet } from 'react-router-dom'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import IconButton from '@mui/material/IconButton';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';

function Navbar1() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" href="#"><img src='https://www.meesho.com/assets/svgicons/meeshoLogo.svg' alt='Display' width={'100 px'} height={'100px'}/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Try Saree,Kurti or Search by Product Code" aria-label="Search"/>
        {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
      </form>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <div className="dropdown">
            <Link className="bg-white px-4 py-2 rounded border border-gray-300 hover:bg-gray-200" style={{ color: 'black', textDecoration: 'none' }} href="#"  id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
            Download App
               </Link>

            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
               <li><Link className="dropdown-item" href="https://play.google.com/store/apps/details?id=com.meesho.supply" >For Android</Link></li>
                <li><Link className="dropdown-item" href="https://apps.apple.com/in/app/meesho/id1457958492">For IOS</Link></li>
                </ul>
               </div>


          
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="#">Become a Supplier</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="https://www.meesho.io/news">News Room</Link>
        </li>
        <li className="nav-item">
        <IconButton color="primary" aria-label="add to shopping cart">
            <Person2OutlinedIcon />
          </IconButton>
     
          <Link className="nav-link active" aria-current="page" to="/Login">Profile</Link>
        </li>
        <li className="nav-item">
        <IconButton color="primary" aria-label="add to shopping cart">
            <AddShoppingCartIcon />
          </IconButton>
          <Link className="nav-link active" aria-current="page" href="#">Cart</Link>
        </li>
     
      </ul>
      
    </div>
  </div>
  <Outlet/>
</nav>
</>
      
    
  )
}

export default Navbar1
