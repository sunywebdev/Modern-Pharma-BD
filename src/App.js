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
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import AboutUs from './Components/AboutUs/AboutUs';
import CheckOut from './Components/CheckOut/CheckOut';

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
      <AuthProvider>
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
            <PrivateRoute path='/product/:itemID'>
              <Product
                addToCart={addToCart}
              ></Product>
            </PrivateRoute>
            <PrivateRoute path='/checkout'>
              <CheckOut ></CheckOut>
            </PrivateRoute>
            <PrivateRoute path='/allproducts'>
              <AllProducts
                addToCart={addToCart}
              ></AllProducts>
            </PrivateRoute>
            <Route path='/news/:itemID'>
              <NewsDetails></NewsDetails>
            </Route>
            <PrivateRoute path='/contactus'>
              <ContactUs></ContactUs>
            </PrivateRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/signup'>
              <Signup></Signup>
            </Route>
            <PrivateRoute path='/aboutus'>
              <AboutUs></AboutUs>
            </PrivateRoute>
            <PrivateRoute path='/cart'>
              <Cart
                fee={fee}
                subTotal={subTotal}
                cart={cart}
                removeItem={removeItem}
              ></Cart>
            </PrivateRoute>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
