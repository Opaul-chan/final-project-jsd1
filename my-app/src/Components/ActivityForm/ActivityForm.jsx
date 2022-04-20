import { useEffect, useState } from "react";
import "./ActivityForm.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import { use } from "express/lib/router";
// import { response } from "express";
//axios instance
// faCheckCircle

const ActivityForm = (props) => {
  const [activityName, setActivityName] = useState("");
  const [activityDate, setActivityDate] = useState("");
  const [activityDuration, setActivityDuration] = useState("");
  const [activityDescription, setActivityDescription] = useState("");
  // const [activityType, setActivityType] = useState("");
  const [isDateValid, setIsDateValid] = useState(false);
  const [isNameValid, setIsNameValid] = useState(false);
  const [isTypeValid, setIsTypeValid] = useState(false);
  const [isDurationValid, setIsDurationValid] = useState(false);
  const [isDescriptionValid, setIsDescriptionValid] = useState(false);
  const [isSubmitValid, setIsSubmitValid] = useState(false);
  const [posts, setPost] = useState(null);
  const [error, setError] = useState(null);
  // const [errorMessage, setErrorMessage] = useState("");
  const [errorActivityName, setErrorMessageActivityName] = useState("");
  const [errorActivityDate, setErrorMessageActivityDate] = useState("");
  const [errorActivityType, setErrorMessageActivityType] = useState("");
  const [errorActivityDuration, setErrorMessageActivityDuration] = useState("");
  const [errorActivityDescription, setErrorMessageActivityDescription] =
    useState("");
  const navigate = useNavigate();
  const handleChangeActivityName = (event) => {
    const newValue = event.target.value;
    if (newValue.length > 40) {
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
  const handleChangeActivityType = (event) => {
    props.setActivityType(event.target.value);
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
    if (activityName.length > 0 && activityName.length <= 40) {
      setIsNameValid(true);
    } else {
      setIsNameValid(false);
    }
  }, [activityName]);

  //validate activityType
  useEffect(() => {
    const validTypes = [
      "running",
      "ping-pong",
      "swimming",
      "basketball",
      "bike",
      "dumbbell",
      "boxing",
      "yoga",
      "tennis",
      "golf",
      "other",
      "football",
    ];
    const isTypeValid = validTypes.includes(props.activityType);
    setIsTypeValid(isTypeValid);
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
    if (activityDescription.length > 0 && activityDescription.length < 120) {
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

  const handleSubmit = () => {
    if (canSubmit) {
      //fetch req body
      let activity = {
        activityDate: activityDate,
        activityName: activityName,
        activityDuration: activityDuration,
        activityType: props.activityType,
        activityDescription: activityDescription,
      };
      toast.success("Add Activity Success");
      setTimeout(() => {
        const client = axios.create({
          baseURL: "http://localhost:4000",
        });
        client.post("/activities", activity).then((response) => {
          navigate({
            pathname: "/History",
          });
          // setPost(response.data);
          setPost(response.data).catch((error) => {
            setError(error);
          });
        });
      }, 4000);
    } else {
      toast.error("Invalid Value.Activity can't be added");
    }
    const message = "invalid value";
    if (!isNameValid) {
      setErrorMessageActivityName(message);
    }
    if (!isTypeValid) {
      setErrorMessageActivityType(message);
    }
    if (!isDurationValid) {
      setErrorMessageActivityDuration(message);
    }
    if (!isDescriptionValid) {
      setErrorMessageActivityDate(message);
    }
    if (!isDescriptionValid) {
      setErrorMessageActivityDescription(message);
    }
  };

  return (
    <section className="form-part">
      <div className="container-fluid">
        {/* <div className="your-exercise">
          <h2>Your Exercise Journal</h2>
        </div> */}
        <div className="row">
          <div className="col-8">
            <h5>Activity Name</h5>
            <span className="errorMessage">
              {errorActivityName}
              <FontAwesomeIcon
                icon={faExclamationCircle}
                className="form-control-i"
              />
            </span>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="running with my dog.(max 40 character)"
                aria-label="Username"
                aria-describedby="basic-addon1"
                value={activityName}
                onChange={handleChangeActivityName}
              />
            </div>
          </div>

          <div className="col-8">
            <h5>Activity Date</h5>
            <span className="errorMessage">
              {errorActivityDate}
              <FontAwesomeIcon
                icon={faExclamationCircle}
                className="form-control-i"
              />
            </span>
            <div className="input-group mb-3">
              <input
                type="date"
                className="form-control"
                placeholder="dd/mm/yyyy"
                aria-label="Username"
                aria-describedby="basic-addon1"
                value={activityDate}
                onChange={handleChangeActivityDate}
              />
            </div>
          </div>
          {/* <!--part Activity Type input type select--> */}
          <div className="col-8">
            <h5>Activity Type</h5>
            <span className="errorMessage">
              {errorActivityType}
              <FontAwesomeIcon
                icon={faExclamationCircle}
                className="form-control-i"
              />
            </span>
            <div className="input-group mb-3">
              <select
                className="form-select"
                id="inputGroupSelect02"
                value={props.activityType}
                onChange={handleChangeActivityType}
              >
                <option value="swimming">swimming</option>
                <option value="basketball">basketball</option>
                <option value="bike">bike</option>
                <option value="dumbbell">dumbbell</option>
                <option value="ping-pong">ping-pong</option>
                <option value="boxing">boxing</option>
                <option value="tennis">tennis</option>
                <option value="yoga">yoga</option>
                <option value="football">football</option>
                <option value="running">running</option>
                <option value="golf">golf</option>
                <option value="other">other</option>
              </select>
              <label className="input-group-text">Options</label>
            </div>
          </div>
          <div className="col-8">
            <h5>Activity Duration</h5>
            <span className="errorMessage">
              {errorActivityDuration}
              <FontAwesomeIcon
                icon={faExclamationCircle}
                className="form-control-i"
              />
            </span>
            <div className="input-group mb-3">
              <input
                type="number"
                className="form-control"
                placeholder="60"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                value={activityDuration}
                onChange={handleChangeActivityDuration}
              />
              <span className="input-group-text" id="basic-addon2">
                mins
              </span>
            </div>
          </div>
          <div className="col-8">
            <h5>Describe this journal</h5>
            <span className="errorMessage">
              {errorActivityDescription}
              <FontAwesomeIcon
                icon={faExclamationCircle}
                className="form-control-i"
              />
            </span>
            <div className="input-group">
              <span className="input-group-text">textarea</span>
              <textarea
                className="form-control"
                placeholder="Fun and Happy.(max 120 character)"
                aria-label="With textarea"
                value={activityDescription}
                onChange={handleChangeActivityDescription}
              ></textarea>
            </div>
          </div>
        </div>
        <div className="col-12">
          <button
            type="submit"
            className="btn btn-secondary submit"
            onClick={() => handleSubmit()}
          >
            {/* isSubmitValid={isSubmitValid} เป็น disabled={isSubmitValid} */}
            Add activity
          </button>
          <ToastContainer
            toastStyle={{
              backgroundColor: "black",
              fontWeight: "800px",
              color: "white",
            }}
          />
        </div>
      </div>
    </section>
  );
};
export default ActivityForm;
