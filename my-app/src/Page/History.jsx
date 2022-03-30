import Navbar from "../Components/Navbar/Navbar";
// import Footer from "../Components/Footer/Footer";
import ActivityHistory from "../Components/ActivityHistory/ActivityHistory";
import "../Components/ActivityHistory/ActivityHistory.css";

const History = () => {
  return (
    <div>
      <Navbar />
      <ActivityHistory />
      {/* <Footer /> */}
    </div>
  );
};

export default History;
