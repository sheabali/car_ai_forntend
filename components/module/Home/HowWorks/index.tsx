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
        "The Shop Foreman AI analyzes the issue and connects you to the right diagnostic specialist instantly.",
    },
    {
      icon: DocumentIcon,
      title: "Guided Diagnosis",
      description:
        "Follow step-by-step recommendations, perform tests, and save or export the diagnostic session.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f9f9f9] py-16 px-4">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-red-600" />
            <span className="text-sm font-medium text-foreground">
              How it works
            </span>
            <div className="h-px w-8 bg-red-600" />
          </div>

          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            <span className="text-balance">
              From Problem to Diagnosis in Minutes
            </span>
          </h1>

          <p className="mx-auto max-w-2xl text-lg text-foreground/70">
            SmartAutoTech.ai simplifies complex vehicle diagnostics into a
            guided, step-by-step workflow your technicians can follow with
            confidence.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className={`relative w-[300px] rounded-3xl bg-card p-8 transition-all hover:-translate-y-2 hover:shadow-lg ${
                  index === 0 ? "lg:col-span-1" : ""
                }`}
              >
                <div className="mb-6  inline-flex rounded-full bg-linear-to-r from-[#11357a] to-[#5d82c8] p-4">
                  <Icon />
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-8">
                  {step.title}
                </h3>

                <p className="text-base text-foreground/70">
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
