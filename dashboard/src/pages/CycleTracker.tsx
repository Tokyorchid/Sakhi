import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { useToast } from "@/hooks/use-toast";
import { addDays, format, isSameDay } from "date-fns";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

type CycleDay = {
  date: Date;
  type: "period" | "fertile" | "ovulation" | null;
};

const CycleTracker = () => {
  const { toast } = useToast();
  const [date, setDate] = useState<Date>(new Date());
  const [cycleDays, setCycleDays] = useState<CycleDay[]>([]);
  const [cycleLength, setCycleLength] = useState(28);
  const [periodLength, setPeriodLength] = useState(5);
  const [lastPeriod, setLastPeriod] = useState<Date | null>(null);

  const handleMarkPeriod = () => {
    const today = new Date();
    setLastPeriod(today);
    
    const newCycleDays = [...cycleDays];

    for (let i = 0; i < periodLength; i++) {
      const periodDay = addDays(today, i);
      newCycleDays.push({ date: periodDay, type: "period" });
    }

    const ovulationDay = addDays(today, 14);
    newCycleDays.push({ date: ovulationDay, type: "ovulation" });

    for (let i = -5; i <= 1; i++) {
      if (i !== 0) newCycleDays.push({ date: addDays(ovulationDay, i), type: "fertile" });
    }

    setCycleDays(newCycleDays);

    toast({
      title: "Period Marked",
      description: `Your period has been recorded starting from ${format(today, "MMMM d, yyyy")}.`,
    });
  };

  return (
    <div className="min-h-screen bg-[#1B1F2B] py-12 text-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mb-8">
          <h1 className="text-3xl font-light text-[#BCB8D1]">Cycle Tracker</h1>
          <p className="text-[#A5A3C0] mt-2">Track your menstrual cycle and get predictions</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="md:col-span-2">
            <Card className="border-none shadow-sm rounded-xl overflow-hidden h-full bg-[#424451]">
              <CardHeader className="border-b border-[#BCB8D1] p-6">
                <CardTitle className="text-xl font-medium text-[#BCB8D1]">Calendar</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={(date) => date && setDate(date)}
                  className="rounded-md"
                  modifiers={{
                    period: (date) => cycleDays.some(day => day.type === "period" && isSameDay(day.date, date)),
                    fertile: (date) => cycleDays.some(day => day.type === "fertile" && isSameDay(day.date, date)),
                    ovulation: (date) => cycleDays.some(day => day.type === "ovulation" && isSameDay(day.date, date)),
                  }}
                  modifiersClassNames={{
                    period: "bg-rose-400 text-rose-900 font-bold border border-rose-500",
                    fertile: "bg-blue-500 text-blue-50 font-bold border border-blue-600",
                    ovulation: "bg-violet-500 text-violet-50 font-bold border border-violet-600",
                  }}
                />
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="md:col-span-1">
            <div className="space-y-6">
              <Card className="border-none shadow-sm rounded-xl overflow-hidden bg-[#424451]">
                <CardHeader className="border-b border-[#BCB8D1] p-6">
                  <CardTitle className="text-xl font-medium text-[#BCB8D1]">Cycle Information</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-[#A5A3C0]">Last Period</p>
                      <p className="text-lg font-medium text-white">
                        {lastPeriod ? format(lastPeriod, "MMMM d, yyyy") : "Not set"}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-[#A5A3C0]">Cycle Length</p>
                      <p className="text-lg font-medium text-white">{cycleLength} days</p>
                    </div>
                    <div>
                      <p className="text-sm text-[#A5A3C0]">Period Length</p>
                      <p className="text-lg font-medium text-white">{periodLength} days</p>
                    </div>
                    <div>
                      <p className="text-sm text-[#A5A3C0]">Next Period</p>
                      <p className="text-lg font-medium text-white">
                        {lastPeriod ? format(addDays(lastPeriod, cycleLength), "MMMM d, yyyy") : "Not available"}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-sm rounded-xl overflow-hidden bg-[#424451]">
                <CardContent className="p-6">
                  <Button onClick={handleMarkPeriod} className="w-full bg-[#BCB8D1] text-black hover:bg-[#A5A3C0]">
                    Mark Period Start
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-none shadow-sm rounded-xl overflow-hidden bg-[#424451]">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-4 h-4 rounded-full bg-rose-400 mr-2"></div>
                      <span className="text-sm text-[#BCB8D1]">Period</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 rounded-full bg-blue-500 mr-2"></div>
                      <span className="text-sm text-[#BCB8D1]">Fertile Window</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 rounded-full bg-violet-500 mr-2"></div>
                      <span className="text-sm text-[#BCB8D1]">Ovulation</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CycleTracker;
