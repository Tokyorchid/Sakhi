
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SymptomTracker from "@/components/SymptomTracker";
import DashboardOverview from "./DashboardOverview";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

interface TabContentWrapperProps {
  children: React.ReactNode;
}

const TabContentWrapper = ({ children }: TabContentWrapperProps) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="flex-grow"
    >
      {children}
    </motion.div>
  );
};

export const SymptomsTabContent = () => {
  return (
    <TabContentWrapper>
      <div className="space-y-6">
        <Card className="sakhi-card">
          <CardHeader className="border-b border-border/50 p-6">
            <CardTitle className="text-xl font-bold text-foreground">Symptom Tracker</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <SymptomTracker />
          </CardContent>
        </Card>
      </div>
    </TabContentWrapper>
  );
};

export const CycleTabContent = () => {
  return (
    <TabContentWrapper>
      <div className="space-y-6">
        <Card className="sakhi-card">
          <CardHeader className="border-b border-border/50 p-6">
            <CardTitle className="text-xl font-bold text-foreground">Cycle Tracker</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-foreground/80 font-medium">Cycle tracking content will appear here.</p>
          </CardContent>
        </Card>
      </div>
    </TabContentWrapper>
  );
};

export const AITabContent = () => {
  return (
    <TabContentWrapper>
      <div className="space-y-6">
        <Card className="sakhi-card">
          <CardHeader className="border-b border-border/50 p-6">
            <CardTitle className="text-xl font-bold text-foreground">AI Support</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-foreground/80 font-medium">AI support content will appear here.</p>
          </CardContent>
        </Card>
      </div>
    </TabContentWrapper>
  );
};

export const CommunityTabContent = () => {
  return (
    <TabContentWrapper>
      <div className="space-y-6">
        <Card className="sakhi-card">
          <CardHeader className="border-b border-border/50 p-6">
            <CardTitle className="text-xl font-bold text-foreground">Community</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-foreground/80 font-medium">Community content will appear here.</p>
          </CardContent>
        </Card>
      </div>
    </TabContentWrapper>
  );
};

export { DashboardOverview };
