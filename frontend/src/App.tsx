import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/Global";
import { lightTheme, darkTheme } from "./styles/themes";
import LoginContext from "./contexts/LoginContext";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Recipe from "./pages/Recipe";
import Search from "./pages/Search";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import useAuth from "./hooks/AuthController";

function App() {
  const loginContextObj = useAuth();
  const [enableDarkMode, setEnableDarkMode] = useState(false);

  return (
    <LoginContext.Provider value={loginContextObj}>
      <ThemeProvider theme={enableDarkMode ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Router>
          <Navbar
            enableDarkMode={enableDarkMode}
            setEnableDarkMode={setEnableDarkMode}
          />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/recipe/:pageId" element={<Recipe />} />
            <Route path="/search" element={<Search />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </LoginContext.Provider>
  );
}

export default App;
