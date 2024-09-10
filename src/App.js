import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import WomenEthnic from './pages/WomenEthnic';
import WomenWestern from './pages/WomenWestern';
import Men from './pages/Men';
import Kids from './pages/Kids';
import HomeandKitchen from './pages/HomeandKitchen';
import BeautyandHealth from './pages/BeautyandHealth';
import JewelleryandAccessories from './pages/JewelleryandAccessories';
import BagsandFootwear from './pages/BagsandFootwear';
import Electronics from './pages/Electronics';
import Ads from './components/Ads';

import Login from './components/Login';

import Home from './pages/Home';
import Products from './components/Products';









function App() {
  



  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/'>
      <Route path= '/WomenEthnic' element={<WomenEthnic/>}/>
      <Route path= '/WomenWestern' element={<WomenWestern/>}/>
      <Route path= '/Men' element={<Men/>}/>
      <Route path= '/Kids' element={<Kids/>}/>
      <Route path= '/HomeandKitchen' element={<HomeandKitchen/>}/>
      <Route path= '/BeautyandHealth' element={<BeautyandHealth/>}/>
      <Route path= '/JewelleryandAccessories' element={<JewelleryandAccessories/>}/>
      <Route path= '/BagsandFootwear' element={<BagsandFootwear/>}/>
      <Route path= '/Electronics' element={<Electronics/>}/>
      <Route path= '/Login' element={<Login/>}/>
      <Route path="/Products/:productId" element={Products} />
      
      <Route path='/' element={<Home/>}/>
      </Route>
    </Routes>
    </BrowserRouter>

   
    



    
   

 
    



    
    {/* <Footer1/> */}










    
  
    </>
  
  );
}

export default App;
