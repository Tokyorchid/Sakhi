
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DashboardChart from "@/components/DashboardChart";

const DashboardChartCard = () => {
  return (
    <Card className="sakhi-card">
      <CardHeader className="border-b border-border/50 p-6">
        <CardTitle className="text-xl font-bold text-foreground">Symptom Overview</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="h-80">
          <DashboardChart />
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardChartCard;
