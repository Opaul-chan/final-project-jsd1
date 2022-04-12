import React, { useState } from "react";
import ActivityIcon from "../Components/ActivityIcon/ActivityIcon";
// import "./App.css";
// import Navbar from "../Components/Navbar/Navbar";
import ActivityForm from "../Components/ActivityForm/ActivityForm";
// import Footer from "../Components/Footer/Footer";

const Home = () => {
  const [activityType, setActivityType] = useState("running");
  return (
    <div className="home-part">
      <ActivityIcon setActivityType={setActivityType} />
      <ActivityForm
        activityType={activityType}
        setActivityType={setActivityType}
      />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
