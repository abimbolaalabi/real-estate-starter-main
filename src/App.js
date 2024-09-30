import React from "react";

//import routes and route
import { Routes, Route } from "react-router-dom";

//import components
import Header from "./components/Header";
import Footer from "./components/Footer";

//import pages
import Home from "./pages/Home";
import PropertyDetails from "./pages/PropertyDetails";
import Login from "./pages/Login"; // Import Login component
import SignUp from "./pages/Signup";

const App = () => {
  return (
    <div className=" mx-auto bg-white">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route path="/login" element={<Login />} /> {/* Add login route */}
        <Route path="/signup" element={<SignUp />} /> Add signup route
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
