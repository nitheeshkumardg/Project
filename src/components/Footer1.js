import React from 'react'

function Footer1() {
  return (
    <>
   <footer className="fixed-bottom container bg-gray-800 text-white py-10 my-0">
      <div className="row">
       
        <div className='col'>
          <h4 className="text-lg font-semibold mb-4">Company</h4>
          <ul>
            <li><a href="#about" className="text-gray-300 hover:text-white">About Us</a></li>
            <li><a href="#careers" className="text-gray-300 hover:text-white">Careers</a></li>
            <li><a href="#blog" className="text-gray-300 hover:text-white">Blog</a></li>
            <li><a href="#press" className="text-gray-300 hover:text-white">Press</a></li>
          </ul>
        </div>

     
        <div className='col'>
          <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
          <ul>
            <li><a href="#contact" className="text-gray-300 hover:text-white">Contact Us</a></li>
            <li><a href="#shipping" className="text-gray-300 hover:text-white">Shipping</a></li>
            <li><a href="#returns" className="text-gray-300 hover:text-white">Returns</a></li>
            <li><a href="#faq" className="text-gray-300 hover:text-white">FAQs</a></li>
          </ul>
        </div>

   
        <div className='col'>
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <ul className="flex space-x-4">
            <li><a href="#facebook" className="text-gray-300 hover:text-white">Facebook</a></li>
            <li><a href="#instagram" className="text-gray-300 hover:text-white">Instagram</a></li>
            <li><a href="#twitter" className="text-gray-300 hover:text-white">Twitter</a></li>
            <li><a href="#linkedin" className="text-gray-300 hover:text-white">LinkedIn</a></li>
          </ul>
        </div>

     
        <div className='col'>
          <h4 className="text-lg font-semibold mb-4">Legal</h4>
          <ul>
            <li><a href="#privacy" className="text-gray-300 hover:text-white">Privacy Policy</a></li>
            <li><a href="#terms" className="text-gray-300 hover:text-white">Terms of Service</a></li>
            <li><a href="#cookies" className="text-gray-300 hover:text-white">Cookie Policy</a></li>
          </ul>
        </div>

     
        <div className="flex flex-col justify-center text-center md:text-left">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer1
