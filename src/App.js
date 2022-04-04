import ResponsiveAppBar from './components/Nav';

import {Routes,Route} from "react-router-dom";
import Blog from './components/Blog';
import Home from './components/Home';
import Products from './components/Products';
import Pricing from './components/Pricing';

const App =()=> {
  return (
    <div >
    <ResponsiveAppBar/>
    <Routes>
    <Route path ="/" element ={<Home/>}/>
      <Route path ="/Home" element ={<Home/>}/>
      <Route path ="/Blog "element ={<Blog/>}/>
      <Route path ="/Plant" element ={<Products/>}/>
      <Route path ="/Pricing" element ={<Pricing/>}/>
    </Routes>
    </div>
  );
}

export default App;