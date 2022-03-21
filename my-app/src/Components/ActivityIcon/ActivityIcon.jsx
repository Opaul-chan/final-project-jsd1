import React from "react";
import "./ActivityIcon.css";

const ActivityIcon = (props) => {
  const onClick = (type) => {
    props.setActivityType(type);
    alert(type);
  };

  return (
    <section className="banner-part">
      <div className="container-fluid-banner">
        <h2>Add Your Activity</h2>
        <div className="row">
          <div className="col-2">
            <img
              src="running.png"
              alt="running icon"
              onClick={() => onClick("running")}
            />
          </div>
          <div className="col-2">
            <img
              src="swimming.png"
              alt="swimming icon"
              onClick={() => onClick("swimming")}
            />
          </div>
          <div className="col-2">
            <img
              src="basketball.png"
              alt="basketball icon"
              onClick={() => onClick("basketball")}
              value="basketball"
            />
          </div>
          <div className="col-2">
            <img
              src="bike.png"
              alt="bike icon"
              onClick={() => onClick("bike")}
              value="bike"
            />
          </div>
          <div className="col-2">
            <img
              src="dumbbell.png"
              alt="dumbbell icon"
              onClick={() => onClick("dumbbell")}
              value="dumbbell"
            />
          </div>
          <div className="col-2">
            <img
              src="ping-pong.png"
              alt="ping-pong icon"
              onClick={() => onClick("ping-pong")}
              value="ping-pong"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-2">
            <img
              src="boxing-gloves.png"
              alt="boxing icon"
              onClick={() => onClick("boxing")}
              value="boxing"
            />
          </div>
          <div className="col-2">
            <img
              src="tennis.png"
              alt="tennis icon"
              onClick={() => onClick("tennis")}
              value="tennis"
            />
          </div>
          <div className="col-2">
            <img
              src="yoga.png"
              alt="yoga icon"
              onClick={() => onClick("yoga")}
              value="yoga"
            />
          </div>
          <div className="col-2">
            <img
              src="soccer-ball.png"
              alt="soccer-ball icon"
              onClick={() => onClick("soccer")}
              value="soccer"
            />
          </div>
          <div className="col-2">
            <img
              src="golf.png"
              alt="golf icon"
              onClick={() => onClick("golf")}
              value="golf"
            />
          </div>
          <div className="col-2">
            <img
              src="other.png"
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
