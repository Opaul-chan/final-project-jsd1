import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Page/Home";
import History from "./Page/History";
const App = () => {
  // const [activityType, setActivityType] = useState("running");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/History" element={<History />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
