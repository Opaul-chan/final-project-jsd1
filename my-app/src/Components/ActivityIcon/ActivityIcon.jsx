import React from "react";
import "./ActivityIcon.css";

const ActivityIcon = () =>{
    return(
<section className="banner-part">
<div className="container-fluid-banner">
<h2>Add Your Activity</h2>
 <div className="row">
   <div className="col-2"><img src="running.png" alt="running icon" /></div>
   <div className="col-2"><img src="swimming.png" alt="swimming icon" /></div>
   <div className="col-2"><img src="basketball.png" alt="basketball icon" /></div>
   <div className="col-2"><img src="bike.png" alt="bike icon" /></div>
   <div className="col-2"><img src="dumbbell.png" alt="dumbbell icon" /></div>
   <div className="col-2"><img src="ping-pong.png" alt="ping-pong icon" /></div>    
 </div>
 <div className="row">
   <div className="col-2"><img src="boxing-gloves.png" alt="boxing icon" /></div>
   <div className="col-2"><img src="tennis.png" alt="tennis icon" /></div>
   <div className="col-2"><img src="yoga.png" alt="yoga icon" /></div>
   <div className="col-2"><img src="soccer-ball.png" alt="soccer-ball icon" /></div>
   <div className="col-2"><img src="golf.png" alt="golf icon" /></div>
   <div className="col-2"><img src="other.png" alt="other icon" /></div>    
 </div>
</div>
</section>
    )
}

export default ActivityIcon;