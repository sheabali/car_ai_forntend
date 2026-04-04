import { Card } from "@/components/ui/card";
import { FileText } from "lucide-react";

const SessionCard = () => {
  return (
    <Card className="p-8 border-0 shadow-sm bg-card">
      <div className="flex items-center gap-3 mb-4">
        <FileText className="w-6 h-6 text-primary" />
        <h2 className="text-2xl font-bold text-foreground">
          Session History & Reports
        </h2>
      </div>

      <p className="text-muted-foreground mb-8 leading-relaxed">
        Maintain a detailed log of every diagnostic session. Easily review past
        cases and export reports for training or compliance.
      </p>

      <div className="bg-linear-to-b from-muted/30 to-transparent rounded-lg p-6 border border-border/50">
        <div className="mb-4">
          <h3 className="font-bold text-foreground mb-2">
            Vehicle: Ford F-150
          </h3>
          <div className="space-y-2 text-sm">
            <p className="text-muted-foreground">
              <span className="font-medium text-foreground">Issue:</span> Engine
              misfire
            </p>
            <p className="text-muted-foreground">
              <span className="font-medium text-foreground">Status:</span>{" "}
              Completed
            </p>
            <p className="text-muted-foreground">
              <span className="font-medium text-foreground">Date:</span> 27 - 04
              - 26
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default SessionCard;
