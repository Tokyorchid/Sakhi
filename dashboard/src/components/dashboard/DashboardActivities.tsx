
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, Pill, MessageCircle } from "lucide-react";

const DashboardActivities = () => {
  return (
    <Card className="sakhi-card">
      <CardHeader className="border-b border-border/50 p-6">
        <CardTitle className="text-xl font-bold text-foreground">Recent Activities</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-4">
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex items-center py-3 px-4 border-b border-border/30 last:border-0 hover:bg-secondary/50 transition-all rounded-lg">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                {item === 1 && <CalendarDays className="h-5 w-5 text-primary" />}
                {item === 2 && <Pill className="h-5 w-5 text-primary" />}
                {item === 3 && <MessageCircle className="h-5 w-5 text-primary" />}
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">
                  {item === 1 && "Period started"}
                  {item === 2 && "Logged new symptoms"}
                  {item === 3 && "Received AI recommendation"}
                </p>
                <p className="text-xs text-foreground/70 mt-1">
                  {item === 1 && "2 days ago"}
                  {item === 2 && "Yesterday"}
                  {item === 3 && "Today"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardActivities;
