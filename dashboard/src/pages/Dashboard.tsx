
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import { 
  DashboardOverview, 
  SymptomsTabContent, 
  CycleTabContent, 
  AITabContent, 
  CommunityTabContent 
} from "@/components/dashboard/DashboardTabContent";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const location = useLocation();

  // Check for tab parameter in URL when component mounts
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const tabParam = queryParams.get('tab');
    
    if (tabParam && ['overview', 'symptoms', 'cycle', 'ai', 'community'].includes(tabParam)) {
      setActiveTab(tabParam);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <DashboardHeader />

        <div className="flex flex-wrap md:flex-nowrap gap-6">
          {/* Sidebar */}
          <DashboardSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

          {/* Main Content */}
          {activeTab === "overview" && <DashboardOverview />}
          {activeTab === "symptoms" && <SymptomsTabContent />}
          {activeTab === "cycle" && <CycleTabContent />}
          {activeTab === "ai" && <AITabContent />}
          {activeTab === "community" && <CommunityTabContent />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
