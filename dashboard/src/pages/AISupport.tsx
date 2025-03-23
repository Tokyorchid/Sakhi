
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, Send, User } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

type Message = {
  id: number;
  text: string;
  sender: "user" | "ai";
  timestamp: Date;
};

const AISupport = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm OvaCare's AI assistant. I'm here to answer your questions about PCOS. How can I help you today?",
      sender: "ai",
      timestamp: new Date(),
    },
  ]);

  const handleSendMessage = () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      sender: "user",
      timestamp: new Date(),
    };
    
    setMessages([...messages, userMessage]);
    setInput("");

    // Simulate AI response
    setTimeout(() => {
      let response = "";
      
      if (input.toLowerCase().includes("symptom")) {
        response = "Common PCOS symptoms include irregular periods, excessive hair growth, acne, weight gain, and difficulty getting pregnant. Track your symptoms in our Symptom Tracker to identify patterns over time.";
      } else if (input.toLowerCase().includes("treatment") || input.toLowerCase().includes("manage")) {
        response = "PCOS management typically includes lifestyle changes (diet, exercise), medications to regulate periods or reduce symptoms, and sometimes fertility treatments. A personalized approach works best - I recommend discussing options with your healthcare provider.";
      } else if (input.toLowerCase().includes("diet") || input.toLowerCase().includes("food") || input.toLowerCase().includes("eat")) {
        response = "A balanced diet can help manage PCOS symptoms. Consider eating foods with a low glycemic index, lean proteins, and healthy fats. Limiting processed foods and added sugars may help reduce insulin resistance, which is common in PCOS.";
      } else {
        response = "Thank you for your question. I'm here to provide information about PCOS management, symptoms, treatments, and lifestyle recommendations. Could you please provide more details about what specific aspect of PCOS you'd like to learn about?";
      }

      const aiMessage: Message = {
        id: messages.length + 2,
        text: response,
        sender: "ai",
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, aiMessage]);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-8"
        >
          <h1 className="text-3xl font-light text-neutral-900">AI Support</h1>
          <p className="text-neutral-600 mt-2">Get personalized answers to your PCOS questions</p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <Card className="border-none shadow-sm rounded-xl overflow-hidden">
            <CardHeader className="border-b border-neutral-100 p-6">
              <CardTitle className="text-xl font-medium text-neutral-900 flex items-center">
                <MessageCircle className="mr-2 h-5 w-5" />
                OvaCare AI Assistant
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <ScrollArea className="h-[calc(100vh-400px)] min-h-[400px] p-6">
                <div className="space-y-6">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                          message.sender === "user"
                            ? "bg-neutral-900 text-white"
                            : "bg-neutral-100 text-neutral-900"
                        }`}
                      >
                        <div className="flex items-center mb-1">
                          {message.sender === "ai" ? (
                            <MessageCircle className="h-4 w-4 mr-2" />
                          ) : (
                            <User className="h-4 w-4 mr-2" />
                          )}
                          <span className="text-xs font-medium">
                            {message.sender === "user" ? "You" : "OvaCare AI"}
                          </span>
                        </div>
                        <p className="text-sm">{message.text}</p>
                        <div className="mt-1 text-right">
                          <span className="text-xs opacity-70">
                            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
              <div className="p-4 border-t border-neutral-100">
                <div className="flex items-center space-x-2">
                  <Input
                    placeholder="Type your question..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-grow"
                  />
                  <Button 
                    onClick={handleSendMessage} 
                    size="icon"
                    className="bg-neutral-900 hover:bg-neutral-800"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default AISupport;
