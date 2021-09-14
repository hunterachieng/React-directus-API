import './App.css';
import {Link, BrowserRouter as Router, Route} from 'react-router-dom'
import Fruits from './Fruits';
import Products from './Products';
import Vegetables from './Vegetables';

function App() {
  return (
      <div className="App">
       <Router>
         <nav className="navbar">
      <Link to="/" style={{textDecoration:"none"}}><li>Our Products</li></Link>
      <Link to="/fruits" style={{textDecoration:"none"}}><li>Fruits</li></Link>
      <Link to="/vegetables" style={{textDecoration:"none"}}><li>Vegetables</li></Link>
      </nav>
      <Route path="/" exact component={Products}/>
      <Route path="/fruits" exact component={Fruits}/>
      <Route path="/vegetables" exact component={Vegetables}/>
      {/* <Fruits/> */}
      </Router>
    </div>
  
  );
}

export default App;
