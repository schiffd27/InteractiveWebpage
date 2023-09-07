import './App.css';
import Gravity from './Pages/Gravity'
import Navbar from "./NavBar";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom"

function App() {
  return (
      <>
          <Navbar />
          <div className={"container"}>
              <Routes>
                  <Route path={"/"} element={<Home />} />
                  <Route path={"/about"} element={<Home />} />
                  <Route path={"/gravity"} element={<Gravity />} />
              </Routes>
          </div>
      </>
  );
}

export default App;
