import React from "react";
import "./ActivityForm.css";

const ActivityForm = () => {
  return (
    <section className="form-part">
      <div className="container-fluid">
        <div className="your-exercise">
          <h2>Your Exercise Journal</h2>
        </div>
        <div className="row">
          {/* <!--part Activity Name input type text--> */}
          <div className="col-12">
            <h3>Activity Name</h3>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1"></span>
              <input
                type="text"
                className="form-control"
                placeholder="running with my dog."
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
          {/* <!--part Activity Date input type text--> */}
          <div className="col-12">
            <h3>Activity Date</h3>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1"></span>
              <input
                type="text"
                className="form-control"
                placeholder="dd/mm/yy"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
          {/* <!--part Activity Type input type select--> */}
          <div className="col-12">
            <h3>Activity Type</h3>
            <div className="input-group mb-3">
              <select className="form-select" id="inputGroupSelect02">
                <option selected>running</option>
                <option value="1">running</option>
                <option value="2">swimming</option>
                <option value="3">basketball</option>
                <option value="1">bike</option>
                <option value="2">weight</option>
                <option value="3">ping pong</option>
                <option value="1">boxing</option>
                <option value="2">yoga</option>
                <option value="3">football</option>
                <option value="1">running</option>
                <option value="2">golf</option>
                <option value="3">other</option>
              </select>
              <label className="input-group-text" for="inputGroupSelect02">
                Options
              </label>
            </div>
          </div>
          {/* <!--part Activity Duration input type number--> */}
          <div className="col-12">
            <h3>Activity Duration</h3>
            <div className="input-group mb-3">
              <input
                type="number"
                className="form-control"
                placeholder="60"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <span className="input-group-text" id="basic-addon2">
                mins
              </span>
            </div>
          </div>
          {/* <!--part Describe this journal input type text--> */}
          <div className="col-12">
            <h3>Describe this journal</h3>
            <div className="input-group">
              <span className="input-group-text">textarea</span>
              <textarea
                className="form-control"
                placeholder="Fun and Happy"
                aria-label="With textarea"
              ></textarea>
            </div>
          </div>
        </div>
        <div class="col-12 mt-5">
          <button
            type="submit"
            class="btn btn-secondary"
            style={{ marginBottom: "30px" }}
          >
            Add activity
          </button>
        </div>
      </div>
    </section>
  );
};

export default ActivityForm;
