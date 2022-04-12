import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Page/Home";
import History from "./Page/History";
// import Update from "./Page/Update";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  // const [activityType, setActivityType] = useState("running");
  return (
    <BrowserRouter>
      <Navbar />
      <div className="Parent">
        <div className="container-all">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/History" element={<History />} />
            {/* <Route path="/Update" element={<Update />} /> */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
