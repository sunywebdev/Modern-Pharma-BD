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

function App() {
  return (
    <div className="App overflow-hidden">
      <BrowserRouter>
        <NavBar></NavBar>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/product/:itemID'>
            <Product></Product>
          </Route>
          <Route path='/news/:itemID'>
            <NewsDetails></NewsDetails>
          </Route>
          <Route path='/contactus'>
            <ContactUs></ContactUs>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>

    </div>
  );
}

export default App;
