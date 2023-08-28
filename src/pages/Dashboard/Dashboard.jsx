import React from "react";

import DashboardLayout from "../../components/DashboardLayout";
import PortfolioSection from "./components/PortfolioSection";

const Dashboard = ({}) => {
  return (
    <DashboardLayout title={"DashBoard"}>
      <PortfolioSection />
    </DashboardLayout>
  );
};

export default Dashboard;
