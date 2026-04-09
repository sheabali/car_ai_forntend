"use client";

import AiIcon from "./AiIcon";
import CarIcon from "./CarIcon";
import DocumentIcon from "./DocumentIcon";
import MessageIcon from "./MessageIcon";

const HowWorks = () => {
  const steps = [
    {
      icon: CarIcon,
      title: "Vehicle Setup",
      description:
        "Enter the vehicle's year, make, model, and key symptoms to start the diagnostic process.",
    },
    {
      icon: MessageIcon,
      title: "Describe the Issue",
      description:
        "Explain the problem in plain language—no technical formatting required.",
    },
    {
      icon: AiIcon,
      title: "Smart AI Routing",
      description:
        "The Shop Foreman AI analyzes the issue and connects you to the right AI diagnostic process instantly.",
    },
    {
      icon: DocumentIcon,
      title: "Guided Diagnosis",
      description:
        "Follow step-by-step recommendations, perform tests, and save or export the diagnostic session.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f9f9f9] py-12 sm:py-16 px-4">
      <div className="container mx-auto">
        {/* HEADER */}
        <div className="mb-12 sm:mb-16 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="h-px w-6 sm:w-8 bg-red-600" />
            <span className="text-sm font-medium text-foreground">
              How it works
            </span>
            <div className="h-px w-6 sm:w-8 bg-red-600" />
          </div>

          <h1 className="mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            From Problem to Diagnosis in Minutes
          </h1>

          <p className="mx-auto max-w-xl sm:max-w-2xl text-sm sm:text-base md:text-lg text-foreground/70 px-2">
            SmartAutoTech.ai simplifies complex vehicle diagnostics into a
            guided, step-by-step workflow your technicians can follow with
            confidence.
          </p>
        </div>

        {/* GRID */}
        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="w-full rounded-2xl sm:rounded-3xl bg-card p-5 sm:p-6 lg:p-8 transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-lg"
              >
                {/* ICON */}
                <div className="mb-4 sm:mb-6 inline-flex rounded-full bg-linear-to-r from-[#11357a] to-[#5d82c8] p-3 sm:p-4">
                  <Icon />
                </div>

                {/* TITLE */}
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">
                  {step.title}
                </h3>

                {/* DESC */}
                <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default HowWorks;
