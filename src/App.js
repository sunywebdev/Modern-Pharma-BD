import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import './App.css';
import Home from './Components/Home/Home';
import Product from './Components/Product/Product';
import NewsDetails from './Components/NewsDetails/NewsDetails';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import ContactUs from './Components/ContactUs/ContactUs';
import NotFound from './Components/NotFound/NotFound';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Cart from './Components/Cart/Cart';
import { useState } from 'react';
import AllProducts from './Components/AllProducts/AllProducts';

function App() {
  const [cart, setCart] = useState([])
  const [subTotal, setSubTotal] = useState([])
  const [fee, setFee] = useState([])
  const addToCart = (food) => {
    const newCart = cart.filter(foods => foods.id !== food.id)
    const latestCart = [...newCart, food]
    setCart(latestCart)
    let total = 0
    let fee = 0
    for (const foods of latestCart) {
      total += foods.price
      setSubTotal(total);
    }
    for (const foods of latestCart) {
      fee += foods.fee
      setFee(fee);
    }
  }

  const removeItem = (foods) => {
    const newCart = cart.filter(food => food.id !== foods.id)
    setCart(newCart)
  }
  return (
    <div className="App overflow-hidden">
      <BrowserRouter>
        <NavBar
          cart={cart}
        ></NavBar>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/product/:itemID'>
            <Product
              addToCart={addToCart}
            ></Product>
          </Route>
          <Route path='/allproducts'>
            <AllProducts
              addToCart={addToCart}
            ></AllProducts>
          </Route>
          <Route path='/news/:itemID'>
            <NewsDetails></NewsDetails>
          </Route>
          <Route path='/contactus'>
            <ContactUs></ContactUs>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/signup'>
            <Signup></Signup>
          </Route>
          <Route path='/cart'>
            <Cart
              fee={fee}
              subTotal={subTotal}
              cart={cart}
              removeItem={removeItem}
            ></Cart>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>

    </div>
  );
}

export default App;
