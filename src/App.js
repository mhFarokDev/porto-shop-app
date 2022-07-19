import axios from 'axios';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import './assets/css/bootstrap.min.css'
import './assets/css/style.min.css'
import './assets/vendor/fontawesome-free/css/all.min.css'
import Admin from './components/Admin/Admin';
import AddCategory from './components/Admin/Outlets/AddCategory';
import AddProduct from './components/Admin/Outlets/AddProduct';
import AddTag from './components/Admin/Outlets/AddTag';
import Category from './components/Admin/Outlets/Category';
import Dashbord from './components/Admin/Outlets/Dashbord';
import Products from './components/Admin/Outlets/Products';
import Tag from './components/Admin/Outlets/Tag';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Pages/Home';
import Shop from './components/Pages/Shop';
import SingleShop from './components/Pages/SingleShop';

function App() {

  //  Slug Function
  const makeSlug = (text)=>{
        let slugMake = text.split(' ')
        return slugMake.join('-').toLowerCase()
  }

  // all server data state //
  // All Tags Form Server
  const [tags, setTags] = useState([])
  // All category Form Server
  const [categorys, setCategorys] = useState([])
  // All products Form Server
  const [products, setProducts] = useState([])

  // get data form json server
  useEffect(()=>{
    axios.get('http://localhost:5050/tags').then(res=>{
      setTags(res.data)
    })
    axios.get('http://localhost:5050/categorys').then(res=>{
      setCategorys(res.data)
    })
    axios.get('http://localhost:5050/products').then(res=>{
      setProducts(res.data)
    })
  },[tags, categorys, products])
  return (
    <>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home products={products}/>}/>
        <Route path="/shop" element={<Shop products={products}/>}/>
        <Route path="/shop/:slug" element={<SingleShop products={products}/>}/>
        <Route path="/admin" element={<Admin/>}>
          <Route path='/admin/dashbord' element={<Dashbord/>}/>
          <Route path='/admin/products' element={<Products products={products} makeSlug={makeSlug}/>}/>
          <Route path='/admin/add-product' element={<AddProduct makeSlug={makeSlug} categorys={categorys} tags={tags}/>}/>
          <Route path='/admin/tags' element={<Tag tags={tags} makeSlug={makeSlug}/>}/>
          <Route path='/admin/add-tag' element={<AddTag makeSlug={makeSlug}/>} />
          <Route path='/admin/category' element={<Category makeSlug={makeSlug} categorys={categorys}/>}/>
          <Route path='/admin/add-category' element={<AddCategory makeSlug={makeSlug}/>}/>
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
      

      

      
    </>
  );
}

export default App;
