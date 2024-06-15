import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import NavBar from "./components/NavBar";
import Sumarry from "./components/Sumarry";
import NoMatch from "./components/NoMatch";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="summary" element={<Sumarry/>} />
        <Route path="*" element={<NoMatch/>}/>
      </Routes>
    </div>
  );
}

export default App;
