
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center px-6">
      <motion.div 
        className="text-center max-w-md"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.h1 
          className="text-6xl font-light text-neutral-900 mb-4"
          variants={fadeIn}
        >
          404
        </motion.h1>
        <motion.p 
          className="text-2xl text-neutral-600 mb-8"
          variants={fadeIn}
        >
          Page not found
        </motion.p>
        <motion.p 
          className="text-neutral-500 mb-8"
          variants={fadeIn}
        >
          The page you are looking for doesn't exist or has been moved.
        </motion.p>
        <motion.div variants={fadeIn}>
          <Button 
            onClick={() => navigate('/')}
            className="bg-neutral-900 text-white rounded-full px-8 py-6 text-lg hover:bg-neutral-800 transition-all duration-300"
          >
            Go Home
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFound;
