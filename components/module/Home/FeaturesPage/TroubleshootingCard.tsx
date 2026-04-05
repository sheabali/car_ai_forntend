import { Card } from "@/components/ui/card";
import { Wrench } from "lucide-react";

const TroubleshootingCard = () => {
  return (
    <Card className="p-8 border-0 bg-[#f9f9f9] shadow-sm">
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

      <div className="flex justify-between items-start">
        <div className="flex gap-4">
          <div className="shrink-0">
            <div className="flex items-center justify-center h-8 w-8 rounded-full  text-blue-600 text-sm font-semibold">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M135.2 117.4l-26.1 74.6 293.8 0-26.1-74.6C372.3 104.6 360.2 96 346.6 96L165.4 96c-13.6 0-25.7 8.6-30.2 21.4zM39.6 196.8L74.8 96.3C88.3 57.8 124.6 32 165.4 32l181.2 0c40.8 0 77.1 25.8 90.6 64.3l35.2 100.5c23.2 9.6 39.6 32.5 39.6 59.2l0 192c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-32-320 0 0 32c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32L0 256c0-26.7 16.4-49.6 39.6-59.2zM128 304a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
              </svg>
            </div>
          </div>
          <div>
            <p className="font-medium text-foreground text-sm">
              2019 Honda Civic
            </p>
            <div className="flex gap-2 mt-1">
              <span className="inline-block bg-[#87c1e5] text-white px-5 py-2  rounded text-sm font-semibold">
                Engine Stalls
              </span>
              <span className="inline-block bg-[#fdcc98] text-white px-5 py-2 rounded text-sm font-semibold">
                Check Engine Light
              </span>
            </div>
          </div>
        </div>

        <div className="ml-4 border-l-2 border-border pl-4 space-y-3">
          <div>
            <p className="text-sm font-medium text-primary mb-1">
              AI Assistant
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
