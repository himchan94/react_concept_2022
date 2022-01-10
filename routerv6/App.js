import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import NavLinks from "./components/NavLinks";
import Login from "./pages/Login";
function App() {
  let isLogin = true;
  return (
    <>
      <NavLinks />
      <Routes>
        <Route
          path='/login'
          element={isLogin ? <Login /> : <Navigate to='/' />}
        />
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/profile' element={<Profile />}>
          <Route path='/profile/:id' element={<Profile />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
