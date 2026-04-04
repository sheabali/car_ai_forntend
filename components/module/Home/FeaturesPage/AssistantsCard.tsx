import { Card } from "@/components/ui/card";
import { ArrowUp, MessageCircle, Search } from "lucide-react";

const AssistantsCard = () => {
  return (
    <Card className="p-8 border-0 shadow-sm bg-card">
      <div className="flex items-center gap-3 mb-4">
        <MessageCircle className="w-6 h-6 text-primary" />
        <h2 className="text-2xl font-bold text-foreground">
          AI Diagnostic Assistants
        </h2>
      </div>

      <p className="text-muted-foreground mb-8 leading-relaxed">
        Get step-by-step troubleshooting guidance powered by specialized
        automotive AI.
      </p>

      <div className="bg-linear-to-b from-muted/30 to-transparent rounded-lg p-6 border border-border/50">
        <div className="flex items-start gap-3 mb-4">
          <div className="flex-1">
            <p className="text-sm text-foreground font-medium">
              2018 Toyota Corolla — engine stalls when braking and check engine
              light is on
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center gap-2 mt-4">
          <div className="flex items-center gap-2">
            <button className="w-8 h-8 rounded-full flex items-center justify-center text-muted-foreground hover:bg-muted transition-colors">
              <span className="text-xs">
                <Search className="w-4 h-4" />
              </span>
            </button>
            <span className="text-xs text-muted-foreground">Search</span>
          </div>

          <button className="w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center text-xs font-semibold hover:bg-primary hover:text-primary-foreground transition-colors">
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </Card>
  );
};

export default AssistantsCard;
