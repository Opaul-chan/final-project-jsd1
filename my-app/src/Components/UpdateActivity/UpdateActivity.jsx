import "./UpdateActivity.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
//import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const UpdateActivity = (props) => {
  const [activityName, setActivityName] = useState("");
  const [activityDate, setActivityDate] = useState("");
  const [activityDuration, setActivityDuration] = useState("");
  const [activityDescription, setActivityDescription] = useState("");
  const [activityType, setActivityType] = useState("");
  const [isDateValid, setIsDateValid] = useState(true);
  const [isNameValid, setIsNameValid] = useState(true);
  const [isTypeValid, setIsTypeValid] = useState(true);
  const [isDurationValid, setIsDurationValid] = useState(true);
  const [isDescriptionValid, setIsDescriptionValid] = useState(true);

  useState("");
  const params = useParams();
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
    setActivityType(event.target.value);
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
    if (activityName.length > 3 && activityName.length <= 40) {
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
    const isTypeValid = validTypes.includes(activityType);
    setIsTypeValid(isTypeValid);
  }, [activityType]);

  //validate activityDuration
  useEffect(() => {
    if (activityDuration > 0) {
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

  const updateRequest = async () => {
    if (canSubmit) {
      await axios
        .put(
          `https://final-project-backend-9u8ejtttb-opaul-chan.vercel.app/activities/${params.id}`,
          {
            activityDate: activityDate,
            activityName: activityName,
            activityDuration: activityDuration,
            activityType: activityType,
            activityDescription: activityDescription,
          }
        )
        .then((res) => res.data);
    } else {
      toast.error("Invalid Value.Activity can't be updated");
    }
  };
  const cutDate = (date) => date.slice(0, 10);

  useEffect(() => {
    axios
      .get(
        `https://final-project-backend-9u8ejtttb-opaul-chan.vercel.app/activities/${params.id}`
      )
      .then((res) => {
        setActivityName(res.data.activityName);
        setActivityDate(cutDate(res.data.activityDate));
        setActivityDuration(res.data.activityDuration);
        setActivityDescription(res.data.activityDescription);
        setActivityType(res.data.activityType);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [params.id]);

  const onSubmit = (e) => {
    toast.success("Updated Activity Success");
    e.preventDefault();
    setTimeout(() => {
      updateRequest().then(() => navigate("/History"));
    }, 3000);
  };

  return (
    <section className="banner-part-history">
      <form onSubmit={onSubmit}>
        <ToastContainer
          toastStyle={{
            backgroundColor: "black",
            fontWeight: "800px",
            color: "white",
          }}
        />
        <div className="container-fluid">
          <h2 className="history">Update Activity</h2>
          <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col">
              <div className="card-his img-fluid">
                <div className="card-body-his">
                  <h5 className="card-title-his">Activity Date:</h5>
                  <div className="col-8">
                    <div className="input-group mb-3">
                      <input
                        type="date"
                        className="form-control"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        value={activityDate}
                        onChange={handleChangeActivityDate}
                      />
                    </div>
                  </div>
                  <h5 className="card-title-his">Activity Name:</h5>
                  <div className="col-8">
                    <div className="row">
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="max 40 character"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                          value={activityName}
                          onChange={handleChangeActivityName}
                        />
                      </div>
                    </div>
                  </div>
                  <h5 className="card-title-his">Activity Duration:</h5>
                  <div className="col-8">
                    <div className="input-group mb-3">
                      <input
                        type="number"
                        className="form-control"
                        placeholder={activityDuration}
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
                  <h5 className="card-title-his">Activity Type:</h5>
                  <div className="col-8">
                    <div className="input-group mb-3">
                      <select
                        className="form-select"
                        id="inputGroupSelect02"
                        value={activityType}
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
                  <h5 className="card-title-his">Describe this journal:</h5>
                  <div className="row">
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
                  <button type="submit" className="btn btn-secondary submit">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default UpdateActivity;
