import { Card } from "@/components/ui/card";
import { MoveDown, Route } from "lucide-react";

const SmartCard = () => {
  return (
    <Card className="p-8 bg-[#f9f9f9] border-0 shadow-sm">
      <div className="flex items-center gap-3 mb-4">
        <Route className="w-6 h-6 text-primary" />
        <h2 className="text-2xl font-bold text-foreground">
          Smart Problem Routing
        </h2>
      </div>

      <p className="text-muted-foreground mb-12 leading-relaxed">
        Our &quot;Shop Foreman AI&quot; automatically directs you to the right
        diagnostic expert.
      </p>

      <div className="space-y-6 relative">
        {/* Flow diagram */}
        <div className="flex flex-col bg-white py-5 rounded-2xl items-center">
          <div className="text-center ">
            <p className="text-sm text-primary font-semibold">User Input</p>
          </div>
        </div>
        <div className="flex justify-center">
          <MoveDown className="w-5 h-5 text-center text-primary " />
        </div>

        <div className="flex flex-col bg-white py-5 rounded-2xl items-center">
          <p className="text-sm text-primary font-semibold">AI Diagnostics</p>
        </div>
        <div className="flex justify-center">
          <MoveDown className="w-5 h-5 text-center text-primary" />
        </div>
        <div className="flex flex-col bg-white py-5 rounded-2xl items-center">
          <p className="text-sm text-primary font-semibold">AI Diagnostics</p>
        </div>
      </div>
    </Card>
  );
};

export default SmartCard;
