import {
  BrowserRouter as Router,
  Route,
  Link, Routes
} from "react-router-dom";
import Home from './components/Home';
import { Products } from './components/Products';
import './App.css';
import logo from './logo.png';
import './cart.svg'
import Login from "./components/Login/Login";

function App() {
  return (
    <Router>
      <div className="stickedBar">
        <img className="logo" src={logo} height={70} width={150} alt="logo" />
        <div className="container">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
        </div>
        <div className="rightContainer">
          <div className="rightNav">
            <Link to="/signIn">Sign In</Link>
            <Link to="/register">Register</Link>
          </div>
              <div className="cart">
                <img src={'/static/images/cart.svg'} alt="cart" width='25px' />
            </div>
        </div>
      </div>
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/signIn" element={<Login />} />
        <Route path="/register" element={<Home />} />
      </Routes >
    </Router>
  );
}



export default App;
