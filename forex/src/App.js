import './App.css';
import ResponsiveAppBar from './component/navbar';
// import Home from './pages/home';
import { Route, Routes } from "react-router-dom";
import Signal from './pages/signal';
import ContactUs from './pages/contact';
import About from './pages/about';
import Landing from './pages/landing';
import Login from './pages/login';
import Register from './pages/register';
function App() {
  return (
    <div className="app">
      <ResponsiveAppBar/>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/signal" element={<Signal />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
