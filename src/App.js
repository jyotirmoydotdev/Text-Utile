import './App.css';
import Nav from "./Component/nav";
import Footer from "./Component/footer";
import Home from "./Component/home";
import Textarea from "./Component/textarea";
import Contact from "./Component/contact";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="textarea/*" element={<Textarea/>} />
          <Route path="contact/*" element={<Contact/>} />
        </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
