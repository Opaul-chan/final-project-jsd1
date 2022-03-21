import React from "react";
import ActivityIcon from "./Components/ActivityIcon/ActivityIcon.jsx";
//import "./App.css";
import Navbar from "./Components/Navbar/Navbar.jsx";
import ActivityForm from "./Components/ActivityForm/ActivityForm.jsx";
import Footer from "./Components/Footer/Footer.jsx";
function App() {
  return (
    <div className="App">
      <Navbar />
      <ActivityIcon />
      <ActivityForm />
      <Footer />
    </div>
  );
}

export default App;
