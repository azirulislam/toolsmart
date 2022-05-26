import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Purchase from './Pages/Purchase/Purchase';
import Blogs from './Pages/Blogs/Blogs';
import Login from './Pages/Login/Login';
import Navbar from './Pages/Navbar/Navbar';
import Footer from './Pages/Footer/Footer';
import Register from './Pages/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth';
import NotFound from './Pages/NotFound/NotFound';
import Dashboard from './Pages/Dashboard/Dashboard';




function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="purchase" element={<RequireAuth><Purchase /> </RequireAuth>} />
        <Route path="dashboard" element={<RequireAuth><Dashboard /> </RequireAuth>} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
