import {BrowserRouter as Router,Route,Link, Routes} from "react-router-dom";
import Breakfast from './components/Breakfast'
import Lunch from './components/Lunch'
import Starters from './components/Starters'
import All from './components/All'
import {CartProvider} from "react-use-cart";
function App() {
return (
  <Router>
    <CartProvider>
<div >
<nav className="text-center navbar navbar-expand-sm navbar-dark bg-dark" >
<div className="container-fluid row col-sm-12 col-md-4 col-lg-4">
<a className="navbar-brand" href="#">
<img className="w-50 rounded-circle m-0" style={{backgroundColor:'#dbe7e4'}} src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2019/10/attachment_72730158-e1571110735270.png?auto=format&q=60&fit=max&w=930"></img>
</a>
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" ariacontrols=" navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
<span className="navbar-toggler-icon"></span>
</button>

<div className="collapse navbar-collapse" id="navbarSupportedContent">
<ul className="navbar-nav me-auto">
<li className="nav-item">
<Link className="nav-link active p-5" to="all">
 <h3>HOME</h3>
  </Link>
</li>
<li className="nav-item">
<Link className="nav-link active p-5" to="breakfast"><h3>Breakfast</h3></Link>
</li>
<li className="nav-item">
<Link className="nav-link active p-5" to="lunch"><h3>Lunch</h3></Link>
</li>
<li className="nav-item">
<Link className="nav-link active p-5" to="starters"><h3>Starters</h3></Link>
</li>
</ul>
</div>
</div>
</nav>
<Routes>
<Route path="/breakfast" element={<Breakfast />} />
<Route path="/lunch" element={<Lunch />} />
<Route path="/starters" element={<Starters />} />
<Route path="/all" element={<All />} />
</Routes>
</div>
</CartProvider>
</Router>
);
}
export default App;