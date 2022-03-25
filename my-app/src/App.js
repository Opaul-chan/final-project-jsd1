import React, { useState } from "react";
import ActivityIcon from "./Components/ActivityIcon/ActivityIcon.jsx";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar.jsx";
import ActivityForm from "./Components/ActivityForm/ActivityForm.jsx";
import Footer from "./Components/Footer/Footer.jsx";
function App() {
  const [activityType, setActivityType] = useState("running");

  return (
    <div className="App">
      <Navbar />
      <ActivityIcon setActivityType={setActivityType} />
      <ActivityForm
        activityType={activityType}
        setActivityType={setActivityType}
      />
      <Footer />
    </div>
  );
}

export default App;
