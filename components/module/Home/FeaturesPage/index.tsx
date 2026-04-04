import AssistantsCard from "./AssistantsCard";
import SessionCard from "./SessionCard";
import SmartCard from "./SmartCard";
import TroubleshootingCard from "./TroubleshootingCard";

export default function FeaturesSection() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-8 h-px bg-red-500"></div>
            <span className="text-sm font-medium text-red-500">Features</span>
            <div className="w-8 h-px bg-red-500"></div>
          </div>

          <h1 className="text-[48px] font-bold sm:text-6xl text-foreground mb-6 text-balance">
            Everything You Need to Diagnose Smarter
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Powerful AI tools designed to help automotive technicians
            troubleshoot faster, reduce errors, and work more efficiently.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* AI Diagnostic Assistants */}
            <AssistantsCard />

            {/* Smart Problem Routing */}
            <SmartCard />

            {/* Faster Troubleshooting */}
            <TroubleshootingCard />

            {/* Session History & Reports */}
            <SessionCard />
          </div>
        </div>
      </section>
    </main>
  );
}
