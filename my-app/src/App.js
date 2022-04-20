import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Page/Home";
import History from "./Page/History";
import Navbar from "./Components/Navbar/Navbar";
// import Update from "./Page/Update";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="Parent">
        <div className="container-all">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/History" element={<History />} />
            {/* <Route path="/Update/:id" element={<Update />} /> */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
