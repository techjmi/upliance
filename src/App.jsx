import { useState } from "react";
import "./App.css";
import Counter from "./component/Counter";
import TextEditor from "./pages/TextEditor";
import Navbar from "./component/Navbar";
import { BrowserRouter, Route,  Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Footer from "./component/Footer";
import Form from "./pages/Form";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import PrivateRoute from "./component/PrivateRoute";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Service from "./pages/Service";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
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
        <Route path="/text" element={<TextEditor/>} />
        <Route path="/user" element={<Form/>} />
      </Routes>
      <Footer />
      {/* <Counter /> */}
    </BrowserRouter>
  );
}

export default App;
