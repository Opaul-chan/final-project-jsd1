import React, { useState } from "react";
import ActivityIcon from "../Components/ActivityIcon/ActivityIcon";
import ActivityForm from "../Components/ActivityForm/ActivityForm";

const Home = () => {
  const [activityType, setActivityType] = useState("");
  return (
    <div className="home-part">
      <ActivityIcon setActivityType={setActivityType} />
      <ActivityForm
        activityType={activityType}
        setActivityType={setActivityType}
      />
    </div>
  );
};

export default Home;
