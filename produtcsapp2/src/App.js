import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './header';
import AddProducts from './pages/add.products';
import Products from './pages/products';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductsDetail from './pages/details';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Products/>}/>
        <Route path='/add-products' element={<AddProducts/>}/>
        <Route path='/products/:_id' element={<ProductsDetail/>}/>
      </Routes>
    </div>
  );
}

export default App;
