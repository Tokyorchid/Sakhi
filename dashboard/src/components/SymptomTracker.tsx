
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { useToast } from "@/hooks/use-toast";
import { Plus } from "lucide-react";

type Symptom = {
  id: string;
  name: string;
  intensity: number;
  notes: string;
  tracked: boolean;
};

const defaultSymptoms: Symptom[] = [
  { id: "1", name: "Fatigue", intensity: 0, notes: "", tracked: false },
  { id: "2", name: "Mood Swings", intensity: 0, notes: "", tracked: false },
  { id: "3", name: "Bloating", intensity: 0, notes: "", tracked: false },
  { id: "4", name: "Acne", intensity: 0, notes: "", tracked: false },
  { id: "5", name: "Headache", intensity: 0, notes: "", tracked: false },
  { id: "6", name: "Cramps", intensity: 0, notes: "", tracked: false },
];

const SymptomTracker = () => {
  const [symptoms, setSymptoms] = useState<Symptom[]>(defaultSymptoms);
  const [newSymptom, setNewSymptom] = useState("");
  const { toast } = useToast();

  const handleToggleSymptom = (id: string) => {
    setSymptoms(
      symptoms.map((symptom) =>
        symptom.id === id
          ? { ...symptom, tracked: !symptom.tracked, intensity: symptom.tracked ? 0 : symptom.intensity }
          : symptom
      )
    );
  };

  const handleIntensityChange = (id: string, value: number[]) => {
    setSymptoms(
      symptoms.map((symptom) =>
        symptom.id === id ? { ...symptom, intensity: value[0] } : symptom
      )
    );
  };

  const handleNotesChange = (id: string, notes: string) => {
    setSymptoms(
      symptoms.map((symptom) =>
        symptom.id === id ? { ...symptom, notes } : symptom
      )
    );
  };

  const handleAddSymptom = () => {
    if (!newSymptom.trim()) return;
    
    const newId = (symptoms.length + 1).toString();
    setSymptoms([
      ...symptoms,
      {
        id: newId,
        name: newSymptom,
        intensity: 0,
        notes: "",
        tracked: true,
      },
    ]);
    setNewSymptom("");
  };

  const handleSaveSymptoms = () => {
    const trackedSymptoms = symptoms.filter((s) => s.tracked);
    console.log("Saving tracked symptoms:", trackedSymptoms);
    
    toast({
      title: "Symptoms Saved",
      description: `${trackedSymptoms.length} symptoms have been recorded for today.`,
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <Input
          type="text"
          placeholder="Add new symptom"
          value={newSymptom}
          onChange={(e) => setNewSymptom(e.target.value)}
          className="flex-grow bg-secondary/50 border-border/50 text-foreground font-medium"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              handleAddSymptom();
            }
          }}
        />
        <Button 
          onClick={handleAddSymptom}
          className="bg-primary text-primary-foreground font-bold"
        >
          <Plus className="h-4 w-4 mr-1" /> Add
        </Button>
      </div>

      <div className="space-y-4">
        {symptoms.map((symptom) => (
          <Card key={symptom.id} className="p-4 border border-border/30 bg-secondary/50 hover:bg-secondary/80 transition-all">
            <div className="flex items-start">
              <div className="flex items-center h-6">
                <Checkbox
                  id={`symptom-${symptom.id}`}
                  checked={symptom.tracked}
                  onCheckedChange={() => handleToggleSymptom(symptom.id)}
                  className="border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                />
              </div>
              <div className="ml-3 space-y-3 w-full">
                <Label
                  htmlFor={`symptom-${symptom.id}`}
                  className="text-sm font-bold text-foreground cursor-pointer"
                  onClick={() => handleToggleSymptom(symptom.id)}
                >
                  {symptom.name}
                </Label>
                
                {symptom.tracked && (
                  <>
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs text-foreground/70 font-medium">
                        <span>Mild</span>
                        <span>Moderate</span>
                        <span>Severe</span>
                      </div>
                      <Slider
                        value={[symptom.intensity]}
                        min={0}
                        max={10}
                        step={1}
                        onValueChange={(value) => handleIntensityChange(symptom.id, value)}
                        className="w-full"
                      />
                    </div>
                    
                    <Input
                      type="text"
                      placeholder="Add notes"
                      value={symptom.notes}
                      onChange={(e) => handleNotesChange(symptom.id, e.target.value)}
                      className="text-sm bg-secondary/70 border-border/30 text-foreground font-medium"
                    />
                  </>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Button 
        onClick={handleSaveSymptoms}
        className="w-full bg-primary text-primary-foreground font-bold hover:bg-primary/90"
      >
        Save Symptoms
      </Button>
    </div>
  );
};

export default SymptomTracker;
