import React, { useEffect, useState } from "react";
import "./ActivityForm.css";

const ActivityForm = (props) => {
  const [activityName, setActivityName] = useState("");
  const [activityDate, setActivityDate] = useState("");
  const [activityDuration, setActivityDuration] = useState("");
  const [activityDescription, setActivityDescription] = useState("");
  const [isNameInvalid, setIsNameInvalid] = useState(false);
  const [isDurationInvalid, setIsDurationInvalid] = useState(false);
  const [isDescriptionInvalid, setIsDescriptionInvalid] = useState(false);

  const handleChangeActivityName = (event) => {
    setActivityName(event.target.value);
  };

  const handleChangeActivityDate = (event) => {
    setActivityDate(event.target.value);
  };

  const handleChangeActivityType = (event) => {
    props.setActivityType(event.target.value);
  };

  const handleChangeActivityDuration = (event) => {
    setActivityDuration(event.target.value);
  };

  const handleChangeActivityDescription = (event) => {
    setActivityDescription(event.target.value);
  };

  useEffect(() => {
    if (activityName.length > 3) {
      setIsNameInvalid(true);
    } else {
      setIsNameInvalid(false);
    }
  }, [activityName]);

  useEffect(() => {
    if (activityDuration > 0) {
      setIsDurationInvalid(true);
    } else {
      setIsDurationInvalid(false);
    }
  }, [activityDuration]);

  useEffect(() => {
    if (
      activityDescription.length > 9 &&
      activityDescription !== "" &&
      activityDescription.length < 139
    ) {
      setIsDescriptionInvalid(true);
    } else {
      setIsDescriptionInvalid(false);
    }
  }, [activityDescription]);

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
              <input
                type="text"
                className="form-control"
                placeholder="running with my dog."
                aria-label="Username"
                aria-describedby="basic-addon1"
                isNameInvalid={isNameInvalid}
                value={activityName}
                onChange={handleChangeActivityName}
              />
            </div>
          </div>
          {/* <!--part Activity Date input type text--> */}
          <div className="col-12">
            <h3>Activity Date</h3>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="dd/mm/yy"
                aria-label="Username"
                aria-describedby="basic-addon1"
                value={activityDate}
                onChange={handleChangeActivityDate}
              />
            </div>
          </div>
          {/* <!--part Activity Type input type select--> */}
          <div className="col-12">
            <h3>Activity Type</h3>
            <div className="input-group mb-3">
              <select
                className="form-select"
                id="inputGroupSelect02"
                value={props.activityType}
                onChange={handleChangeActivityType}
              >
                <option value="running">running</option>
                <option value="swimming">swimming</option>
                <option value="basketball">basketball</option>
                <option value="bike">bike</option>
                <option value="weight">weight</option>
                <option value="ping pong">ping pong</option>
                <option value="boxing">boxing</option>
                <option value="yoga">yoga</option>
                <option value="football">football</option>
                <option value="running">running</option>
                <option value="golf">golf</option>
                <option value="other">other</option>
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
                isDurationInvalid={isDurationInvalid}
                value={activityDuration}
                onChange={handleChangeActivityDuration}
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
                isDescriptionInvalid={isDescriptionInvalid}
                value={activityDescription}
                onChange={handleChangeActivityDescription}
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
