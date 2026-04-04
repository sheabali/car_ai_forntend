import { Card } from "@/components/ui/card";
import { ArrowDown, Route } from "lucide-react";

const SmartCard = () => {
  return (
    <Card className="p-8 border-0 shadow-sm bg-card">
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
        <div className="flex flex-col items-center">
          <div className="text-center mb-4">
            <p className="text-sm font-medium text-foreground">User Input</p>
          </div>
          <ArrowDown className="w-5 h-5 text-primary mb-4" />
        </div>

        <div className="flex flex-col items-center">
          <div className="bg-primary/10 rounded-lg px-4 py-3 text-center mb-4">
            <p className="text-sm font-semibold text-primary">AI Diagnostics</p>
          </div>
          <ArrowDown className="w-5 h-5 text-primary mb-4" />
        </div>

        <div className="text-center">
          <p className="text-sm font-medium text-foreground">
            Specialist Output
          </p>
        </div>
      </div>
    </Card>
  );
};

export default SmartCard;
