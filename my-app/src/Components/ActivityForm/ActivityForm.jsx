import React, { useEffect, useState } from "react";
import "./ActivityForm.css";

const ActivityForm = (props) => {
  const [activityName, setActivityName] = useState("");
  const [activityDate, setActivityDate] = useState("");
  const [activityDuration, setActivityDuration] = useState("");
  const [activityDescription, setActivityDescription] = useState("");
  const [isDateValid, setIsDateValid] = useState(false);
  const [isNameValid, setIsNameValid] = useState(false);
  const [isTypeValid, setIsTypeValid] = useState(false);
  const [isDurationValid, setIsDurationValid] = useState(false);
  const [isDescriptionValid, setIsDescriptionValid] = useState(false);
  const [isSubmitValid, setIsSubmitValid] = useState(false);

  const handleChangeActivityName = (event) => {
    const newValue = event.target.value;
    if (newValue.length > 10) {
      return;
    } else {
      setActivityName(event.target.value);
    }
  };

  const handleChangeActivityDate = (event) => {
    setActivityDate(event.target.value);
  };

  const handleChangeActivityDuration = (event) => {
    setActivityDuration(event.target.value);
  };

  const handleChangeActivityDescription = (event) => {
    setActivityDescription(event.target.value);
  };

  //validate activityDate
  useEffect(() => {
    if (activityDate !== "") {
      setIsDateValid(true);
    } else {
      setIsDateValid(false);
    }
  }, [activityDate]);
  //validate activityName
  useEffect(() => {
    if (activityName.length >= 3 && activityName.length <= 10) {
      setIsNameValid(true);
    } else {
      setIsNameValid(false);
    }
  }, [activityName]);
  //validate activityType
  useEffect(() => {
    const validTypes = ["running", "ping-pong"];
    const isTypeValid = validTypes.includes(props.activityType);
    setIsTypeValid(isTypeValid);
    console.log(isTypeValid);
  }, [props.activityType]);
  //validate activityDuration
  useEffect(() => {
    if (activityDuration > 0 && activityDuration.length > 0) {
      setIsDurationValid(true);
    } else {
      setIsDurationValid(false);
    }
  }, [activityDuration]);
  //validate activityDescription
  useEffect(() => {
    if (activityDescription.length > 9 && activityDescription.length < 120) {
      setIsDescriptionValid(true);
    } else {
      setIsDescriptionValid(false);
    }
  }, [activityDescription]);
  // validate submit
  const canSubmit =
    isDateValid &&
    isNameValid &&
    isTypeValid &&
    isDurationValid &&
    isDescriptionValid;

  const onClick = (type) => {
    if (canSubmit) {
      //fetch
      alert("OK");
    } else {
      alert("Invalid value");
    }
  };
  return (
    <section className="form-part">
      <div className="container-fluid">
        <div className="your-exercise">
          <h2>Your Exercise Journal</h2>
        </div>
        <div className="row">
          <div className="col-12">
            <h3>Activity Name</h3>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="running with my dog."
                aria-label="Username"
                aria-describedby="basic-addon1"
                isNameInvalid={isNameValid}
                value={activityName}
                onChange={handleChangeActivityName}
              />
            </div>
          </div>
          <div className="col-12">
            <h3>Activity Date</h3>
            <div className="input-group mb-3">
              <input
                type="date"
                className="form-control"
                placeholder="dd/mm/yyyy"
                aria-label="Username"
                aria-describedby="basic-addon1"
                isDateInvalid={isDateValid}
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

                // onChange={handleChangeActivityType}
              >
                <option value="running">running</option>
                <option value="swimming">swimming</option>
                <option value="basketball">basketball</option>
                <option value="bike">bike</option>
                <option value="dumbbell">dumbbell</option>
                <option value="ping-pong">ping-pong</option>
                <option value="boxing">boxing</option>
                <option value="tennis">tennis</option>
                <option value="yoga">yoga</option>
                <option value="soccer">soccer</option>
                <option value="running">running</option>
                <option value="golf">golf</option>
                <option value="other">other</option>
              </select>
              <label className="input-group-text" for="inputGroupSelect02">
                Options
              </label>
            </div>
          </div>
          <div className="col-12">
            <h3>Activity Duration</h3>
            <div className="input-group mb-3">
              <input
                type="number"
                className="form-control"
                placeholder="60"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                isDurationInvalid={isDurationValid}
                value={activityDuration}
                onChange={handleChangeActivityDuration}
              />
              <span className="input-group-text" id="basic-addon2">
                mins
              </span>
            </div>
          </div>
          <div className="col-12">
            <h3>Describe this journal</h3>
            <div className="input-group">
              <span className="input-group-text">textarea</span>
              <textarea
                className="form-control"
                placeholder="Fun and Happy"
                aria-label="With textarea"
                isDescriptionInvalid={isDescriptionValid}
                value={activityDescription}
                onChange={handleChangeActivityDescription}
              ></textarea>
            </div>
          </div>
        </div>
        <div class="col-12 mt-5">
          <button
            type="submit"
            class="btn btn-secondary submit"
            style={{ marginBottom: "30px" }}
            isSubmitValid={isSubmitValid}
            onClick={() => onClick()}
          >
            Add activity
          </button>
        </div>
      </div>
    </section>
  );
};

export default ActivityForm;
