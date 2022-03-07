import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginContext from "./contexts/LoginContext";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Recipe from "./pages/Recipe";
import Search from "./pages/Search";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import useAuth from "./controllers/AuthController";

function App() {
  const loginContextObj = useAuth();

  return (
    <LoginContext.Provider value={loginContextObj}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/recipe" element={<Recipe />} />
          <Route path="/search" element={<Search />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </LoginContext.Provider>
  );
}

export default App;
