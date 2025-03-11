import OTTList from "../components/OTTList";
import BillPayment from "../components/BillPayment";
import "./Dashboard.css";  

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Welcome Image */}
      <h1 className="dashboard-title">Your Dashboard</h1>
      <img src="/images/welcome.jpg" alt="Welcome Aboard" className="welcome-image" />
      
      
      <div className="dashboard-grid">
        <OTTList />
        {/* <BillPayment /> */}
      </div>
    </div>
  );
};

export default Dashboard;
