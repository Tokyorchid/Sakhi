
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CalendarDays, TrendingUp, Pill, MessageCircle, Users } from "lucide-react";

interface DashboardSidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const DashboardSidebar = ({ activeTab, setActiveTab }: DashboardSidebarProps) => {
  // Handle chat button click to redirect to Flask chatbot
  const handleChatButtonClick = () => {
    console.log("Chat button clicked, redirecting to Flask chatbot");
    // ROOT PATH OF BOT
    window.location.href = 'http://127.0.0.1:5000/';
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="w-full md:w-64 flex-shrink-0"
    >
      <Card className="sakhi-card">
        <CardContent className="p-0">
          <nav className="flex flex-col">
            <Button
              variant="ghost"
              className={`sakhi-sidebar-item ${
                activeTab === "overview" ? "active" : ""
              }`}
              onClick={() => setActiveTab("overview")}
            >
              <TrendingUp className="h-5 w-5" />
              <span>Overview</span>
            </Button>
            <Button
              variant="ghost"
              className={`sakhi-sidebar-item ${
                activeTab === "symptoms" ? "active" : ""
              }`}
              onClick={() => setActiveTab("symptoms")}
            >
              <Pill className="h-5 w-5" />
              <span>Symptoms</span>
            </Button>
            <Button
              variant="ghost"
              className={`sakhi-sidebar-item ${
                activeTab === "cycle" ? "active" : ""
              }`}
              onClick={() => setActiveTab("cycle")}
            >
              <CalendarDays className="h-5 w-5" />
              <span>Cycle</span>
            </Button>
            <Button
              variant="ghost"
              className={`sakhi-sidebar-item ${
                activeTab === "ai" ? "active" : ""
              }`}
              onClick={handleChatButtonClick}
            >
              <MessageCircle className="h-5 w-5" />
              <span>AI Support</span>
            </Button>
            <Button
              variant="ghost"
              className={`sakhi-sidebar-item ${
                activeTab === "community" ? "active" : ""
              }`}
              onClick={() => setActiveTab("community")}
            >
              <Users className="h-5 w-5" />
              <span>Community</span>
            </Button>
          </nav>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default DashboardSidebar;
