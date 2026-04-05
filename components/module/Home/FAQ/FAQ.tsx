"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    id: "1",
    question: "What is SmartAutoTech.ai?",
    answer:
      "SmartAutoTech.ai is an AI-powered diagnostic platform designed for automotive repair shops. It helps technicians troubleshoot vehicle issues faster by providing structured, step-by-step guidance based on the problem description and vehicle details.",
  },
  {
    id: "2",
    question: "How does the AI diagnostic system work?",
    answer:
      "The AI system analyzes the problem description and vehicle information you provide, then generates targeted diagnostic steps to help identify the issue efficiently.",
  },
  {
    id: "3",
    question: "What can I ask the AI Technician?",
    answer:
      "You can ask the AI Technician about diagnostic procedures, troubleshooting steps, maintenance guidelines, and common issues related to vehicle repair and maintenance.",
  },
  {
    id: "4",
    question: "Is my data safe when chatting with an AI?",
    answer:
      "Yes, your data is secure. We implement industry-standard encryption and security protocols to protect all information shared during AI-powered sessions.",
  },
  {
    id: "5",
    question: "Can the AI Technician learn from conversations?",
    answer:
      "The AI system improves over time through aggregated insights, but all conversations are anonymized and handled according to our privacy policy.",
  },
  {
    id: "6",
    question: "What are the limitations of the AI Technician?",
    answer:
      "While the AI Technician is highly capable, it should complement professional expertise. Always refer to manufacturer specifications and consult with certified technicians for critical repairs.",
  },
];

export default function FAQ() {
  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-8 bg-red-500"></div>
            <span className="text-sm font-semibold text-red-500 uppercase tracking-wide">
              FAQ
            </span>
            <div className="h-px w-8 bg-red-500"></div>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-black mb-4 leading-tight">
            Everything You Need to Know Before You Subscribe
          </h1>

          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            We&apos;ve answered the most common questions from repair shop
            owners and technicians.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className="border border-gray-200 rounded-lg px-6 py-4"
            >
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="flex items-start gap-4">
                  <span className="text-gray-700 font-semibold text-base flex-shrink-0">
                    {index + 1}.
                  </span>
                  <span className="text-gray-900 font-semibold text-base text-left">
                    {item.question}
                  </span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="pt-4 pl-10 text-gray-600 text-sm sm:text-base leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
