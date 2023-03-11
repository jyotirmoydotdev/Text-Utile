//import logo from './logo.svg';
import './App.css';
import Header from './Component/header';
import Card  from "./Component/card";
import TextForm from "./Component/textform"
import About from "./Component/about";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Header />
      <div className="container">

        <Routes>
          <Route path="/" element={<TextForm />} />
          <Route path="about/*" element={<About />} />
        </Routes>

      </div>
    </Router>
    </>
  );
}

export default App;
