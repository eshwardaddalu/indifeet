import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Homepage from './Homepage';
import './App.css';
import ViewAll  from './ViewAll';
import Cart from './Cart';
import Search from './Search';

function App() {
 
  return (
    <div>
   
      <BrowserRouter>
      <Routes>
        <Route path="/page/view-all" element={<ViewAll/>}></Route>
        <Route path="/" element={<Homepage/>} />
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/search" element={<Search/>}></Route>
        </Routes>
   </BrowserRouter>
    </div>
    
  );
}

export default App;
