import "./ActivityHistory.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { faTrashCan, faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navigate } from "react-router-dom";

const baseURL = "http://localhost:4000/activities";
const handleDelete = (id) => {
  toast.success("Deleted Activity Success");
  setTimeout(() => {
    axios.delete(`${baseURL}/${id}`).then(() => {
      window.location.reload(false);
    });
  }, 4000);
};

const editFormatDate = (text) => text.slice(0, 10);
const handleEdit = (_id) => {
  Navigate(`/update/${_id}`);
};
const ActivityHistory = () => {
  const [posts, setPost] = useState(null);
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!posts) return null;
  return (
    <section className="banner-part-history">
      <ToastContainer
        toastStyle={{
          backgroundColor: "black",
          fontWeight: "800px",
          color: "white",
        }}
      />
      <div className="container-fluid">
        <h2 className="history">Activity History</h2>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {posts.map((post) => {
            return (
              <div className="col" key={post._id}>
                <div className="card-his img-fluid">
                  <img
                    src={"./" + post.activityType + ".svg"}
                    className="card-img-his"
                    alt="..."
                  />

                  <FontAwesomeIcon
                    icon={faPen}
                    className="form-control-icon-pen"
                    onClick={() => handleEdit(post._id)}
                  />
                  <FontAwesomeIcon
                    icon={faTrashCan}
                    className="form-control-icon"
                    onClick={() => handleDelete(post._id)}
                  />

                  <div className="icon-dropdown">
                    <div className="card-body-his">
                      <h5 className="card-title-his">
                        Activity Date: {editFormatDate(post.activityDate)}
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
              </div>
            );
          })}
          ,
        </div>
      </div>
    </section>
  );
};

export default ActivityHistory;
