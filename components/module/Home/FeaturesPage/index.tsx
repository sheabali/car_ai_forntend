import AssistantsCard from "./AssistantsCard";
import SessionCard from "./SessionCard";
import SmartCard from "./SmartCard";
import TroubleshootingCard from "./TroubleshootingCard";

export default function FeaturesSection() {
  return (
    <main className="min-h-screen bg-background">
      <section className="pt-16 sm:pt-20 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4 sm:mb-6">
            <div className="w-6 sm:w-8 h-px bg-red-500"></div>
            <span className="text-xs sm:text-sm font-medium text-red-500">
              Features
            </span>
            <div className="w-6 sm:w-8 h-px bg-red-500"></div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
            Everything You Need to Diagnose Smarter
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl md:max-w-2xl mx-auto leading-relaxed">
            Powerful AI tools designed to help automotive technicians
            troubleshoot faster, reduce errors, and work more efficiently.
          </p>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
            <AssistantsCard />
            <SmartCard />
            <TroubleshootingCard />
            <SessionCard />
          </div>
        </div>
      </section>
    </main>
  );
}
