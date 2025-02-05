import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./component/Counter";
import TextEditor from "./component/TextEditor";
import Navbar from "./component/Navbar";
import { Route, Router, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Footer from "./component/Footer";
import Form from "./component/Form";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import PrivateRoute from "./component/PrivateRoute";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Service from "./pages/Service";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/" element={<Counter />} />
        <Route path="/editor" element={<TextEditor />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
      </Routes>
      <Footer />
      {/* <Counter /> */}
    </>
  );
}

export default App;
