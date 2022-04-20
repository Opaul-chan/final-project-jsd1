import React from "react";
import "./ActivityIcon.css";

const ActivityIcon = (props) => {
  const onClick = (type) => {
    props.setActivityType(type);
  };

  return (
    <section className="banner-part-icon">
      <div className="container-fluid-banner">
        <h2 className="Add">Add Your Activity</h2>
        <div className="row">
          <div className="col-2">
            <img
              src="running.svg"
              alt="running icon"
              onClick={() => onClick("running")}
            />
          </div>
          <div className="col-2">
            <img
              src="swimming.svg"
              alt="swimming icon"
              onClick={() => onClick("swimming")}
            />
          </div>
          <div className="col-2">
            <img
              src="basketball.svg"
              alt="basketball icon"
              onClick={() => onClick("basketball")}
              value="basketball"
            />
          </div>
          <div className="col-2">
            <img
              src="bike.svg"
              alt="bike icon"
              onClick={() => onClick("bike")}
              value="bike"
            />
          </div>
          <div className="col-2">
            <img
              src="dumbbell.svg"
              alt="dumbbell icon"
              onClick={() => onClick("dumbbell")}
              value="dumbbell"
            />
          </div>
          <div className="col-2">
            <img
              src="ping-pong.svg"
              alt="ping-pong icon"
              onClick={() => onClick("ping-pong")}
              value="ping-pong"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-2">
            <img
              src="boxing.svg"
              alt="boxing icon"
              onClick={() => onClick("boxing")}
              value="boxing"
            />
          </div>
          <div className="col-2">
            <img
              src="tennis.svg"
              alt="tennis icon"
              onClick={() => onClick("tennis")}
              value="tennis"
            />
          </div>
          <div className="col-2">
            <img
              src="yoga.svg"
              alt="yoga icon"
              onClick={() => onClick("yoga")}
              value="yoga"
            />
          </div>
          <div className="col-2">
            <img
              src="football.svg"
              alt="soccer-ball icon"
              onClick={() => onClick("football")}
              value="football"
            />
          </div>
          <div className="col-2">
            <img
              src="golf.svg"
              alt="golf icon"
              onClick={() => onClick("golf")}
              value="golf"
            />
          </div>
          <div className="col-2">
            <img
              src="other.svg"
              alt="other icon"
              onClick={() => onClick("other")}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivityIcon;
