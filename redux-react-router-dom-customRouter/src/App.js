import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Todos from "./pages/Todos";
import Users from "./pages/Users";
import history from "./history";
import CustomRouter from "./Router/CustomRouter";

function App() {
  return (
    <CustomRouter history={history}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/todos' element={<Todos />} />
        <Route path='/users' element={<Users />} />
      </Routes>
    </CustomRouter>
  );
}

export default App;
