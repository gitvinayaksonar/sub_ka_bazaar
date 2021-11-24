import {
  BrowserRouter as Router,
  Route,
  Link, Routes 
} from "react-router-dom";
import {Home} from './components/Home';
import {Products} from './components/Products';

function App() {
  return (
    <Router>
    <div>
      <nav>
        <Link to="/">Home</Link> &nbsp;
        <Link to="/products">Products</Link>
      </nav>
      <Routes >
        <Route  path="/" element={<Home/>} />
        <Route  path="/products" element={<Products/>}/>
      </Routes >
    </div>
  </Router>
  );
}

export default App;
