import React from "react";
import "./ActivityHistory.css";
import "bootstrap/dist/css/bootstrap.min.css";
const ActivityHistory = () => {
  return (
    <section className="banner-part">
      <div className="container-fluid">
        <h2 style={{ color: "white" }}>Activity History</h2>
        {/* <a href="#" style={{ textAlign: "right" }}>
          <h5>All Record</h5>
        </a> */}
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <div className="card-his img-fluid rounded-start">
              <img src="./running.png" className="card-img-his" alt="..." />
              <div className="card-body-his">
                <h5 className="card-title-his">Activity Date: 10/02/2021</h5>
                <h5 className="card-title">
                  Activity Name: Running with my dog.
                </h5>
                <h5 className="card-title">Activity Duration: 60 mins.</h5>
                <h5 className="card-title">Activity Type: running.</h5>
                <h5 className="card-title">
                  Activity Description: Love me,Love my dog.
                </h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card-his">
              <img src="./soccer-ball.png" className="card-img-his" alt="..." />
              <div className="card-body-his">
                <h5 className="card-title">Activity Date: 9/02/2021</h5>
                <h5 className="card-title">
                  Activity Name: Play football with my friends.
                </h5>
                <h5 className="card-title">Activity Duration: 90 mins.</h5>
                <h5 className="card-title">Activity Type: football</h5>
                <h5 className="card-title">
                  Activity Description: chill chill.
                </h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card-his">
              <img src="./swimming.png" className="card-img-his" alt="..." />
              <div className="card-body-his">
                <h5 className="card-title">Activity Date: 8/02/2021</h5>
                <h5 className="card-title">
                  Activity Name: Swimming with baby shark.
                </h5>
                <h5 className="card-title">Activity Duration: 1mins</h5>
                <h5 className="card-title">Activity Type: swimming</h5>
                <h5 className="card-title">Activity Description: help me!!!</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card-his">
              <img src="./bike.png" className="card-img-his" alt="..." />
              <div className="card-body-his">
                <h5 className="card-title">Activity Date: 30/01/2021</h5>
                <h5 className="card-title">Activity Name: Bike on weekend</h5>
                <h5 className="card-title">Activity Duration: 45mins</h5>
                <h5 className="card-title">Activity Type: bike</h5>
                <h5 className="card-title">Activity Description: feel good.</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivityHistory;
