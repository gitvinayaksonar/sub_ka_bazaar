import {
  BrowserRouter as Router,
  Route,
  Link, Routes
} from "react-router-dom";
import Home from './components/pages/Home';
import { Products } from './components/pages/Products';
import './App.css';
import Login from "./components/pages/Login/Login";

function App() {
  return (
    <Router>
      <div className="stickedBar">
        <img className="logo" src={`/logo.png`} height={70} width={150} alt="logo" />        
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
