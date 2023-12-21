import { Footer } from './component/Footer';
import { Menu } from './component/Menu';
import { NavBar } from './component/NavBar';
import { Home } from './pages/Home';
import { Users } from './pages/usersFeatures/Users';
import { Routes, Route } from "react-router-dom";
import { Products } from './pages/productFeatures/Products';
import "./App.css";

function App() {
  return (
    <div className="">
      <div className="main">
        <NavBar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/users" element={<Users />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
