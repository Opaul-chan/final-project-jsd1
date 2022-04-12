import React from "react";
import "./ActivityHistory.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { useState, useEffect } from "react";
import axios from "axios";
// import { Navigate, useNavigate } from "react-router-dom";
const baseURL = "http://localhost:4000/activities";

// const HandleEdit = (id) => {
//   const navigate = useNavigate();
//   axios.patch(`${baseURL}/${id}`).then(() => {
//     navigate({
//       pathname: "/UpdateActivity",
//     });
//   });
// };
const handleDelete = (id) => {
  console.log(id);
  axios.delete(`${baseURL}/${id}`).then(() => {
    alert("Post deleted!!!");
    window.location.reload(false);
  });
};

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
    <section className="banner-part-history">
      <div className="container-fluid">
        <h2 className="history">Activity History</h2>
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
              <div className="col" key={post._id}>
                <div className="card-his img-fluid">
                  <div className="icon-dropdown">
                    <img
                      src={"./" + post.activityType + ".png"}
                      className="card-img-his"
                      alt="..."
                    />
                    <div className="dropdown-button">
                      <DropdownButton variant="secondary" title="...">
                        <Dropdown.Item
                          href="#/action-1"
                          // onClick={() => HandleEdit(post._id)}
                        >
                          Edit
                        </Dropdown.Item>
                        <Dropdown.Item
                          href="#/action-2"
                          onClick={() => handleDelete(post._id)}
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
                      Activity Name: {post.activityName}
                    </h5>
                    <h5 className="card-title-his">
                      Activity Duration: {post.activityDuration} mins.
                    </h5>
                    <h5 className="card-title-his">
                      Activity Type:{post.activityType}
                    </h5>
                    <h5 className="card-title-his">
                      Activity Description: {post.activityDescription}
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
