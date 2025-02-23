import { BrowserRouter, Routes, Route } from "react-router-dom";
// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Footer from './components/Footer';
import UsersList from './components/UsersList';
// Pages
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      {/* Home Page (Without UsersList) */}
      <Route path="/" element={
        <>
          <Navbar />
          <Hero />
          <Menu />
          <Footer />
        </>
      } />
  
      {/* My Account Page (UsersList ) */}
      <Route path="/user" element={<UsersList />} />
  
      {/* SignUp Page */}
      <Route path="/signup" element={<SignUp />} />
  
      {/* Login Page */}
      <Route path="/login" element={<LogIn />} />
    </Routes>
  </BrowserRouter>
  
  );
}

export default App;
