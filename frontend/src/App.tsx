import React, { useMemo, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import LoginContext from "./contexts/LoginContext";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Recipe from "./pages/Recipe";
import Search from "./pages/Search";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({
    id: 0,
    name: "",
    email: "",
    password: "",
  });
  const queryClient = useMemo(() => new QueryClient(), []);

  const loginContextObj = useMemo(
    () => ({
      isLoggedIn,
      login: () => setIsLoggedIn(true),
      logout: () => setIsLoggedIn(false),
      user,
      setUser,
    }),
    [isLoggedIn, setIsLoggedIn, user, setUser]
  );

  return (
    <LoginContext.Provider value={loginContextObj}>
      <QueryClientProvider client={queryClient}>
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
      </QueryClientProvider>
    </LoginContext.Provider>
  );
}

export default App;
