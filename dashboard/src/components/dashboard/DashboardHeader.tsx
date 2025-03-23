
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const DashboardHeader = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="mb-8"
    >
      <h1 className="text-3xl font-bold text-primary">DASHBOARD</h1>
      <p className="text-foreground/80 mt-2 font-medium">Welcome to your personal Sakhi health companion</p>
    </motion.div>
  );
};

export default DashboardHeader;
