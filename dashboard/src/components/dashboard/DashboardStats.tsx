
import { Card, CardContent } from "@/components/ui/card";
import { CalendarDays, Activity, Heart } from "lucide-react";

const DashboardStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="sakhi-stats-card">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-foreground/70 font-medium">Cycle Day</p>
              <h3 className="text-2xl font-bold text-primary mt-1">Day 14</h3>
            </div>
            <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
              <CalendarDays className="h-6 w-6 text-primary" />
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="sakhi-stats-card">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-foreground/70 font-medium">Symptom Count</p>
              <h3 className="text-2xl font-bold text-primary mt-1">3 Today</h3>
            </div>
            <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
              <Activity className="h-6 w-6 text-primary" />
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="sakhi-stats-card">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-foreground/70 font-medium">Next Period</p>
              <h3 className="text-2xl font-bold text-primary mt-1">In 14 days</h3>
            </div>
            <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
              <Heart className="h-6 w-6 text-primary" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardStats;
