
import { motion } from "framer-motion";
import DashboardStats from "./DashboardStats";
import DashboardChartCard from "./DashboardChartCard";
import DashboardActivities from "./DashboardActivities";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const DashboardOverview = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="flex-grow"
    >
      <div className="space-y-6">
        {/* Stats Cards */}
        <DashboardStats />
        
        {/* Chart */}
        <DashboardChartCard />
        
        {/* Recent Activities */}
        <DashboardActivities />
      </div>
    </motion.div>
  );
};

export default DashboardOverview;
