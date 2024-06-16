import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import NavBar from "./components/NavBar";
import Sumarry from "./components/Sumarry";
import NoMatch from "./components/NoMatch";
import Product from "./components/Product";
import Featured from "./components/Featured";
import New from "./components/New";
import Users from "./components/Users";
import UserDetails from "./components/UserDetails";
import Admin from "./components/Admin";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="summary" element={<Sumarry />} />
        <Route path="products" element={<Product />}>
          <Route index element={<Featured />} />
          <Route path="featured" element={<Featured />} />
          <Route path="new" element={<New />} />
        </Route>
        <Route path="users" element={<Users />}>
          <Route path=":userid" element={<UserDetails />} />
          <Route path="admin" element={<Admin />} />
        </Route>
        {/* <Route path="users/:userId" element={<UserDetails />} />
        <Route path="users/admin" element={<Admin />} /> */}
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
