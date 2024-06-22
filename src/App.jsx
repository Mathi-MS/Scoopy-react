import React from 'react'
import Landing from "./components/Landing"
import Sidenav from "./components/Sidenav"
import About from "./components/inner/About"
import Blog from "./components/inner/Blog"
import Cart from "./components/inner/Cart"
import Contact from "./components/inner/Contact"
import Products from "./components/inner/Products"
import Signin from "./components/inner/Signin"
import Navbar from "./components/Navbar"
import Footer from './components/Footer'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Signup from "./components/inner/Signup"
import Context from './components/Context'


const App = () =>{

    return(
      <>
        <BrowserRouter>
        <Navbar></Navbar> 
        <Context>
          <Routes>
            <Route path="/" element={<Landing></Landing>}></Route>
            <Route path="/about" element={<About></About>}></Route>
            <Route path="/products" element={<Products></Products>}></Route>
            <Route path="/blog" element={<Blog></Blog>}></Route>
            <Route path="/contact" element={<Contact></Contact>}></Route>
            <Route path="/signin" element={<Signin></Signin>}></Route>
            <Route path="/signup" element={<Signup></Signup>}></Route>
            <Route path="/cart" element={<Cart></Cart>}></Route>
            <Route path="/sidenav" element={<Sidenav></Sidenav>}></Route>
          </Routes>
          </Context>
        <Footer></Footer>
        </BrowserRouter>
      </>
    )
}

export default App