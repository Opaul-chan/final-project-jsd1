import React from "react";
import "./ActivityHistory.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { useState, useEffect } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
// import res from "express/lib/response";

// import Footer from "../Components/Footer/Footer";
// import { Link } from "react-router-dom";
// import { Button } from "react-bootstrap";
const baseURL = "http://localhost:4000/activities";

// const handleDelete = () => {
//   const navigate = useNavigate();
//   axios.delete(`${baseURL}/:id`).then((response) => {
//     alert("Post deleted!!!");
//     navigate({
//       pathname: "/History",
//     });
//   });
// };
const ActivityHistory = () => {
  //use effect
  const [posts, setPost] = useState(null);
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!posts) return null;

  return (
    <section className="banner-part">
      <div className="container-fluid">
        <h2 style={{ color: "white" }}>Activity History</h2>
        {/* <a href="#" style={{ textAlign: "right" }}>
          <h5>All Record</h5>
        </a> */}
        {/* <DropdownButton
          id="dropdown-basic-button"
          title="Filter by ActivityType"
        >
          <Dropdown.Item href="#/action-1">Running</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Yoga</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Football</Dropdown.Item>
        </DropdownButton> */}

        <div className="row row-cols-1 row-cols-md-2 g-4">
          {posts.map((post) => {
            return (
              <div className="col">
                <div className="card-his img-fluid rounded-start">
                  <div className="icon-dropdown">
                    <img
                      src={"./" + post.activityType + ".png"}
                      className="card-img-his"
                      alt="..."
                    />
                    <div className="dropdown-button">
                      <DropdownButton variant="secondary" title="...">
                        <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                        <Dropdown.Item
                          href="#/action-2"
                          // onclick={() => handleDelete()}
                        >
                          Delete
                        </Dropdown.Item>
                      </DropdownButton>
                    </div>
                  </div>
                  <div className="card-body-his">
                    <h5 className="card-title-his">
                      Activity Date: {post.activityDate}
                    </h5>
                    <h5 className="card-title-his">
                      Activity Name: {post.activityName}.
                    </h5>
                    <h5 className="card-title-his">
                      Activity Duration: {post.activityDuration} mins.
                    </h5>
                    <h5 className="card-title-his">
                      Activity Type:{post.activityType}.
                    </h5>
                    <h5 className="card-title-his">
                      Activity Description: {post.activityDescription}.
                    </h5>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ActivityHistory;
