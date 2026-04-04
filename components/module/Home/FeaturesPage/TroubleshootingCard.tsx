import { Card } from "@/components/ui/card";
import { Wrench } from "lucide-react";

const TroubleshootingCard = () => {
  return (
    <Card className="p-8 border-0 shadow-sm bg-card">
      <div className="flex items-center gap-3 mb-4">
        <Wrench className="w-6 h-6 text-primary" />
        <h2 className="text-2xl font-bold text-foreground">
          Faster Troubleshooting
        </h2>
      </div>

      <p className="text-muted-foreground mb-8 leading-relaxed">
        Reduce guesswork and identify issues quicker with structured diagnostic
        steps.
      </p>

      <div className="space-y-6">
        <div className="flex gap-4">
          <div className="shrink-0">
            <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold">
              🚗
            </div>
          </div>
          <div>
            <p className="font-medium text-foreground text-sm">
              2019 Honda Civic
            </p>
            <div className="flex gap-2 mt-1">
              <span className="inline-block bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium">
                Engine Stalls
              </span>
              <span className="inline-block bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs font-medium">
                Check Engine Light
              </span>
            </div>
          </div>
        </div>

        <div className="ml-4 border-l-2 border-border pl-4 space-y-3">
          <div>
            <p className="text-sm font-medium text-primary mb-1">
              🤖 AI Assistant
            </p>
            <div className="text-xs text-muted-foreground space-y-1">
              <p>Possible causes:</p>
              <ul className="list-disc list-inside text-xs">
                <li>Faulty spark plugs</li>
                <li>Ignition coil failure</li>
              </ul>
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-foreground mb-1">
              Step 1: Check spark plugs
            </p>
            <p className="text-xs text-muted-foreground">
              Inspect the spark plugs for wear, damage, or fouling
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default TroubleshootingCard;
