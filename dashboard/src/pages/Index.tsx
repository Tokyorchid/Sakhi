
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, LineChart, MessageCircle, Calendar, HeartPulse } from "lucide-react";

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

const Index = () => {
  const navigate = useNavigate();

  const handleChatButtonClick = () => {
    console.log("Chat button clicked, redirecting to Flask chatbot");
    window.location.href = 'http://127.0.0.1:5000/';
  };

  const navigateToDashboardTab = (tab: string) => {
    navigate(`/dashboard?tab=${tab}`);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <motion.section 
        className="py-24 px-6 md:px-12 lg:px-24 bg-secondary max-w-7xl mx-auto w-full rounded-t-3xl mt-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.div
          className="text-center mb-16"
          variants={fadeIn}
        >
          <div className="inline-block pill-tag mb-4">
            <HeartPulse className="w-4 h-4 mr-2" /> Your Health Journey
          </div>
          <h2 className="text-3xl font-light text-foreground mb-4">
            Dashboard
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience healthcare reimagined through AI-powered conversations
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
        >
          <motion.div variants={fadeIn}>
            <Card className="glass-card h-full">
              <CardContent className="p-8 flex flex-col h-full">
                <MessageCircle className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-xl font-medium text-foreground mb-2">AI Support</h3>
                <p className="text-muted-foreground mb-6 flex-grow">Get personalized advice and answers to your health-related questions.</p>
                <Button 
                  variant="link" 
                  className="text-primary p-0 flex items-center gap-1 font-normal"
                  onClick={handleChatButtonClick}
                >
                  Chat now <ChevronRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeIn}>
            <Card className="glass-card h-full">
              <CardContent className="p-8 flex flex-col h-full">
                <LineChart className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-xl font-medium text-foreground mb-2">Symptom Tracking</h3>
                <p className="text-muted-foreground mb-6 flex-grow">Monitor your symptoms and identify patterns for better management.</p>
                <Button 
                  variant="link" 
                  className="text-primary p-0 flex items-center gap-1 font-normal"
                  onClick={() => navigateToDashboardTab('symptoms')}
                >
                  Learn more <ChevronRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeIn}>
            <Card className="glass-card h-full">
              <CardContent className="p-8 flex flex-col h-full">
                <Calendar className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-xl font-medium text-foreground mb-2">Cycle Tracking</h3>
                <p className="text-muted-foreground mb-6 flex-grow">Track your menstrual cycle and receive personalized insights.</p>
                <Button 
                  variant="link" 
                  className="text-primary p-0 flex items-center gap-1 font-normal"
                  onClick={() => navigate('/cycle-tracker')}
                >
                  Learn more <ChevronRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Index;
